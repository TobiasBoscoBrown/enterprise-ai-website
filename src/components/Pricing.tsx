import Reveal, { SectionHead } from './Reveal'

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-teal-400">
    <path d="M3 8.5l3 3 7-7.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const tiers = [
  {
    name: 'Team',
    price: 'From $2,500',
    cadence: '/ month',
    tagline: 'For teams shipping their first governed agents.',
    features: [
      'Up to 25 builder seats',
      '10 production agents',
      '20+ managed connectors',
      'SSO/SAML & RBAC',
      'Standard evals & tracing',
      'Email & Slack support',
    ],
    cta: 'Start a pilot',
    highlight: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: '',
    tagline: 'For regulated orgs running AI at scale.',
    features: [
      'Unlimited seats & agents',
      'VPC or on-prem deployment',
      'Data residency & customer-managed keys',
      'Custom evals, red-teaming & sign-off flows',
      'SIEM export & 99.95% uptime SLA',
      'Named architect & 24/7 support',
    ],
    cta: 'Talk to sales',
    highlight: true,
  },
  {
    name: 'Public sector',
    price: "Let's talk",
    cadence: '',
    tagline: 'For government & defense workloads.',
    features: [
      'Air-gapped deployment',
      'FedRAMP-aligned controls',
      'GovCloud regions',
      'Dedicated tenancy',
      'Compliance documentation',
      'On-site enablement',
    ],
    cta: 'Contact public sector',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t border-white/[0.06] bg-ink-950/40 py-24 sm:py-28">
      <div className="container-x">
        <SectionHead
          center
          eyebrow="Pricing"
          title={<>Plans that scale from pilot to enterprise</>}
          sub="Transparent seat-based pricing for teams; custom contracts for the deployments that need them."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div
                className={`relative flex h-full flex-col rounded-xl2 p-7 ${
                  t.highlight
                    ? 'border border-iris-400/40 bg-gradient-to-b from-iris-500/[0.12] to-transparent shadow-glow'
                    : 'card'
                }`}
              >
                {t.highlight && (
                  <span className="absolute -top-3 left-7 rounded-full bg-iris-500 px-3 py-1 text-[11px] font-semibold text-white">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-white">{t.name}</h3>
                <p className="mt-1.5 text-[13.5px] text-mist-400">{t.tagline}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white">{t.price}</span>
                  {t.cadence && <span className="text-sm text-mist-400">{t.cadence}</span>}
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-[13.5px] text-mist-200">
                      <Check />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`mt-7 ${t.highlight ? 'btn-primary' : 'btn-ghost'} w-full`}
                >
                  {t.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
