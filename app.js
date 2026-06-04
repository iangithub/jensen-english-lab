const analysisItems = [
  {
    title: "高頻字先行",
    text: "核心字多是 better, important, simple, need, think 這類常見字。聽者不用停下來解碼，注意力可以放在意思。",
  },
  {
    title: "句型線性乾淨",
    text: "常用主詞加動詞加受詞，少用多層關係子句。對課堂英文學習者來說，結構一聽就能抓住。",
  },
  {
    title: "重述同一概念",
    text: "一個想法會用兩三個短句重講。第一句沒聽清楚，第二句和第三句會把意思補回來。",
  },
  {
    title: "保留認知緩衝",
    text: "Right, you know, and so 這類小停頓讓聽者有時間處理上一句，不會被下一串資訊追著跑。",
  },
  {
    title: "少俚語和文化梗",
    text: "他通常直接講事情本身，不靠只有母語者才懂的慣用語。這讓跨文化溝通更穩。",
  },
  {
    title: "先框架再內容",
    text: "先說重點有幾個，再逐一展開。聽眾腦中先有資料夾，後面的資訊就比較容易放進去。",
  },
];

const evidenceItems = [
  {
    source: "DOFI article quoting Joe Rogan transcript",
    url: "https://blog.dofi.fun/2026/06/04/jensen-huang/",
    quote: "That was a huge moment.",
    zh: "那是一個很大的時刻。",
    pattern: "That was + a/an + adjective + moment.",
    observation: "先用極短句標記重要性，讓聽者知道這裡是重點。",
    practice: "That was a hard lesson.",
  },
  {
    source: "DOFI article quoting Joe Rogan transcript",
    url: "https://blog.dofi.fun/2026/06/04/jensen-huang/",
    quote: "We need energy growth.",
    zh: "我們需要能源成長。",
    pattern: "We need + noun.",
    observation: "需求句不繞路，先把核心名詞放出來。",
    practice: "We need a clear plan.",
  },
  {
    source: "NVIDIA GTC 2024 official blog",
    url: "https://blogs.nvidia.com/blog/2024-gtc-keynote/",
    quote: "We need another way of doing computing.",
    zh: "我們需要另一種運算方式。",
    pattern: "We need another way of + V-ing.",
    observation: "用 another way 把複雜技術轉成人人聽得懂的方向。",
    practice: "We need another way of learning English.",
  },
  {
    source: "Caltech 2024 commencement transcript",
    url: "https://singjupost.com/jensen-huangs-speech-at-caltech-2024-commencement-transcript/",
    quote: "I don’t have to change my speech.",
    zh: "我不用改我的演講了。",
    pattern: "I do not have to + V.",
    observation: "幽默也用直線句型，不靠難字或文化梗。",
    practice: "I do not have to rush.",
  },
  {
    source: "Dell Technologies World 2024 transcript",
    url: "https://www.delltechnologies.com/asset/en-au/solutions/business-solutions/briefs-summaries/dell-technologies-world-2024-monday-keynote.pdf",
    quote: "We have two things we have to do.",
    zh: "我們有兩件事必須做。",
    pattern: "We have + number + things we have to + V.",
    observation: "先告訴聽眾數量，再展開內容，降低聽力負擔。",
    practice: "We have three things we have to check.",
  },
  {
    source: "Computex 2024 transcript notes",
    url: "https://www.ernestchiang.com/en/posts/2024/computex-2024-keynote-with-nvidia-ceo-jensen-huang/",
    quote: "Today we have a lot to cover.",
    zh: "今天我們有很多內容要談。",
    pattern: "Today we have + noun + to + V.",
    observation: "開場先預告範圍，聽眾會知道接下來要進入框架。",
    practice: "Today we have a simple goal to reach.",
  },
  {
    source: "Joe Rogan #2422 transcript",
    url: "https://podscripts.co/podcasts/the-joe-rogan-experience/2422-jensen-huang",
    quote: "We tested it afterwards.",
    zh: "我們後來才測試它。",
    pattern: "We + past verb + it + adverb.",
    observation: "講故事時常用短句推進事件，動作很清楚。",
    practice: "We fixed it later.",
  },
  {
    source: "Dell Technologies World 2024 transcript",
    url: "https://www.delltechnologies.com/asset/en-au/solutions/business-solutions/briefs-summaries/dell-technologies-world-2024-monday-keynote.pdf",
    quote: "This is a giant deal.",
    zh: "這是一件大事。",
    pattern: "This is + a/an + adjective + noun.",
    observation: "先判斷，再解釋。聽者不用先猜你要表達的態度。",
    practice: "This is a useful habit.",
  },
];

const sentenceTopics = [
  "All",
  "Greetings",
  "Self-intro",
  "Needs",
  "Questions",
  "Travel",
  "Food",
  "Work",
  "Opinions",
  "Problems",
  "Closing",
];

