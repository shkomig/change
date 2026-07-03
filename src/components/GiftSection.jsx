import Reveal from './Reveal'

export default function GiftSection() {
  return (
    <section id="gift" className="py-16">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <a
            href="#/kidsfilter"
            className="card-border group block p-7 transition hover:shadow-glow md:p-9"
          >
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line bg-panel text-3xl">
                🎁
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <span className="led-green" />
                  <span className="font-mono text-xs tracking-widest text-slate-500">
                    KIDS_FILTER · FREE
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-black text-white md:text-2xl">
                  מתנה קטנה מאיתנו להורים
                </h3>
                <p className="mt-2 leading-relaxed text-slate-400">
                  צריכים סינון תכנים למחשב של הילדים? הכנו ערכה פשוטה שהופכת את
                  המחשב למצב &quot;רק אתרים שאישרתם&quot; — בחינם לגמרי, בלי
                  מנוי ובלי התחייבות. הורדה והסבר התקנה מלא בעברית.
                </p>
              </div>
              <span className="shrink-0 text-sm font-bold text-gold transition group-hover:-translate-x-1">
                לפרטים והורדה ←
              </span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
