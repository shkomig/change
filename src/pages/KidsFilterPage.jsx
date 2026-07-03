import { useEffect } from 'react'
import { CONTACT } from '../data/content'

const DOWNLOAD_URL = '/downloads/KidsFilter.zip'

const FEATURES = [
  'עובד בכל דפדפן ובכל אפליקציה במחשב — לא רק בכרום',
  'רשימה לבנה: רק אתרים שאתם אישרתם נפתחים, כל השאר חסום אוטומטית',
  'אין צורך לחסום אתרים אחד-אחד (יוטיוב, טיקטוק וכו\' — פשוט לא ברשימה)',
  'הוספת אתר מאושר בשורה אחת בקובץ טקסט — נקלט תוך שניות, בלי ריסטארט',
  'רץ ברקע אוטומטית בכל הדלקה של המחשב, בלי חלונות ובלי תוכנות כבדות',
  'חינם לחלוטין — בלי מנוי, בלי הרשמה, בלי איסוף מידע',
]

const STEPS = [
  {
    title: 'הורידו את הערכה',
    body: 'לחצו על כפתור ההורדה וחלצו את הקובץ (קליק ימני ← Extract All) — למשל לשולחן העבודה של מחשב הילדים.',
  },
  {
    title: 'התקינו פייתון (אם אין)',
    body: 'הורידו מ-python.org/downloads. בזמן ההתקנה סמנו את שתי התיבות: "Install for all users" וגם "Add python.exe to PATH".',
  },
  {
    title: 'הריצו את ההתקנה',
    body: 'פתחו PowerShell כמנהל (Start ← הקלידו PowerShell ← קליק ימני ← Run as Administrator) והדביקו את שלוש השורות שמופיעות בקובץ README שבתוך הערכה. ההתקנה כולה אוטומטית.',
  },
  {
    title: 'ודאו שחשבון הילדים הוא משתמש רגיל',
    body: 'Settings ← Accounts ← Family & other users. זה השלב הכי חשוב — אם החשבון של הילדים הוא מנהל (Administrator), הם יוכלו לבטל את ההגנה.',
  },
]

const NOTES = [
  'הסינון עובד על המחשב שבו התקנתם בלבד — טלפונים וטאבלטים לא מושפעים.',
  'כל ההגנה מבוססת על כך שחשבון הילדים הוא משתמש רגיל (לא מנהל). אל תדלגו על שלב 4.',
  'הכלי בנוי בגישת "נכשל-סגור": אם הסינון מפסיק לרוץ מסיבה כלשהי, האינטרנט נחסם כולו במקום להיפתח בלי הגנה — עד שמריצים שוב את ההתקנה או ההסרה.',
]

function DownloadButton({ children }) {
  return (
    <a
      href={DOWNLOAD_URL}
      download
      className="inline-flex items-center gap-3 rounded-xl bg-gold px-8 py-4 text-lg font-black text-ink transition hover:brightness-110 hover:shadow-glow"
    >
      <span aria-hidden>⬇</span>
      {children}
    </a>
  )
}

export default function KidsFilterPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-grid">
      {/* Top bar */}
      <header className="border-b border-line bg-panel/60 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4">
          <a href="#/" className="flex items-center gap-3">
            <img src="/logo.png" alt="" className="h-8 w-8 rounded-lg object-contain" />
            <span className="font-extrabold text-white">
              Change<span className="text-gold"> Digital Solutions</span>
            </span>
          </a>
          <a href="#/" className="text-sm font-medium text-slate-400 transition hover:text-gold">
            → חזרה לאתר
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 pb-24">
        {/* Hero */}
        <section className="pt-16 pb-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-line bg-panel text-4xl">
            🎁
          </div>
          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="led-green" />
            <span className="font-mono text-xs tracking-widest text-slate-500">
              KIDS_FILTER · v1.0 · FREE
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">
            KidsFilter — <span className="text-gradient">סינון אינטרנט למחשב הילדים</span>
          </h1>
          <p className="mt-3 text-lg font-bold text-gold">מתנה מאיתנו, בחינם לגמרי</p>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">
            כהורים, אנחנו יודעים כמה קשה לשמור על הילדים ברשת. אז הכנו כלי פשוט
            שהופך את המחשב למצב &quot;רק אתרים מאושרים&quot;: אתם קובעים רשימה
            של אתרים מותרים — וכל השאר פשוט לא נפתח. בלי מנוי, בלי הרשמה, בלי
            תשלום.
          </p>
          <div className="mt-8">
            <DownloadButton>הורדת הערכה (ZIP, פחות מ-10KB)</DownloadButton>
          </div>
          <p className="mt-3 text-sm text-slate-500">
            מתאים למחשבי Windows · דורש התקנת פייתון חינמית
          </p>
        </section>

        {/* What it does */}
        <section className="mt-10">
          <h2 className="text-2xl font-black text-white">מה זה עושה?</h2>
          <div className="card-border mt-5 p-7 md:p-8">
            <ul className="space-y-3">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="text-lg leading-relaxed text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Install steps */}
        <section className="mt-14">
          <h2 className="text-2xl font-black text-white">איך מתקינים? 4 שלבים פשוטים</h2>
          <div className="mt-5 space-y-4">
            {STEPS.map((step, index) => (
              <div key={step.title} className="card-border flex items-start gap-5 p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-panel font-mono text-lg font-bold text-gold">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-1 leading-relaxed text-slate-400">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            בתוך הערכה יש קובץ README עם ההוראות המלאות, כולל איך מוסיפים אתרים
            מאושרים ואיך מסירים את הכלי לגמרי אם תרצו.
          </p>
        </section>

        {/* Good to know */}
        <section className="mt-14">
          <h2 className="text-2xl font-black text-white">חשוב לדעת לפני שמתחילים</h2>
          <div className="card-border mt-5 space-y-4 p-7 md:p-8">
            {NOTES.map((note) => (
              <p key={note} className="flex items-start gap-3 text-lg leading-relaxed text-slate-300">
                <span className="mt-1 shrink-0 text-gold" aria-hidden>⚠</span>
                <span>{note}</span>
              </p>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-16 text-center">
          <DownloadButton>להורדת KidsFilter בחינם</DownloadButton>
          <p className="mt-6 text-slate-400">
            נתקלתם בבעיה או שיש שאלה? מוזמנים לכתוב לנו בוואטסאפ — נשמח לעזור.
          </p>
          <a
            href={`${CONTACT.whatsapp}?text=${encodeURIComponent('היי, יש לי שאלה על ערכת KidsFilter')}`}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block font-bold text-gold hover:underline"
          >
            לשיחה בוואטסאפ ←
          </a>
        </section>
      </main>

      <footer className="border-t border-line bg-panel/60 py-8 text-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Change Digital Solutions. הערכה ניתנת
          כמות שהיא (as-is), מתוך רצון לעזור — באחריות ההורים.
        </p>
      </footer>
    </div>
  )
}
