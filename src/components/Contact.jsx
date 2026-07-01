import Reveal from './Reveal'
import { CONTACT } from '../data/content'

const METHODS = [
  { label: 'וואטסאפ', value: 'שיחה מהירה — עונה מהר', href: CONTACT.whatsapp, cta: 'פתחו צ׳אט' },
  { label: 'אימייל', value: CONTACT.email, href: `mailto:${CONTACT.email}`, cta: 'שלחו מייל' },
  { label: 'טלפון', value: CONTACT.phone, href: `tel:${CONTACT.phoneIntl}`, cta: 'התקשרו' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[600px] rounded-full bg-gold/10 blur-[140px]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 text-center">
        <Reveal>
          <h2 className="text-3xl font-black text-white md:text-5xl">
            יש לכם רעיון? <span className="text-gradient">בואו נבנה אותו.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            ייעוץ ראשוני חינם וללא התחייבות. ספרו לי מה הבעיה — אני אגיד לכם בכנות אם AI הוא הפתרון.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {METHODS.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.1}>
              <a href={m.href} target="_blank" rel="noreferrer" className="card-border block p-8 transition hover:shadow-glow">
                <div className="text-lg font-bold text-white">{m.label}</div>
                <div className="mt-2 text-sm text-slate-400" dir="ltr">{m.value}</div>
                <div className="mt-5 text-sm font-bold text-gold">{m.cta} ←</div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
