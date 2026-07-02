import { useEffect, useState } from 'react'
import { TERMINAL_LINES } from '../data/content'

// types each command char-by-char, prints its output, then moves to the next line
export default function Terminal() {
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [done, setDone] = useState([])

  useEffect(() => {
    if (lineIdx >= TERMINAL_LINES.length) return
    const line = TERMINAL_LINES[lineIdx]
    if (charIdx < line.cmd.length) {
      const t = setTimeout(() => setCharIdx(charIdx + 1), 38)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setDone((d) => [...d, line])
      setLineIdx(lineIdx + 1)
      setCharIdx(0)
    }, 700)
    return () => clearTimeout(t)
  }, [lineIdx, charIdx])

  const typing = lineIdx < TERMINAL_LINES.length ? TERMINAL_LINES[lineIdx].cmd.slice(0, charIdx) : null

  return (
    <div dir="ltr" className="overflow-hidden rounded-2xl border border-line bg-[#0a0c12] text-left shadow-glow-cyan">
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-line bg-panel px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
        <span className="mx-auto font-mono text-xs text-slate-500">chai@rtx5090 — production</span>
      </div>

      <div className="min-h-[300px] space-y-3 p-5 font-mono text-[13px] leading-relaxed md:text-sm">
        {done.map((l) => (
          <div key={l.cmd}>
            <div className="text-slate-300">
              <span className="text-cyan">$</span> {l.cmd}
            </div>
            <div className="text-emerald-400/90">{l.out}</div>
          </div>
        ))}
        {typing !== null && (
          <div className="caret text-slate-300">
            <span className="text-cyan">$</span> {typing}
          </div>
        )}
        {typing === null && (
          <div className="caret text-slate-300">
            <span className="text-cyan">$</span> <span className="text-slate-500">כל המערכות רצות. תורך —</span>
          </div>
        )}
      </div>
    </div>
  )
}
