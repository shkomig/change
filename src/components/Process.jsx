import Reveal from './Reveal'
import { PROCESS } from '../data/content'

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal className="mb-12 text-center">
        <h2 className="text-3xl font-black text-white md:text-4xl">
          איך <span className="text-gradient">עובדים איתי</span>
        </h2>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map((p, i) => (
          <Reveal key={p.step} delay={i * 0.1}>
            <div className="card-border h-full p-7">
              <div className="text-4xl font-black text-gold/40">{p.step}</div>
              <h3 className="mt-3 text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
