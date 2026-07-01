export const CONTACT = {
  email: 'haiatia500@gmail.com',
  phone: '052-4405982',
  phoneIntl: '+972524405982',
  whatsapp: 'https://wa.me/972524405982',
  github: 'https://github.com/shkomig',
  youtube: 'https://www.youtube.com/@Meir_Lantern',
  location: 'נס ציונה, ישראל',
}

export const STATS = [
  { value: '5+', label: 'מערכות בפרודקשן' },
  { value: '30+', label: 'מודלים ו-LoRAs מאומנים' },
  { value: '100%', label: 'פיתוח מקצה לקצה' },
  { value: '24/7', label: 'מערכות שרצות לבד' },
]

export const CASE_STUDIES = [
  {
    id: 'meir',
    tag: 'סטודיו אנימציה AI',
    title: 'מאיר והפנס — סדרת אנימציה שנוצרת אוטומטית',
    problem:
      'הפקת פרק אנימציה מקצועי עם דיבוב עברית מסונכרן דורשת צוות שלם וחודשי עבודה. המטרה: פרק שלם מתסריט JSON אחד — בלי מאייר, בלי אולפן.',
    solution:
      'פייפליין תלת-שלבי שרץ מקומית על RTX 5090: יצירת פריימים עם FLUX ו-5 מודלי LoRA שאומנו במיוחד לדמויות הסדרה, דיבוב עברית טבעי עם ElevenLabs, וסנכרון שפתיים מדויק עם WanVideo + InfiniteTalk. כולל הרחבת תלת-ממד עם ControlNet ו-PuLID לשמירת זהות הדמות בכל זווית.',
    tech: ['FLUX + LoRA Training', 'WanVideo / InfiniteTalk', 'ElevenLabs TTS', 'ComfyUI', 'Python', 'ControlNet 3D'],
    results: [
      { value: '29 שניות', label: 'ליצירת פריים איכותי' },
      { value: '5 דמויות', label: 'עם LoRA מאומן לכל אחת' },
      { value: 'פרק מלא', label: 'מ-JSON אחד, אוטומטית' },
    ],
    link: { url: 'https://www.youtube.com/@Meir_Lantern', label: 'צפו בערוץ היוטיוב' },
  },
  {
    id: 'zte',
    tag: 'אלגו-טריידינג',
    title: 'Zero Trading Expert — בוט מסחר יומי מבוסס AI',
    problem:
      'מסחר יומי ידני מוגבל ברגש, בזמן תגובה ובכמות הנכסים שאפשר לעקוב אחריהם בו-זמנית. נדרשה מערכת שסורקת, מנתחת ומבצעת — עם משמעת ברזל בניהול סיכונים.',
    solution:
      'מערכת מסחר אוטונומית (v3.7.6) המחוברת ל-Interactive Brokers בזמן אמת. שכבת ניתוח AI עם זיכרון RAG, אינדיקטורים מתקדמים (RSI Divergence, TSI, VPOC, MACD Div), ניהול סיכונים אוטומטי עם Stop-Loss ו-Trailing, פיזור סקטוריאלי ומסחר מבוסס סשנים שמתחמק משעות מתות.',
    tech: ['Python', 'Interactive Brokers API', 'FastAPI', 'AI Orchestrator', 'RAG Memory', 'Risk Engine'],
    results: [
      { value: 'Real-Time', label: 'סריקה וביצוע אוטומטיים' },
      { value: 'SL/TP + Trailing', label: 'ניהול סיכונים בכל פוזיציה' },
      { value: 'V3.7.6', label: 'גרסת פרודקשן פעילה' },
    ],
    link: null,
  },
  {
    id: 'zero-agent',
    tag: 'קוד פתוח',
    title: 'Zero Agent — סוכן AI אוטונומי, 100% מקומי',
    problem:
      'סוכני AI מסחריים שולחים את הנתונים שלכם לענן ועולים כסף על כל בקשה. עסקים עם מידע רגיש צריכים סוכן שרץ כולו על המחשב שלהם.',
    solution:
      'סוכן AI אוטונומי בקוד פתוח (MIT) שרץ כולו מקומית מול Ollama — בלי ענן ובלי מפתחות API. כולל ~33 כלים, מתכנן Supervisor-Worker רב-שלבי, מנוע מחקר איטרטיבי עם כיול מקורות, ולמידה מטעויות. כולל CI מלא בגיטהאב.',
    tech: ['Python 3.12', 'Ollama', 'Supervisor-Worker Planner', 'Tool-Calling Agent', 'GitHub Actions CI'],
    results: [
      { value: '100%', label: 'מקומי — אפס ענן' },
      { value: '33+', label: 'כלים מובנים' },
      { value: 'Open Source', label: 'רישיון MIT בגיטהאב' },
    ],
    link: { url: 'https://github.com/shkomig/Zero_agent_2026', label: 'לריפו בגיטהאב' },
  },
  {
    id: 'studio-zero',
    tag: 'הפקת תוכן AI',
    title: 'Studio Zero — סטודיו תוכן אוניברסלי: מרעיון לסרטון ביוטיוב',
    problem:
      'יצירת סרטון תוכן מלא — תסריט, ויז׳ואלס, קריינות, מוזיקה ועריכה — דורשת שרשרת שלמה של אנשי מקצוע וכלים. המטרה: קונספט נכנס, סרטון גמור יוצא.',
    solution:
      'סטודיו Full-Stack (FastAPI + React) שמנהל את כל שרשרת ההפקה: Claude כותב תסריט, Gemini/FLUX מייצרים תמונות עם עקביות דמויות, WAN2.2 מייצר וידאו, ElevenLabs מקריין, ו-Remotion מרכיב הכל לסרטון סופי עם מעברים חכמים, מוזיקת רקע ואפקטים — עד העלאה ליוטיוב.',
    tech: ['FastAPI', 'React 18', 'Claude API', 'Gemini', 'ElevenLabs', 'Remotion', 'WAN 2.2'],
    results: [
      { value: 'קצה לקצה', label: 'מקונספט ל-MP4 סופי' },
      { value: '4 ספקי AI', label: 'משולבים במערכת אחת' },
      { value: 'ספריית דמויות', label: 'עקביות ויזואלית מלאה' },
    ],
    link: null,
  },
  {
    id: 'math',
    tag: 'EdTech',
    title: 'מערכת למידת מתמטיקה אדפטיבית לכיתות א׳-ב׳',
    problem:
      'תלמידים צעירים מאבדים עניין כשהתרגול קשה מדי או קל מדי. נדרשה מערכת שמתאימה את עצמה לרמת הילד בזמן אמת — ותואמת את תכנית הלימודים של משרד החינוך.',
    solution:
      'מערכת למידה מבוססת AI שמכיילת קושי בזמן אמת לפי ביצועי התלמיד, עם גמיפיקציה מלאה: נקודות, 10+ תגים, רמות, אנימציות חגיגה ואפקטי קול. ממשק ידידותי לילדים עם נגישות מלאה לקוראי מסך, ותאימות לתכנית הלימודים החדשה (תשפ"ה).',
    tech: ['React', 'React Router', 'Framer Motion', 'Adaptive AI', 'Gamification Engine', 'A11y'],
    results: [
      { value: 'אדפטיבי', label: 'קושי מותאם בזמן אמת' },
      { value: '10+ תגים', label: 'מערכת הישגים מלאה' },
      { value: 'תשפ"ה', label: 'תואם תכנית משרד החינוך' },
    ],
    link: null,
  },
]

