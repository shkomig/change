import { motion } from 'framer-motion'
import { STATS } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[140px]" />
        <div className="absolute top-40 left-1/5 h-[400px] w-[400px] rounded-full bg-cyan/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="chip mb-6">מערכות AI בפרודקשן — לא מצגות</span>
          <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
            אני בונה מערכות AI
            <br />
            <span className="text-gradient">שעובדות באמת. כל יום.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            סטודיו אנימציה שמפיק פרקים לבד, בוט שסוחר בבורסה בזמן אמת, סוכן AI שרץ בלי ענן —
            אלו לא הבטחות, אלו מערכות חיות שבניתי מקצה לקצה.
            למטה תמצאו את הקייס סטאדיז המלאים.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#case-studies"
              className="rounded-full bg-gold px-8 py-3.5 font-bold text-ink shadow-glow transition hover:bg-amber-300"
            >
              לקייס סטאדיז ←
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-8 py-3.5 font-bold text-white transition hover:border-gold hover:text-gold"
            >
              דברו איתי
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4"
        >
          {STATS.map((s) => (
            <div key={s.label} className="card-border px-4 py-5">
              <div className="text-3xl font-black text-gold">{s.value}</div>
              <div className="mt-1 text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
