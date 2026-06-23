import { useEffect, useRef, useState } from 'react'

/** Brand wordmark mark (triangular delta). */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#a5b4ff" />
            <stop offset="1" stopColor="#5eead4" />
          </linearGradient>
        </defs>
        <path d="M16 5 L26 25 H6 Z" fill="none" stroke="url(#lg)" strokeWidth="2.2" strokeLinejoin="round" />
        <circle cx="16" cy="18" r="2.6" fill="url(#lg)" />
      </svg>
      <span className="text-[17px] font-bold tracking-tight text-white">Aerolith</span>
    </span>
  )
}

/** Count-up that triggers once when scrolled into view. */
export function CountUp({
  to,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 1600,
}: {
  to: number
  suffix?: string
  prefix?: string
  decimals?: number
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [val, setVal] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setVal(to * eased)
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [to, duration])

  return (
    <span ref={ref}>
      {prefix}
      {val.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  )
}
