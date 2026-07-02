import Terminal from './Terminal'
import { SYSTEM_BOARD } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="bg-grid relative overflow-hidden pt-32 pb-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[140px]" />
        <div className="absolute top-40 left-1/5 h-[400px] w-[400px] rounded-full bg-cyan/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        {/* copy */}
        <div className="fade-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-4 py-1.5">
            <span className="led-green" />
            <span className="font-mono text-xs tracking-wide text-emerald-300">5 SYSTEMS ONLINE</span>
          </div>
          <h1 className="text-4xl font-black leading-tight text-white md:text-[3.4rem] md:leading-[1.15]">
            אחרים מציגים מצגות.
            <br />
            <span className="text-gradient">אצלי המערכות כבר רצות.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            הטרמינל שמשמאל אמיתי: סטודיו אנימציה שמפיק פרקים לבד, בוט שסוחר בבורסה ברגעים אלו,
            וסוכן AI שרץ בלי ענן. כל מערכת כאן נבנתה מאפס — ועובדת בפרודקשן, כל יום.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
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
        </div>

        {/* live terminal */}
        <div className="fade-up fade-up-1">
          <Terminal />
        </div>
      </div>

      {/* system status board */}
      <div className="fade-up fade-up-2 relative mx-auto mt-16 max-w-6xl px-5">
        <div className="card-border overflow-hidden">
          <div className="flex items-center justify-between border-b border-line bg-panel/70 px-5 py-2.5">
            <span className="font-mono text-xs tracking-widest text-slate-500">SYSTEM STATUS</span>
            <span className="font-mono text-xs text-emerald-400">ALL OPERATIONAL</span>
          </div>
          <div className="grid grid-cols-2 divide-y divide-line md:grid-cols-5 md:divide-x md:divide-y-0 md:divide-x-reverse">
            {SYSTEM_BOARD.map((s) => (
              <div key={s.name} className="flex flex-col gap-1 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="led-green" />
                  <span className="font-mono text-xs font-bold text-white">{s.name}</span>
                </div>
                <span className="text-xs text-slate-400">{s.desc}</span>
                <span className="font-mono text-[10px] text-slate-500">{s.version} · {s.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
