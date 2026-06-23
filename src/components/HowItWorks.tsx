import Reveal, { SectionHead } from './Reveal'

const steps = [
  {
    n: '01',
    title: 'Connect & ground',
    body: 'Point Aerolith at your sources. We index, chunk, and apply your existing permissions so every answer is grounded in data the user is actually allowed to see.',
  },
  {
    n: '02',
    title: 'Compose your agent',
    body: 'Assemble retrieval, tools, and policy in a visual builder or with our TypeScript SDK. Version everything; branch and preview like code.',
  },
  {
    n: '03',
    title: 'Evaluate & approve',
    body: 'Run automated evals and red-team suites against golden datasets. Route to a human reviewer for sign-off before anything reaches production.',
  },
  {
    n: '04',
    title: 'Ship & observe',
    body: 'Deploy behind your SSO with full tracing, cost controls, and alerts. Improvements ship continuously — with one-click rollback if a metric dips.',
  },
]

export default function HowItWorks() {
  return (
    <section id="solutions" className="scroll-mt-20 border-y border-white/[0.06] bg-ink-950/40 py-24 sm:py-28">
      <div className="container-x">
        <SectionHead
          eyebrow="How it works"
          title={<>From raw data to governed agent in four steps</>}
          sub="A workflow your platform and security teams will actually sign off on."
        />

        <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="relative h-full">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-iris-400/30 bg-iris-500/10 font-mono text-sm font-semibold text-iris-300">
                    {s.n}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
                </div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-mist-300">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