const sentences = [
  {
    topic: "Greetings",
    level: "A1",
    en: "Hi, I am glad to meet you.",
    zh: "嗨，很高興認識你。",
    pattern: "I am glad to + V",
    note: "短句開場，不用複雜寒暄。",
  },
  {
    topic: "Greetings",
    level: "A1",
    en: "Good morning. How is your day going?",
    zh: "早安。你今天過得如何？",
    pattern: "How is + noun + going?",
    note: "可用在工作、旅遊、第一次見面。",
  },
  {
    topic: "Greetings",
    level: "A1",
    en: "It is nice to see you again.",
    zh: "很高興再次見到你。",
    pattern: "It is nice to + V",
    note: "清楚表達友善，不靠俚語。",
  },
  {
    topic: "Greetings",
    level: "A2",
    en: "I have heard a lot about your work.",
    zh: "我聽過很多關於你工作的事。",
    pattern: "I have heard a lot about + noun",
    note: "適合商務破冰。",
  },
  {
    topic: "Greetings",
    level: "A1",
    en: "This is my first time here.",
    zh: "這是我第一次來這裡。",
    pattern: "This is my first time + place",
    note: "一句話打開後續話題。",
  },
  {
    topic: "Greetings",
    level: "A2",
    en: "I am still learning, so please speak a little slower.",
    zh: "我還在學，所以請說慢一點。",
    pattern: "I am still + V-ing, so please + V",
    note: "先說明狀態，再提出需求。",
  },
  {
    topic: "Greetings",
    level: "A1",
    en: "Thanks for taking the time to talk with me.",
    zh: "謝謝你花時間跟我聊。",
    pattern: "Thanks for + V-ing",
    note: "禮貌又直接。",
  },
  {
    topic: "Greetings",
    level: "A2",
    en: "Let us start with a simple question.",
    zh: "我們從一個簡單問題開始吧。",
    pattern: "Let us start with + noun",
    note: "先建立框架。",
  },
  {
    topic: "Self-intro",
    level: "A1",
    en: "My name is Ian, and I am from Taiwan.",
    zh: "我叫 Ian，來自台灣。",
    pattern: "My name is + name, and I am from + place",
    note: "兩個短資訊用 and 連起來。",
  },
  {
    topic: "Self-intro",
    level: "A1",
    en: "I work in software, and I enjoy building tools.",
    zh: "我做軟體，也喜歡打造工具。",
    pattern: "I work in + field, and I enjoy + V-ing",
    note: "職業加興趣，容易接話。",
  },
  {
    topic: "Self-intro",
    level: "A2",
    en: "I am here to learn and meet new people.",
    zh: "我來這裡是為了學習並認識新朋友。",
    pattern: "I am here to + V",
    note: "說目的，對方知道怎麼延伸。",
  },
  {
    topic: "Self-intro",
    level: "A2",
    en: "I do not speak perfect English, but I can explain my idea.",
    zh: "我的英文不完美，但我能說明我的想法。",
    pattern: "I do not + V, but I can + V",
    note: "降低壓力，同時展現溝通意圖。",
  },
  {
    topic: "Self-intro",
    level: "A1",
    en: "I like simple ideas that solve real problems.",
    zh: "我喜歡能解決真實問題的簡單想法。",
    pattern: "I like + noun + that + V",
    note: "一句話表達價值觀。",
  },
  {
    topic: "Self-intro",
    level: "A2",
    en: "I have been learning English for a few years.",
    zh: "我已經學英文幾年了。",
    pattern: "I have been + V-ing + for + time",
    note: "常用現在完成進行式。",
  },
  {
    topic: "Self-intro",
    level: "A1",
    en: "In my free time, I read and listen to podcasts.",
    zh: "我空閒時會閱讀和聽 podcast。",
    pattern: "In my free time, I + V",
    note: "簡單提供可聊天的線索。",
  },
  {
    topic: "Self-intro",
    level: "A2",
    en: "The main thing about me is that I like to keep learning.",
    zh: "關於我最主要的是，我喜歡持續學習。",
    pattern: "The main thing about me is that + sentence",
    note: "先框架，再補內容。",
  },
  {
    topic: "Needs",
    level: "A1",
    en: "I need a little help with this.",
    zh: "我需要一點這方面的幫忙。",
    pattern: "I need + noun + with + noun",
    note: "直接提出需求。",
  },
  {
    topic: "Needs",
    level: "A1",
    en: "I want a clear answer, not a long answer.",
    zh: "我想要清楚的答案，不是很長的答案。",
    pattern: "I want + noun, not + noun",
    note: "用對比讓需求更清楚。",
  },
  {
    topic: "Needs",
    level: "A2",
    en: "Could you show me the first step?",
    zh: "你可以示範第一步給我看嗎？",
    pattern: "Could you + V + me + noun?",
    note: "禮貌請求，非常實用。",
  },
  {
    topic: "Needs",
    level: "A2",
    en: "I need five minutes to think about it.",
    zh: "我需要五分鐘想一下。",
    pattern: "I need + time + to + V",
    note: "幫自己爭取思考時間。",
  },
  {
    topic: "Needs",
    level: "A1",
    en: "Please write it down for me.",
    zh: "請幫我寫下來。",
    pattern: "Please + V + it + down",
    note: "聽不懂時改用文字確認。",
  },
  {
    topic: "Needs",
    level: "A2",
    en: "I am looking for a cheaper option.",
    zh: "我在找比較便宜的選項。",
    pattern: "I am looking for + noun",
    note: "購物和方案討論都能用。",
  },
  {
    topic: "Needs",
    level: "A2",
    en: "The important thing is speed, not price.",
    zh: "重要的是速度，不是價格。",
    pattern: "The important thing is + noun, not + noun",
    note: "先講判斷標準。",
  },
  {
    topic: "Needs",
    level: "A1",
    en: "Can I get one more copy?",
    zh: "我可以再拿一份嗎？",
    pattern: "Can I get + noun?",
    note: "萬用拿取句型。",
  },
  {
    topic: "Questions",
    level: "A1",
    en: "What does this mean?",
    zh: "這是什麼意思？",
    pattern: "What does + noun + mean?",
    note: "最基本的解碼問題。",
  },
  {
    topic: "Questions",
    level: "A1",
    en: "Where should I go next?",
    zh: "我接下來應該去哪裡？",
    pattern: "Where should I + V?",
    note: "問下一步。",
  },
  {
    topic: "Questions",
    level: "A2",
    en: "Why is this important?",
    zh: "為什麼這很重要？",
    pattern: "Why is + noun + adjective?",
    note: "請對方補原因。",
  },
  {
    topic: "Questions",
    level: "A2",
    en: "How do you usually handle this problem?",
    zh: "你通常怎麼處理這個問題？",
    pattern: "How do you usually + V + noun?",
    note: "問經驗，不只是問答案。",
  },
  {
    topic: "Questions",
    level: "A1",
    en: "Can you say that again?",
    zh: "你可以再說一次嗎？",
    pattern: "Can you + V + that + again?",
    note: "聽力救援句。",
  },
  {
    topic: "Questions",
    level: "A2",
    en: "What is the best way to start?",
    zh: "最好的開始方式是什麼？",
    pattern: "What is the best way to + V?",
    note: "把大問題縮成第一步。",
  },
  {
    topic: "Questions",
    level: "A2",
    en: "Do you mean this one or that one?",
    zh: "你的意思是這個還是那個？",
    pattern: "Do you mean + A + or + B?",
    note: "用選項確認。",
  },
  {
    topic: "Questions",
    level: "A1",
    en: "Is this okay for you?",
    zh: "這樣對你可以嗎？",
    pattern: "Is this + adjective + for you?",
    note: "確認對方接受度。",
  },
  {
    topic: "Travel",
    level: "A1",
    en: "I am trying to find the train station.",
    zh: "我正在找火車站。",
    pattern: "I am trying to find + place",
    note: "說明目前目標。",
  },
  {
    topic: "Travel",
    level: "A1",
    en: "Is it far from here?",
    zh: "離這裡遠嗎？",
    pattern: "Is it far from + place?",
    note: "簡短問距離。",
  },
  {
    topic: "Travel",
    level: "A2",
    en: "Which bus should I take?",
    zh: "我應該搭哪一班公車？",
    pattern: "Which + noun + should I + V?",
    note: "旅行常用 should。",
  },
  {
    topic: "Travel",
    level: "A2",
    en: "I need to be there before six.",
    zh: "我需要六點前到那裡。",
    pattern: "I need to be + place + before + time",
    note: "時間需求要先說清楚。",
  },
  {
    topic: "Travel",
    level: "A1",
    en: "Can you point to it on the map?",
    zh: "你可以在地圖上指給我看嗎？",
    pattern: "Can you point to + noun + on + noun?",
    note: "用地圖降低誤解。",
  },
  {
    topic: "Travel",
    level: "A2",
    en: "I think I took the wrong train.",
    zh: "我想我搭錯火車了。",
    pattern: "I think I + past verb",
    note: "先說判斷，再求助。",
  },
  {
    topic: "Travel",
    level: "A1",
    en: "How much is a ticket to the airport?",
    zh: "到機場的票多少錢？",
    pattern: "How much is + noun?",
    note: "票價、物價都能用。",
  },
  {
    topic: "Travel",
    level: "A2",
    en: "I would like a seat near the window.",
    zh: "我想要靠窗的座位。",
    pattern: "I would like + noun",
    note: "禮貌表達偏好。",
  },
  {
    topic: "Food",
    level: "A1",
    en: "I would like this one, please.",
    zh: "我想要這個，謝謝。",
    pattern: "I would like + noun, please",
    note: "點餐萬用句。",
  },
  {
    topic: "Food",
    level: "A1",
    en: "What do you recommend?",
    zh: "你推薦什麼？",
    pattern: "What do you recommend?",
    note: "讓對方給選項。",
  },
  {
    topic: "Food",
    level: "A2",
    en: "I cannot eat peanuts. Is that okay?",
    zh: "我不能吃花生。這樣可以嗎？",
    pattern: "I cannot eat + food",
    note: "飲食限制要直接說。",
  },
  {
    topic: "Food",
    level: "A1",
    en: "Can I have the menu in English?",
    zh: "我可以拿英文菜單嗎？",
    pattern: "Can I have + noun?",
    note: "有禮貌且清楚。",
  },
  {
    topic: "Food",
    level: "A2",
    en: "This looks good. I will try it.",
    zh: "這看起來不錯。我試試看。",
    pattern: "This looks + adjective. I will + V",
    note: "兩個短句比長句更穩。",
  },
  {
    topic: "Food",
    level: "A1",
    en: "Could we get the bill, please?",
    zh: "我們可以結帳嗎？",
    pattern: "Could we get + noun, please?",
    note: "餐廳收尾句。",
  },
  {
    topic: "Food",
    level: "A2",
    en: "I am not very hungry, so I will order something small.",
    zh: "我不是很餓，所以會點小份的。",
    pattern: "I am not very + adjective, so I will + V",
    note: "原因加決定。",
  },
  {
    topic: "Food",
    level: "A1",
    en: "Is this spicy?",
    zh: "這會辣嗎？",
    pattern: "Is this + adjective?",
    note: "短到不會錯。",
  },
  {
    topic: "Work",
    level: "A2",
    en: "I am working on a small project.",
    zh: "我正在做一個小專案。",
    pattern: "I am working on + noun",
    note: "說明工作狀態。",
  },
  {
    topic: "Work",
    level: "A2",
    en: "The goal is simple. We want a faster process.",
    zh: "目標很簡單。我們想要更快的流程。",
    pattern: "The goal is + adjective. We want + noun",
    note: "先框架，再補需求。",
  },
  {
    topic: "Work",
    level: "A2",
    en: "I can send you the file after the meeting.",
    zh: "會議後我可以把檔案寄給你。",
    pattern: "I can + V + you + noun + after + noun",
    note: "工作承諾句。",
  },
  {
    topic: "Work",
    level: "A2",
    en: "Let me explain the problem in two parts.",
    zh: "讓我把問題分成兩部分說明。",
    pattern: "Let me + V + noun + in + number + parts",
    note: "黃仁勳式先分框架。",
  },
  {
    topic: "Work",
    level: "B1",
    en: "The first issue is time. The second issue is cost.",
    zh: "第一個問題是時間。第二個問題是成本。",
    pattern: "The first issue is + noun. The second issue is + noun",
    note: "重複句型降低聽者負擔。",
  },
  {
    topic: "Work",
    level: "A2",
    en: "I agree with the main idea, but I have one concern.",
    zh: "我同意主要想法，但我有一個顧慮。",
    pattern: "I agree with + noun, but I have + noun",
    note: "先肯定，再提出差異。",
  },
  {
    topic: "Work",
    level: "A2",
    en: "Can we make the next step very clear?",
    zh: "我們可以把下一步說清楚嗎？",
    pattern: "Can we make + noun + adjective?",
    note: "把會議導回行動。",
  },
  {
    topic: "Work",
    level: "B1",
    en: "If we start today, we can finish this by Friday.",
    zh: "如果今天開始，我們週五前可以完成。",
    pattern: "If + sentence, we can + V",
    note: "簡單條件句。",
  },
  {
    topic: "Opinions",
    level: "A1",
    en: "I think this is a good idea.",
    zh: "我覺得這是好主意。",
    pattern: "I think + sentence",
    note: "最穩的意見開頭。",
  },
  {
    topic: "Opinions",
    level: "A2",
    en: "For me, the key point is trust.",
    zh: "對我來說，關鍵是信任。",
    pattern: "For me, the key point is + noun",
    note: "用 key point 聚焦。",
  },
  {
    topic: "Opinions",
    level: "A2",
    en: "That makes sense to me.",
    zh: "這對我來說合理。",
    pattern: "That makes sense to me",
    note: "自然表達理解。",
  },
  {
    topic: "Opinions",
    level: "A2",
    en: "I see it a little differently.",
    zh: "我的看法有一點不同。",
    pattern: "I see it + adverb",
    note: "溫和不同意。",
  },
  {
    topic: "Opinions",
    level: "B1",
    en: "The idea is strong, but the timing is hard.",
    zh: "想法很強，但時機很難。",
    pattern: "The idea is + adjective, but + noun + is + adjective",
    note: "用對比說出判斷。",
  },
  {
    topic: "Opinions",
    level: "A2",
    en: "I am not sure yet. I need more information.",
    zh: "我還不確定。我需要更多資訊。",
    pattern: "I am not sure yet. I need + noun",
    note: "不確定也能說得清楚。",
  },
  {
    topic: "Opinions",
    level: "B1",
    en: "In simple terms, this saves time.",
    zh: "簡單來說，這會節省時間。",
    pattern: "In simple terms, + sentence",
    note: "把複雜事拉回簡單語言。",
  },
  {
    topic: "Opinions",
    level: "A2",
    en: "Can I give you a quick example?",
    zh: "我可以給你一個簡短例子嗎？",
    pattern: "Can I give you + noun?",
    note: "先告知要舉例。",
  },
  {
    topic: "Problems",
    level: "A1",
    en: "I have a problem with my phone.",
    zh: "我的手機有問題。",
    pattern: "I have a problem with + noun",
    note: "求助核心句。",
  },
  {
    topic: "Problems",
    level: "A2",
    en: "I cannot find my room key.",
    zh: "我找不到我的房間鑰匙。",
    pattern: "I cannot find + noun",
    note: "清楚說明缺失物。",
  },
  {
    topic: "Problems",
    level: "A2",
    en: "Something is wrong with the payment.",
    zh: "付款出了點問題。",
    pattern: "Something is wrong with + noun",
    note: "不知道細節時也能求助。",
  },
  {
    topic: "Problems",
    level: "A1",
    en: "I do not understand this message.",
    zh: "我看不懂這個訊息。",
    pattern: "I do not understand + noun",
    note: "不要假裝懂。",
  },
  {
    topic: "Problems",
    level: "A2",
    en: "Can you help me fix this?",
    zh: "你可以幫我修這個嗎？",
    pattern: "Can you help me + V?",
    note: "help 後接原形動詞。",
  },
  {
    topic: "Problems",
    level: "A2",
    en: "I made a mistake. Let me try again.",
    zh: "我犯了一個錯。讓我再試一次。",
    pattern: "I made + noun. Let me + V",
    note: "承認錯誤，再接行動。",
  },
  {
    topic: "Problems",
    level: "B1",
    en: "The screen is frozen, and I cannot move forward.",
    zh: "畫面卡住了，我無法繼續。",
    pattern: "The + noun + is + adjective, and I cannot + V",
    note: "描述狀態加結果。",
  },
  {
    topic: "Problems",
    level: "A2",
    en: "Is there another way to do this?",
    zh: "有其他方式可以做這件事嗎？",
    pattern: "Is there another way to + V?",
    note: "尋找替代方案。",
  },
  {
    topic: "Closing",
    level: "A1",
    en: "Thank you. This was very helpful.",
    zh: "謝謝你。這非常有幫助。",
    pattern: "This was very + adjective",
    note: "收尾要明確感謝。",
  },
  {
    topic: "Closing",
    level: "A2",
    en: "I will send you a message later.",
    zh: "我晚點會傳訊息給你。",
    pattern: "I will + V + you + noun + later",
    note: "清楚交代後續。",
  },
  {
    topic: "Closing",
    level: "A2",
    en: "Let us keep in touch.",
    zh: "我們保持聯絡。",
    pattern: "Let us + V",
    note: "簡短自然。",
  },
  {
    topic: "Closing",
    level: "A2",
    en: "It was great talking with you.",
    zh: "跟你聊天很愉快。",
    pattern: "It was great + V-ing",
    note: "適合對話結束。",
  },
  {
    topic: "Closing",
    level: "B1",
    en: "Before we finish, let me repeat the next step.",
    zh: "結束前，讓我重複下一步。",
    pattern: "Before we + V, let me + V",
    note: "用重述避免漏接。",
  },
  {
    topic: "Closing",
    level: "A1",
    en: "See you next time.",
    zh: "下次見。",
    pattern: "See you + time",
    note: "最穩的道別句。",
  },
  {
    topic: "Closing",
    level: "A2",
    en: "I learned a lot from you today.",
    zh: "我今天從你身上學到很多。",
    pattern: "I learned a lot from + person + today",
    note: "禮貌且有溫度。",
  },
  {
    topic: "Closing",
    level: "A2",
    en: "If you have time, I would like to talk again.",
    zh: "如果你有時間，我想再聊一次。",
    pattern: "If + sentence, I would like to + V",
    note: "邀約但不強迫。",
  },
];

