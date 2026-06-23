import Reveal from './Reveal'
import { CountUp } from '../lib'

const stats = [
  { to: 40, suffix: '%', label: 'faster case resolution', prefix: '' },
  { to: 99.95, suffix: '%', decimals: 2, label: 'platform uptime SLA' },
  { to: 8, suffix: 'x', label: 'faster to production vs. in-house' },
  { to: 2.4, suffix: 'B', prefix: '', decimals: 1, label: 'governed inferences / month' },
]

export default function Metrics() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-mesh opacity-30" />
      <div className="container-x">
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-mist-400">
            Measured impact across regulated deployments
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <div className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                <span className="iris-text">
                  <CountUp to={s.to} suffix={s.suffix} prefix={s.prefix} decimals={s.decimals ?? 0} />
                </span>
              </div>
              <div className="mt-2 text-sm text-mist-300">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
