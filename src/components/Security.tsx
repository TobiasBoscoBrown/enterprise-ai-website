import Reveal, { SectionHead } from './Reveal'

const Shield = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" className="text-teal-400">
    <path d="M10 2 L16 4.5 V10 Q16 15 10 18 Q4 15 4 10 V4.5 Z" strokeLinejoin="round" />
    <path d="M7 10 l2 2 4-4.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const items = [
  { t: 'SOC 2 Type II & ISO 27001', d: 'Independently audited annually. Reports and pen-test summaries available under NDA.' },
  { t: 'SSO / SAML & SCIM', d: 'Okta, Entra ID, Google. Just-in-time provisioning and automated de-provisioning.' },
  { t: 'Role-based access control', d: 'Granular roles down to dataset and tool level, inheriting your existing IdP groups.' },
  { t: 'Data residency by region', d: 'Pin processing and storage to US, EU, or APAC. Choose your own KMS keys.' },
  { t: 'PII detection & redaction', d: 'Automatic detection of 50+ sensitive entity types, redacted before inference.' },
  { t: 'Tamper-evident audit log', d: 'Every prompt, retrieval, and decision is logged immutably and exportable to your SIEM.' },
]

const badges = ['SOC 2', 'ISO 27001', 'HIPAA', 'GDPR', 'CCPA']

export default function Security() {
  return (
    <section id="security" className="scroll-mt-20 py-24 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <SectionHead
            eyebrow="Enterprise & security"
            title={<>Built for the teams with the most to lose</>}
            sub="Security isn’t a tier — it’s the foundation. Aerolith ships with the controls your CISO expects, on day one."
          />
          <Reveal delay={0.16}>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-2 text-[12px] font-medium text-mist-200"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.22}>
            <a href="#cta" className="btn-ghost mt-7">
              Request our security package
            </a>
          </Reveal>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={(i % 2) * 0.06}>
              <div className="card h-full p-5 transition-colors duration-300 hover:border-white/[0.14]">
                <Shield />
                <h3 className="mt-3 text-[15px] font-semibold text-white">{it.t}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-mist-300">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