sentences.forEach((sentence, index) => {
  sentence.id = `${slug(sentence.topic)}-${index + 1}-${slug(sentence.en)}`;
});

const wordCategories = [
  {
    name: "People",
    words: [
      ["I", "我", "I need help."],
      ["you", "你", "You can start."],
      ["we", "我們", "We can try."],
      ["they", "他們", "They are here."],
      ["friend", "朋友", "My friend is waiting."],
      ["team", "團隊", "Our team is small."],
      ["person", "人", "This person can help."],
      ["name", "名字", "My name is Ian."],
      ["guest", "客人", "The guest is early."],
      ["manager", "經理", "The manager is busy."],
    ],
  },
  {
    name: "Actions",
    words: [
      ["go", "去", "I go there today."],
      ["get", "拿到、取得", "Can I get one?"],
      ["need", "需要", "I need time."],
      ["want", "想要", "I want water."],
      ["think", "認為", "I think it works."],
      ["know", "知道", "I know the answer."],
      ["learn", "學習", "I learn English."],
      ["try", "嘗試", "Let me try."],
      ["send", "寄送", "I will send it."],
      ["wait", "等待", "Please wait here."],
    ],
  },
  {
    name: "Time",
    words: [
      ["today", "今天", "I am free today."],
      ["tomorrow", "明天", "See you tomorrow."],
      ["now", "現在", "I need it now."],
      ["later", "稍後", "Call me later."],
      ["morning", "早上", "Good morning."],
      ["night", "晚上", "Have a good night."],
      ["week", "週", "Next week works."],
      ["minute", "分鐘", "Give me one minute."],
      ["before", "之前", "Come before six."],
      ["after", "之後", "Talk after lunch."],
    ],
  },
  {
    name: "Places",
    words: [
      ["here", "這裡", "I am here."],
      ["there", "那裡", "Go there first."],
      ["home", "家", "I am going home."],
      ["office", "辦公室", "The office is close."],
      ["station", "車站", "Where is the station?"],
      ["airport", "機場", "I need the airport."],
      ["hotel", "飯店", "My hotel is near."],
      ["room", "房間", "This is my room."],
      ["street", "街道", "Cross the street."],
      ["store", "商店", "The store is open."],
    ],
  },
  {
    name: "Questions",
    words: [
      ["what", "什麼", "What is this?"],
      ["where", "哪裡", "Where are we?"],
      ["when", "何時", "When do we start?"],
      ["why", "為什麼", "Why is it late?"],
      ["how", "如何", "How do I pay?"],
      ["which", "哪一個", "Which one is better?"],
      ["can", "可以", "Can you help?"],
      ["should", "應該", "What should I do?"],
      ["mean", "意思是", "What does it mean?"],
      ["again", "再一次", "Say it again."],
    ],
  },
  {
    name: "Work",
    words: [
      ["work", "工作", "I work in software."],
      ["project", "專案", "The project is simple."],
      ["meeting", "會議", "The meeting starts now."],
      ["file", "檔案", "I sent the file."],
      ["goal", "目標", "The goal is clear."],
      ["issue", "議題、問題", "The issue is time."],
      ["cost", "成本", "The cost is high."],
      ["plan", "計畫", "This plan works."],
      ["step", "步驟", "What is the next step?"],
      ["result", "結果", "The result is good."],
    ],
  },
  {
    name: "Travel",
    words: [
      ["ticket", "票", "I need a ticket."],
      ["bus", "公車", "Which bus should I take?"],
      ["train", "火車", "The train is late."],
      ["map", "地圖", "Show me the map."],
      ["left", "左邊", "Turn left."],
      ["right", "右邊", "Turn right."],
      ["near", "附近", "Is it near here?"],
      ["far", "遠", "It is not far."],
      ["seat", "座位", "This seat is free."],
      ["window", "窗戶", "I like the window seat."],
    ],
  },
  {
    name: "Food",
    words: [
      ["water", "水", "I need water."],
      ["menu", "菜單", "Can I see the menu?"],
      ["rice", "飯", "I like rice."],
      ["coffee", "咖啡", "One coffee, please."],
      ["bill", "帳單", "Can we get the bill?"],
      ["spicy", "辣的", "Is this spicy?"],
      ["hungry", "餓的", "I am hungry."],
      ["small", "小的", "I want a small one."],
      ["order", "點餐", "I will order this."],
      ["recommend", "推薦", "What do you recommend?"],
    ],
  },
  {
    name: "Feelings",
    words: [
      ["good", "好的", "This is good."],
      ["great", "很棒的", "That is great."],
      ["happy", "開心的", "I am happy."],
      ["tired", "累的", "I am tired."],
      ["ready", "準備好的", "I am ready."],
      ["sure", "確定的", "I am not sure."],
      ["clear", "清楚的", "The idea is clear."],
      ["hard", "困難的", "This is hard."],
      ["easy", "容易的", "It is easy."],
      ["important", "重要的", "This is important."],
    ],
  },
  {
    name: "Problems",
    words: [
      ["problem", "問題", "I have a problem."],
      ["help", "幫忙", "I need help."],
      ["wrong", "錯的", "Something is wrong."],
      ["lost", "迷路、遺失", "I am lost."],
      ["mistake", "錯誤", "I made a mistake."],
      ["fix", "修理", "Can you fix this?"],
      ["slow", "慢的", "The network is slow."],
      ["late", "晚的", "I am late."],
      ["missing", "不見的", "My key is missing."],
      ["understand", "理解", "I understand now."],
    ],
  },
  {
    name: "Connectors",
    words: [
      ["and", "而且", "I learn and practice."],
      ["but", "但是", "It is good but hard."],
      ["so", "所以", "I am tired, so I will rest."],
      ["because", "因為", "I stayed because it rained."],
      ["if", "如果", "If you can, please call."],
      ["first", "首先", "First, we listen."],
      ["second", "第二", "Second, we repeat."],
      ["then", "然後", "Then we talk."],
      ["before", "之前", "Ask before you go."],
      ["after", "之後", "Call after lunch."],
    ],
  },
  {
    name: "Polite",
    words: [
      ["please", "請", "Please help me."],
      ["thanks", "謝謝", "Thanks for your help."],
      ["sorry", "抱歉", "Sorry, I am late."],
      ["excuse me", "不好意思", "Excuse me, where is this?"],
      ["could", "可以嗎", "Could you repeat that?"],
      ["would", "想要、會", "I would like this."],
      ["may", "可以", "May I sit here?"],
      ["welcome", "不客氣、歡迎", "You are welcome."],
      ["appreciate", "感謝", "I appreciate your time."],
      ["kind", "友善的", "That is very kind."],
    ],
  },
];

