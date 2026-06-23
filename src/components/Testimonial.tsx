import Reveal, { SectionHead } from './Reveal'

export default function Testimonial() {
  return (
    <section id="customers" className="scroll-mt-20 py-24 sm:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <figure className="card relative p-8 sm:p-10">
            <div className="absolute right-8 top-6 font-serif text-7xl leading-none text-iris-500/20">”</div>
            <blockquote className="text-xl font-medium leading-relaxed text-mist-100 sm:text-2xl">
              “We evaluated six platforms. Aerolith was the only one our security team approved
              without a fight. We had a governed claims-triage agent in production in five weeks —
              and it cut our average handling time by{' '}
              <span className="iris-text font-semibold">38%</span>.”
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-iris-400 to-teal-400 text-base font-bold text-ink-950">
                MR
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Marisa Reyes</div>
                <div className="text-[13px] text-mist-400">VP, Data &amp; AI · Cobalt Insurance</div>
              </div>
            </figcaption>
          </figure>
        </Reveal>

        <div>
          <SectionHead
            eyebrow="Case study"
            title={<>Cobalt Insurance, in production in 5 weeks</>}
            sub="A Fortune-500 carrier replaced a brittle in-house RAG stack with Aerolith — and gave their CISO a single pane of governance."
          />
          <Reveal delay={0.16}>
            <dl className="mt-7 grid grid-cols-2 gap-4">
              {[
                ['38%', 'lower handling time'],
                ['0', 'compliance findings'],
                ['5 wks', 'pilot to production'],
                ['12', 'agents now live'],
              ].map(([k, v]) => (
                <div key={v} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                  <div className="text-2xl font-bold text-white">{k}</div>
                  <div className="mt-1 text-[13px] text-mist-400">{v}</div>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.22}>
            <a href="#cta" className="btn-ghost mt-7">
              Read the full case study
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
