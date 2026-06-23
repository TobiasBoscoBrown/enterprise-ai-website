import Reveal, { SectionHead } from './Reveal'

type Feature = {
  title: string
  body: string
  mock: JSX.Element
  span?: string
}

const Connectors = () => (
  <div className="grid grid-cols-4 gap-2">
    {['SQL', 'S3', 'API', 'PDF', 'CRM', 'Slack', 'ERP', 'Lake'].map((c, i) => (
      <div
        key={c}
        className={`flex h-11 items-center justify-center rounded-lg border border-white/[0.07] font-mono text-[11px] ${
          i % 3 === 0 ? 'bg-iris-500/10 text-iris-300' : 'bg-white/[0.02] text-mist-300'
        }`}
      >
        {c}
      </div>
    ))}
  </div>
)

const EvalBars = () => (
  <div className="space-y-2.5">
    {[
      { l: 'Faithfulness', v: 96 },
      { l: 'Answer relevancy', v: 92 },
      { l: 'Toxicity (lower better)', v: 3 },
    ].map((b) => (
      <div key={b.l}>
        <div className="mb-1 flex justify-between text-[11px] text-mist-400">
          <span>{b.l}</span>
          <span className="text-mist-200">{b.v}</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-iris-400 to-teal-400"
            style={{ width: `${b.v}%` }}
          />
        </div>
      </div>
    ))}
  </div>
)

const Policy = () => (
  <pre className="overflow-hidden rounded-lg border border-white/[0.07] bg-ink-950/70 p-3 font-mono text-[11.5px] leading-relaxed text-mist-300">
{`policy "pii_redaction" {
  applies_to = ["support_agent"]
  redact     = ["ssn", "dob", "card"]
  on_violation = block
}`}
  </pre>
)

const Trace = () => (
  <div className="space-y-1.5">
    {[
      { t: 'retrieve', d: '38ms', ok: true },
      { t: 'rerank', d: '12ms', ok: true },
      { t: 'generate', d: '310ms', ok: true },
      { t: 'guardrail', d: '9ms', ok: true },
    ].map((s) => (
      <div
        key={s.t}
        className="flex items-center justify-between rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 font-mono text-[11px]"
      >
        <span className="flex items-center gap-2 text-mist-200">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
          {s.t}
        </span>
        <span className="text-mist-400">{s.d}</span>
      </div>
    ))}
  </div>
)

const Deploy = () => (
  <div className="flex items-center justify-between gap-3">
    {['Cloud', 'VPC', 'On-prem'].map((d, i) => (
      <div
        key={d}
        className={`flex-1 rounded-lg border p-2.5 text-center text-[12px] ${
          i === 1
            ? 'border-iris-400/40 bg-iris-500/10 text-white'
            : 'border-white/[0.07] bg-white/[0.02] text-mist-300'
        }`}
      >
        <div className="mb-1 text-base">{['☁︎', '◫', '▤'][i]}</div>
        {d}
      </div>
    ))}
  </div>
)

const features: Feature[] = [
  {
    title: 'Connect any data, governed at the source',
    body: 'Stream from warehouses, object storage, SaaS, and documents through 60+ pre-built connectors. Column-level permissions and lineage are enforced before a single token is generated.',
    mock: <Connectors />,
    span: 'lg:col-span-2',
  },
  {
    title: 'Continuous evals you can trust',
    body: 'Score every release against golden datasets for faithfulness, relevancy, and safety. Ship only when the numbers clear your bar — and roll back instantly when they don’t.',
    mock: <EvalBars />,
  },
  {
    title: 'Policy-as-code guardrails',
    body: 'Define redaction, tool access, and escalation rules in version-controlled policy. Violations are blocked at runtime and logged to your audit trail.',
    mock: <Policy />,
  },
  {
    title: 'End-to-end observability',
    body: 'Every agent decision is traced span-by-span — retrieval, reranking, generation, and guardrails — so you can debug latency and prove what the model saw.',
    mock: <Trace />,
  },
  {
    title: 'Deploy where your data lives',
    body: 'Run fully managed, inside your VPC, or air-gapped on-prem. The same control plane, the same SLAs — your residency requirements, met.',
    mock: <Deploy />,
  },
]

export default function Platform() {
  return (
    <section id="platform" className="scroll-mt-20 py-24 sm:py-28">
      <div className="container-x">
        <SectionHead
          eyebrow="The platform"
          title={<>One control plane for the entire AI lifecycle</>}
          sub="Aerolith replaces a stack of glue code with a single, governed system — from data ingestion to evaluation to production rollout."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.06} className={f.span ?? ''}>
              <article className="card group h-full p-6 transition-all duration-300 hover:border-white/[0.14] hover:shadow-glow">
                <h3 className="text-base font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-mist-300">{f.body}</p>
                <div className="mt-5 rounded-xl border border-white/[0.06] bg-ink-950/40 p-3.5">
                  {f.mock}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
