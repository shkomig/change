import Reveal from './Reveal'
import { CASE_STUDIES } from '../data/content'

function CaseCard({ cs, index }) {
  return (
    <Reveal>
      <article className="card-border overflow-hidden">
        {/* module header bar */}
        <div className="flex items-center justify-between border-b border-line bg-panel/70 px-5 py-2.5" dir="ltr">
          <div className="flex items-center gap-2.5">
            <span className="led-green" />
            <span className="font-mono text-xs font-bold tracking-wider text-white">{cs.sys.id}</span>
            <span className="font-mono text-[10px] text-slate-500">{cs.sys.version}</span>
          </div>
          <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
            {cs.sys.status}
          </span>
        </div>
        <div className="grid gap-0 lg:grid-cols-5">
          {/* main content */}
          <div className="p-8 lg:col-span-3 lg:p-10">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold">{cs.tag}</span>
              <span className="text-xs text-slate-500">קייס סטאדי {String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="mt-4 text-2xl font-extrabold leading-snug text-white md:text-3xl">{cs.title}</h3>

            <div className="mt-6 space-y-5">
              <div>
                <div className="mb-1 text-sm font-bold text-cyan">האתגר</div>
                <p className="leading-relaxed text-slate-400">{cs.problem}</p>
              </div>
              <div>
                <div className="mb-1 text-sm font-bold text-gold">הפתרון</div>
                <p className="leading-relaxed text-slate-400">{cs.solution}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {cs.tech.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>

            {cs.link && (
              <a
                href={cs.link.url}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-2.5 text-sm font-bold text-gold transition hover:bg-gold hover:text-ink"
              >
                {cs.link.label} ↗
              </a>
            )}
          </div>

          {/* results panel */}
          <div className="border-t border-line bg-panel/60 p-8 lg:col-span-2 lg:border-r lg:border-t-0 lg:p-10">
            <div className="mb-6 font-mono text-xs font-bold uppercase tracking-widest text-slate-500">// תוצאות</div>
            <div className="space-y-6">
              {cs.results.map((r) => (
                <div key={r.label}>
                  <div className="text-2xl font-black text-white">{r.value}</div>
                  <div className="mt-1 text-sm text-slate-400">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal className="mb-12 text-center">
        <span className="chip mb-4">הוכחות, לא הבטחות</span>
        <h2 className="text-3xl font-black text-white md:text-5xl">
          קייס <span className="text-gradient">סטאדיז</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          חמש מערכות אמיתיות שבניתי מאפס — כל אחת פותרת בעיה שבדרך כלל דורשת צוות שלם.
        </p>
      </Reveal>

      <div className="space-y-10">
        {CASE_STUDIES.map((cs, i) => (
          <CaseCard key={cs.id} cs={cs} index={i} />
        ))}
      </div>
    </section>
  )
}
