import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#case-studies', label: 'קייס סטאדיז' },
  { href: '#tech', label: 'טכנולוגיות' },
  { href: '#process', label: 'איך עובדים' },
  { href: '#about', label: 'מי אני' },
  { href: '#contact', label: 'צור קשר' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? 'bg-ink/85 backdrop-blur border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-3">
          <img src="/logo.png" alt="Change Digital Solutions" className="h-9 w-9 rounded-lg object-contain" />
          <span className="text-lg font-extrabold tracking-tight text-white">
            Change<span className="text-gold"> Digital</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-300 transition hover:text-gold">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-gold px-5 py-2 text-sm font-bold text-ink transition hover:bg-amber-300"
          >
            בואו נדבר
          </a>
        </div>

        <button
          className="text-2xl text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="תפריט"
        >
          ☰
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink/95 px-5 pb-5 backdrop-blur md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-slate-200 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