const flowItems = [
  ["Open", "Hi, I am glad to meet you.", "嗨，很高興認識你。"],
  ["Introduce", "My name is Ian, and I am from Taiwan.", "我叫 Ian，來自台灣。"],
  ["Context", "I am here to learn and meet new people.", "我來這裡是為了學習並認識新朋友。"],
  ["Ask", "Can I ask you a simple question?", "我可以問你一個簡單問題嗎？"],
  ["Clarify", "Do you mean this one or that one?", "你的意思是這個還是那個？"],
  ["Opinion", "For me, the key point is trust.", "對我來說，關鍵是信任。"],
  ["Problem", "I do not understand this part.", "我不懂這一部分。"],
  ["Need", "Could you show me the first step?", "你可以示範第一步給我看嗎？"],
  ["Confirm", "So the next step is clear.", "所以，下一步很清楚了。"],
  ["Close", "Thank you. This was very helpful.", "謝謝你。這非常有幫助。"],
];

const state = {
  topic: "All",
  wordCategory: wordCategories[0].name,
  search: "",
  rate: 0.78,
  done: new Set(JSON.parse(localStorage.getItem("jel.done") || "[]")),
  voices: [],
};

const $ = (selector) => document.querySelector(selector);

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function speak(text, options = {}) {
  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    showToast("This browser does not support speech playback.");
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = options.rate || state.rate;
  utterance.pitch = 1;
  utterance.volume = 1;
  const voice = state.voices.find((item) => item.lang === "en-US") || state.voices.find((item) => item.lang.startsWith("en"));
  if (voice) utterance.voice = voice;
  utterance.onstart = () => showToast(`Playing: ${text}`);
  utterance.onerror = () => showToast("Speech playback failed. Try another browser voice.");
  window.speechSynthesis.speak(utterance);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.dataset.open = "true";
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.dataset.open = "false";
  }, 2600);
}

