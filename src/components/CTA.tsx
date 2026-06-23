import Reveal from './Reveal'

export default function CTA() {
  return (
    <section id="cta" className="scroll-mt-20 py-24 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] px-7 py-16 text-center sm:px-12">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-mesh opacity-60 animate-gradient-pan [background-size:200%_200%]" />
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grid [background-size:42px_42px] opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_50%,#000,transparent)]" />
            <h2 className="mx-auto max-w-2xl text-h1 font-bold text-white">
              See Aerolith running on your data
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-mist-200">
              Book a 30-minute demo. We’ll connect a sample of your stack and show a governed
              agent end-to-end — security questions welcome.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#" className="btn-primary px-7 py-3.5 text-[15px]">
                Book a demo
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h9M8 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#" className="btn-ghost px-7 py-3.5 text-[15px]">
                Read the docs
              </a>
            </div>
            <p className="mt-6 text-[13px] text-mist-400">
              No data leaves your environment during evaluation.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
