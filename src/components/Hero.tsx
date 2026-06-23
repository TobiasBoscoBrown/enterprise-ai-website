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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* glow halo behind the card */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(60%_60%_at_70%_20%,rgba(99,102,241,0.40),transparent_70%),radial-gradient(50%_50%_at_20%_90%,rgba(45,212,191,0.25),transparent_70%)] blur-2xl"
          />
          <ProductMock />
        </motion.div>
      </div>
    </section>
  )
}

function ProductMock() {
  return (
    <div className="relative overflow-hidden rounded-xl2 border border-white/15 bg-ink-850/95 shadow-glow backdrop-blur-sm ring-1 ring-white/5">
      {/* top sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
      />

      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate rounded-md border border-white/10 bg-ink-900/80 px-2.5 py-1 font-mono text-[11px] text-mist-300">
          app.aerolith.ai / agents / claims-triage
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-teal-500/15 px-2.5 py-1 text-[11px] font-medium text-teal-300 ring-1 ring-teal-400/30">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-400" /> Live
        </span>
      </div>

      <div className="grid grid-cols-[1fr] gap-0 sm:grid-cols-[148px_1fr]">
        {/* sidebar */}
        <div className="hidden flex-col gap-1 border-r border-white/10 bg-white/[0.02] p-3 sm:flex">
          {['Overview', 'Agents', 'Datasets', 'Evals', 'Audit log', 'Access'].map((it, i) => (
            <div
              key={it}
              className={`rounded-lg px-3 py-2 text-[13px] transition-colors ${
                i === 1
                  ? 'bg-iris-500/25 font-medium text-white ring-1 ring-iris-400/40'
                  : 'text-mist-300'
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
            <div className="rounded-full border border-teal-400/30 bg-teal-500/10 px-2.5 py-1 text-[11px] font-medium text-teal-200">
              Confidence 98.4%
            </div>
          </div>

          {/* mini metrics */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { k: 'Resolved / hr', v: '1,284', d: '+12%' },
              { k: 'Avg latency', v: '420 ms', d: '-8%' },
              { k: 'Escalations', v: '2.1%', d: '-0.4%' },
            ].map((m) => (
              <div
                key={m.k}
                className="rounded-lg border border-white/10 bg-white/[0.05] p-2.5"
              >
                <div className="text-[10px] uppercase tracking-wide text-mist-400">{m.k}</div>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <span className="text-base font-semibold text-white">{m.v}</span>
                  <span className="text-[10px] font-medium text-teal-300">{m.d}</span>
                </div>
              </div>
            ))}
          </div>

          {/* sparkline / area chart */}
          <div className="mt-3 rounded-lg border border-white/10 bg-white/[0.04] p-3">
            <div className="mb-2 flex items-center justify-between text-[11px]">
              <span className="text-mist-300">Throughput · last 24h</span>
              <span className="font-medium text-teal-300">▲ 18%</span>
            </div>
            <svg viewBox="0 0 300 80" className="h-20 w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#818cf8" stopOpacity="0.55" />
                  <stop offset="1" stopColor="#818cf8" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* gridlines */}
              {[20, 40, 60].map((y) => (
                <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1" />
              ))}
              <path
                d="M0 62 L25 54 L50 58 L75 42 L100 47 L125 33 L150 36 L175 24 L200 28 L225 17 L250 21 L275 11 L300 15 L300 80 L0 80 Z"
                fill="url(#spark)"
              />
              <path
                d="M0 62 L25 54 L50 58 L75 42 L100 47 L125 33 L150 36 L175 24 L200 28 L225 17 L250 21 L275 11 L300 15"
                fill="none"
                stroke="#a5b4ff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="275" cy="11" r="3.5" fill="#a5b4ff" stroke="#0e1119" strokeWidth="2" />
            </svg>
          </div>

          {/* governed response row */}
          <div className="mt-3 flex items-start gap-2.5 rounded-lg border border-iris-400/25 bg-iris-500/[0.08] p-3">
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-iris-400 to-teal-400 text-[11px] font-bold text-ink-950">
              A
            </div>
            <div className="text-[12.5px] leading-relaxed text-mist-100">
              Routed to <span className="font-medium text-white">Tier-2 adjuster</span> — policy match on
              clauses 4.2, 7.1.{' '}
              <span className="rounded bg-iris-500/25 px-1.5 py-0.5 font-mono text-[11px] text-iris-200 ring-1 ring-iris-400/30">
                cited · 3 docs
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
