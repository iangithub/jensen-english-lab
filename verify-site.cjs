const { chromium } = require("playwright");
const path = require("path");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const target of [
    { name: "desktop", width: 1440, height: 1100 },
    { name: "mobile", width: 390, height: 1100 },
  ]) {
    const page = await browser.newPage({ viewport: { width: target.width, height: target.height } });
    const errors = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("pageerror", (error) => errors.push(error.message));

    await page.goto(`file://${path.resolve(__dirname, "index.html").replace(/\\/g, "/")}`);
    await page.waitForSelector("#sentenceGrid .sentence-card", { timeout: 5000 });
    await page.waitForSelector("#evidenceGrid .evidence-card", { timeout: 5000 });

    const metrics = await page.evaluate(() => ({
      sentences: document.querySelectorAll("#sentenceGrid .sentence-card").length,
      evidence: document.querySelectorAll("#evidenceGrid .evidence-card").length,
      words: document.querySelectorAll("#wordGrid .word-card").length,
      hasSpeech: "speechSynthesis" in window,
      bodyWidth: document.body.scrollWidth,
      viewportWidth: window.innerWidth,
    }));

    await page.locator("[data-topic='Travel']").click();
    await page.waitForFunction(() => document.querySelectorAll("#sentenceGrid .sentence-card").length === 8);
    await page.locator("#searchBox").fill("airport");
    await page.waitForFunction(() => document.querySelectorAll("#sentenceGrid .sentence-card").length >= 1);
    await page.screenshot({ path: path.resolve(__dirname, `${target.name}.png`), fullPage: true });

    results.push({ target: target.name, ...metrics, errors });
    await page.close();
  }

  await browser.close();
  console.log(JSON.stringify(results, null, 2));
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
