import { CONTACT } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="" className="h-8 w-8 rounded-lg object-contain" />
          <span className="font-extrabold text-white">
            Change<span className="text-gold"> Digital Solutions</span>
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-5 text-sm text-slate-400">
          <a href={CONTACT.github} target="_blank" rel="noreferrer" className="hover:text-gold">GitHub</a>
          <a href={CONTACT.youtube} target="_blank" rel="noreferrer" className="hover:text-gold">YouTube</a>
          <a href={CONTACT.facebook} target="_blank" rel="noreferrer" className="hover:text-gold">Facebook</a>
          <a href={`mailto:${CONTACT.email}`} className="hover:text-gold">{CONTACT.email}</a>
          <span>{CONTACT.location}</span>
        </div>
        <div className="text-xs text-slate-600">
          © {new Date().getFullYear()} Change Digital Solutions — חי עטיה. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  )
}
