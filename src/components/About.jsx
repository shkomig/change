import Reveal from './Reveal'
import { CONTACT } from '../data/content'

export default function About() {
  return (
    <section id="about" className="border-y border-line bg-panel/40 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="relative mx-auto max-w-xs">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-gold/30 to-cyan/20 blur-xl" />
              <img
                src="/profile.jpeg"
                alt="חי עטיה"
                className="relative w-full rounded-3xl border border-line object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-3">
            <span className="chip mb-4">מי מאחורי המערכות</span>
            <h2 className="text-3xl font-black text-white md:text-4xl">חי עטיה</h2>
            <p className="mt-5 leading-relaxed text-slate-400">
              מפתח מערכות AI מ{CONTACT.location.replace(', ישראל', '')}. אני בונה מערכות שלמות
              מאפס: מאימון מודלים ייעודיים (LoRA) על GPU מקומי, דרך שרתי FastAPI וממשקי React,
              ועד בוטים שמריצים כסף אמיתי בבורסה.
            </p>
            <p className="mt-4 leading-relaxed text-slate-400">
              הגישה שלי פשוטה: כל פרויקט חייב לרוץ בפרודקשן ולהוכיח את עצמו במספרים. בגלל זה האתר
              הזה בנוי מקייס סטאדיז אמיתיים. אם יש לכם תהליך שגוזל זמן, רעיון למוצר AI, או
              מערכת שצריכה לקום — אני האיש שיגרום לזה לעבוד.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a href={CONTACT.github} target="_blank" rel="noreferrer" className="chip transition hover:border-gold hover:text-gold">
                GitHub ↗
              </a>
              <a href={CONTACT.youtube} target="_blank" rel="noreferrer" className="chip transition hover:border-gold hover:text-gold">
                YouTube ↗
              </a>
              <a href={CONTACT.facebook} target="_blank" rel="noreferrer" className="chip transition hover:border-gold hover:text-gold">
                Facebook ↗
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