function renderAnalysis() {
  $("#analysisGrid").innerHTML = analysisItems
    .map(
      (item, index) => `
        <article class="analysis-item">
          <span class="number">${index + 1}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderEvidence() {
  $("#evidenceGrid").innerHTML = evidenceItems
    .map(
      (item) => `
        <article class="evidence-card">
          <div>
            <div class="card-top">
              <span class="pill">Observed</span>
              <button class="icon-button" type="button" title="Play quote" aria-label="Play observed quote" data-speak="${escapeAttr(item.quote)}">▶</button>
            </div>
            <blockquote>${item.quote}</blockquote>
            <p class="source">
              ${item.zh}<br />
              Source: <a href="${item.url}" target="_blank" rel="noreferrer">${item.source}</a>
            </p>
          </div>
          <div class="pattern-box">
            <strong>${item.pattern}</strong><br />
            ${item.observation}
            <p class="learner-line">Practice: ${item.practice}</p>
          </div>
          <div class="card-actions">
            <button class="secondary-action" type="button" data-speak="${escapeAttr(item.practice)}">
              <span aria-hidden="true">▶</span>
              <span>Play practice</span>
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderTopicTabs() {
  $("#topicTabs").innerHTML = sentenceTopics
    .map(
      (topic) => `
        <button class="topic-tab" type="button" role="tab" aria-selected="${topic === state.topic}" data-topic="${topic}">
          ${topic}
        </button>
      `
    )
    .join("");
}

function filteredSentences() {
  const query = state.search.trim().toLowerCase();
  return sentences.filter((sentence) => {
    const inTopic = state.topic === "All" || sentence.topic === state.topic;
    const inSearch =
      !query ||
      [sentence.en, sentence.zh, sentence.pattern, sentence.topic, sentence.level].join(" ").toLowerCase().includes(query);
    return inTopic && inSearch;
  });
}

function renderSentences() {
  const items = filteredSentences();
  const grid = $("#sentenceGrid");

  if (!items.length) {
    grid.innerHTML = `<article class="sentence-card"><div class="sentence-text"><h3>No matching sentences.</h3><p class="zh">換一個搜尋字或主題。</p></div></article>`;
    return;
  }

  grid.innerHTML = items
    .map((sentence) => {
      const id = sentence.id;
      const done = state.done.has(id);
      return `
        <article class="sentence-card" data-id="${id}">
          <div class="card-top">
            <span class="pill">${sentence.topic}</span>
            <span class="pill coral">${sentence.level}</span>
          </div>
          <div class="sentence-text">
            <h3>${sentence.en}</h3>
            <p class="zh">${sentence.zh}</p>
            <div class="pattern-box">
              <strong>${sentence.pattern}</strong><br />
              ${sentence.note}
            </div>
          </div>
          <div class="card-actions">
            <button class="icon-button" type="button" title="Play sentence" aria-label="Play sentence" data-speak="${escapeAttr(sentence.en)}">▶</button>
            <button class="mark-button" type="button" data-mark="${id}" data-done="${done}">
              ${done ? "Done" : "Mark"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderWordTabs() {
  $("#wordTabs").innerHTML = wordCategories
    .map(
      (category) => `
        <button class="topic-tab" type="button" role="tab" aria-selected="${category.name === state.wordCategory}" data-word-category="${category.name}">
          ${category.name}
        </button>
      `
    )
    .join("");
}

function renderWords() {
  const category = wordCategories.find((item) => item.name === state.wordCategory) || wordCategories[0];
  $("#wordGrid").innerHTML = category.words
    .map(
      ([word, zh, sample]) => `
        <article class="word-card">
          <div class="word-top">
            <h3>${word}</h3>
            <button class="icon-button" type="button" title="Play word" aria-label="Play ${escapeAttr(word)}" data-speak="${escapeAttr(word)}">▶</button>
          </div>
          <p class="zh">${zh}</p>
          <p class="sample">${sample}</p>
        </article>
      `
    )
    .join("");
}

function renderFlow() {
  $("#flowList").innerHTML = flowItems
    .map(
      ([label, en, zh], index) => `
        <article class="flow-item">
          <span class="flow-index">${index + 1}</span>
          <div>
            <h3>${label}</h3>
            <div class="flow-line">
              <strong>${en}</strong>
              <span>${zh}</span>
            </div>
          </div>
          <button class="icon-button" type="button" title="Play line" aria-label="Play ${escapeAttr(label)} line" data-speak="${escapeAttr(en)}">▶</button>
        </article>
      `
    )
    .join("");
}

function updateStats() {
  const wordCount = wordCategories.reduce((total, item) => total + item.words.length, 0);
  const total = sentences.length;
  const doneCount = [...state.done].length;
  const percent = total ? Math.round((doneCount / total) * 100) : 0;

  $("#sentenceCount").textContent = total;
  $("#wordCount").textContent = wordCount;
  $("#doneCount").textContent = doneCount;
  $("#progressMeter").value = percent;
  $("#progressMeter").textContent = `${percent}%`;
}

function escapeAttr(value) {
  return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function attachEvents() {
  document.addEventListener("click", (event) => {
    const speakButton = event.target.closest("[data-speak]");
    if (speakButton) {
      speak(speakButton.dataset.speak);
      return;
    }

    const topicButton = event.target.closest("[data-topic]");
    if (topicButton) {
      state.topic = topicButton.dataset.topic;
      renderTopicTabs();
      renderSentences();
      return;
    }

    const wordButton = event.target.closest("[data-word-category]");
    if (wordButton) {
      state.wordCategory = wordButton.dataset.wordCategory;
      renderWordTabs();
      renderWords();
      return;
    }

    const markButton = event.target.closest("[data-mark]");
    if (markButton) {
      const id = markButton.dataset.mark;
      if (state.done.has(id)) {
        state.done.delete(id);
      } else {
        state.done.add(id);
      }
      localStorage.setItem("jel.done", JSON.stringify([...state.done]));
      renderSentences();
      updateStats();
    }
  });

  document.addEventListener("change", (event) => {
    if (event.target.name === "rate") {
      state.rate = Number(event.target.value);
      showToast(`Voice speed set to ${event.target.parentElement.textContent.trim()}.`);
    }
  });

  $("#searchBox").addEventListener("input", (event) => {
    state.search = event.target.value;
    renderSentences();
  });

  $("#playWordSet").addEventListener("click", () => {
    const category = wordCategories.find((item) => item.name === state.wordCategory) || wordCategories[0];
    speak(category.words.map(([word]) => word).join(". "), { rate: Math.min(state.rate, 0.88) });
  });

  $("#playEvidenceSet").addEventListener("click", () => {
    speak(evidenceItems.map((item) => item.practice).join(". "), { rate: Math.min(state.rate, 0.88) });
  });

  window.addEventListener("scroll", () => {
    const header = $(".site-header");
    header.dataset.elevated = window.scrollY > 6 ? "true" : "false";
  });
}

function loadVoices() {
  if (!("speechSynthesis" in window)) return;
  state.voices = window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    state.voices = window.speechSynthesis.getVoices();
  };
}

function init() {
  loadVoices();
  renderAnalysis();
  renderEvidence();
  renderTopicTabs();
  renderSentences();
  renderWordTabs();
  renderWords();
  renderFlow();
  updateStats();
  attachEvents();
}

init();
