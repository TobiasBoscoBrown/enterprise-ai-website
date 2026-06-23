import { motion } from 'framer-motion'

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* Ambient mesh + grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-mesh opacity-70 animate-gradient-pan [background-size:200%_200%]" />
        <div className="absolute inset-0 bg-grid [background-size:46px_46px] [mask-image:radial-gradient(60%_60%_at_50%_30%,#000,transparent)] opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
      </div>

      <div className="container-x grid items-center gap-14 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
        {/* Copy */}
        <div>
          <motion.div variants={fade} custom={0} initial="hidden" animate="show">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              Now in GA — Aerolith Agents v3
            </span>
          </motion.div>

          <motion.h1
            variants={fade}
            custom={1}
            initial="hidden"
            animate="show"
            className="mt-6 text-display font-extrabold text-white"
          >
            Production AI on{' '}
            <span className="iris-text">your data.</span>
            <br className="hidden sm:block" />
            Governed by default.
          </motion.h1>

          <motion.p
            variants={fade}
            custom={2}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-lg leading-relaxed text-mist-300"
          >
            Aerolith turns proprietary data into reliable, auditable AI agents — with the
            access controls, observability, and compliance posture that regulated enterprises
            require. From pilot to scale in weeks, not quarters.
          </motion.p>

          <motion.div
            variants={fade}
            custom={3}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a href="#cta" className="btn-primary px-6 py-3.5 text-[15px]">
              Book a demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h9M8 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#platform" className="btn-ghost px-6 py-3.5 text-[15px]">
              Explore the platform
            </a>
          </motion.div>

          <motion.div
            variants={fade}
            custom={4}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-mist-400"
          >
            {['SOC 2 Type II', 'HIPAA-ready', 'GDPR & data residency', 'Self-hosted option'].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 16 16" className="text-teal-400" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8.5l3 3 7-7.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Product UI mock */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 6 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative [perspective:1400px]"
        >
          <ProductMock />
        </motion.div>
      </div>
    </section>
  )
}

function ProductMock() {
  return (
    <div className="card relative overflow-hidden p-0 shadow-glow">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-mist-400">
          app.aerolith.ai / agents / claims-triage
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-2.5 py-1 text-[11px] font-medium text-teal-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-400" /> Live
        </span>
      </div>

      <div className="grid grid-cols-[1fr] gap-0 sm:grid-cols-[150px_1fr]">
        {/* sidebar */}
        <div className="hidden flex-col gap-1 border-r border-white/[0.06] p-3 sm:flex">
          {['Overview', 'Agents', 'Datasets', 'Evals', 'Audit log', 'Access'].map((it, i) => (
            <div
              key={it}
              className={`rounded-lg px-3 py-2 text-[13px] ${
                i === 1 ? 'bg-iris-500/15 text-white' : 'text-mist-400'
              }`}
            >
              {it}
            </div>
          ))}
        </div>

        {/* main */}
        <div className="p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-white">Claims Triage Agent</div>
              <div className="font-mono text-[11px] text-mist-400">grounded · 14 sources · v3.2</div>
            </div>
            <div className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] text-mist-300">
              Confidence 98.4%
            </div>
          </div>

          {/* mini metrics */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { k: 'Resolved / hr', v: '1,284' },
              { k: 'Avg latency', v: '420 ms' },
              { k: 'Escalations', v: '2.1%' },
            ].map((m) => (
              <div key={m.k} className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5">
                <div className="text-[10px] uppercase tracking-wide text-mist-400">{m.k}</div>
                <div className="mt-1 text-base font-semibold text-white">{m.v}</div>
              </div>
            ))}
          </div>

          {/* sparkline */}
          <div className="mt-3 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
            <div className="mb-2 flex items-center justify-between text-[11px] text-mist-400">
              <span>Throughput · last 24h</span>
              <span className="text-teal-300">▲ 18%</span>
            </div>
            <svg viewBox="0 0 300 70" className="h-16 w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#818cf8" stopOpacity="0.45" />
                  <stop offset="1" stopColor="#818cf8" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 55 L25 48 L50 52 L75 38 L100 42 L125 30 L150 33 L175 22 L200 26 L225 16 L250 20 L275 10 L300 14 L300 70 L0 70 Z"
                fill="url(#spark)"
              />
              <path
                d="M0 55 L25 48 L50 52 L75 38 L100 42 L125 30 L150 33 L175 22 L200 26 L225 16 L250 20 L275 10 L300 14"
                fill="none"
                stroke="#a5b4ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* governed response row */}
          <div className="mt-3 flex items-start gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-iris-400 to-teal-400 text-[11px] font-bold text-ink-950">
              A
            </div>
            <div className="text-[12.5px] leading-relaxed text-mist-200">
              Routed to <span className="text-white">Tier-2 adjuster</span> — policy match on
              clauses 4.2, 7.1.{' '}
              <span className="rounded bg-iris-500/15 px-1.5 py-0.5 font-mono text-[11px] text-iris-300">
                cited · 3 docs
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