export const TECH_STACK = [
  'Python', 'React', 'FastAPI', 'Node.js', 'Claude API', 'Gemini', 'OpenAI',
  'Ollama', 'ComfyUI', 'FLUX', 'LoRA Training', 'ElevenLabs', 'Remotion',
  'Interactive Brokers', 'RAG', 'Docker', 'GitHub Actions', 'Tailwind CSS',
]

export const PROCESS = [
  {
    step: '01',
    title: 'אפיון ממוקד',
    text: 'שיחה קצרה להבנת הצורך האמיתי. לא מוכרים לכם טכנולוגיה — פותרים בעיה עסקית.',
  },
  {
    step: '02',
    title: 'אב-טיפוס עובד',
    text: 'תוך ימים ספורים אתם רואים גרסה ראשונה אמיתית, לא מצגת. מתקנים כיוון מוקדם.',
  },
  {
    step: '03',
    title: 'פיתוח ואינטגרציה',
    text: 'בנייה מלאה עם חיבור למערכות הקיימות שלכם — CRM, וואטסאפ, אתר, נתונים.',
  },
  {
    step: '04',
    title: 'השקה וליווי',
    text: 'עלייה לאוויר, הדרכה, וליווי שוטף. המערכת ממשיכה להשתפר גם אחרי המסירה.',
  },
]
