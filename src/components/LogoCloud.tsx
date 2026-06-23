import { motion } from 'framer-motion'

/** Hand-built fictional enterprise wordmarks (SVG). */
const marks: { name: string; node: JSX.Element }[] = [
  {
    name: 'Northwind Bank',
    node: (
      <g>
        <path d="M2 18 L2 4 L8 14 L8 4 M14 4 L14 18 M14 11 L20 11 M14 4 L22 4 M14 18 L22 18" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <text x="28" y="15" className="fill-current" fontFamily="Inter" fontWeight="700" fontSize="13">Northwind</text>
      </g>
    ),
  },
  {
    name: 'Veridian Health',
    node: (
      <g>
        <circle cx="9" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 7 V15 M5 11 H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <text x="22" y="15" className="fill-current" fontFamily="Inter" fontWeight="700" fontSize="13">Veridian</text>
      </g>
    ),
  },
  {
    name: 'Halcyon Logistics',
    node: (
      <g>
        <rect x="3" y="6" width="12" height="10" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M15 9 H19 L22 12 V16 H15 Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="8" cy="17" r="1.6" fill="currentColor" /><circle cx="18" cy="17" r="1.6" fill="currentColor" />
        <text x="28" y="14.5" className="fill-current" fontFamily="Inter" fontWeight="700" fontSize="13">Halcyon</text>
      </g>
    ),
  },
  {
    name: 'Atlas Federal',
    node: (
      <g>
        <path d="M9 3 L16 17 H2 Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M6 12 H12" stroke="currentColor" strokeWidth="1.8" />
        <text x="22" y="15" className="fill-current" fontFamily="Inter" fontWeight="800" fontSize="13">ATLAS</text>
      </g>
    ),
  },
  {
    name: 'Stratos Energy',
    node: (
      <g>
        <path d="M3 16 Q9 2 15 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="9" cy="10" r="2" fill="currentColor" />
        <text x="20" y="15" className="fill-current" fontFamily="Inter" fontWeight="700" fontSize="13">Stratos</text>
      </g>
    ),
  },
  {
    name: 'Cobalt Insurance',
    node: (
      <g>
        <path d="M9 3 L15 6 V12 Q15 16 9 18 Q3 16 3 12 V6 Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <text x="21" y="15" className="fill-current" fontFamily="Inter" fontWeight="700" fontSize="13">Cobalt</text>
      </g>
    ),
  },
]

export default function LogoCloud() {
  return (
    <section className="border-y border-white/[0.06] bg-ink-950/40 py-12">
      <div className="container-x">
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-mist-400">
          Trusted by security-first teams in finance, healthcare &amp; public sector
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6"
        >
          {marks.map((m) => (
            <div
              key={m.name}
              className="flex justify-center text-mist-400 transition-colors duration-300 hover:text-mist-100"
              aria-label={m.name}
            >
              <svg viewBox="0 0 120 22" className="h-6 w-auto" role="img" aria-label={m.name}>
                {m.node}
              </svg>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
