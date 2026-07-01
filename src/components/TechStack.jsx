import Reveal from './Reveal'
import { TECH_STACK } from '../data/content'

export default function TechStack() {
  return (
    <section id="tech" className="border-y border-line bg-panel/40 py-20">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <Reveal>
          <h2 className="text-3xl font-black text-white md:text-4xl">
            הארגז כלים <span className="text-gradient">שלי</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            טכנולוגיות שאני עובד איתן בפרודקשן — לא מרשימת משאלות.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {TECH_STACK.map((t) => (
              <span
                key={t}
                className="rounded-xl border border-line bg-card px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-gold/60 hover:text-gold"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
