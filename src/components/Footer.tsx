import { Logo } from '../lib'

const cols = [
  {
    title: 'Platform',
    links: ['Agents', 'Connectors', 'Evals', 'Observability', 'Guardrails', 'SDK'],
  },
  {
    title: 'Solutions',
    links: ['Financial services', 'Healthcare', 'Public sector', 'Insurance', 'Support automation'],
  },
  {
    title: 'Company',
    links: ['About', 'Customers', 'Careers', 'Security', 'Trust center', 'Blog'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'API reference', 'Changelog', 'Status', 'Community'],
  },
]

const Social = ({ d, label }: { d: string; label: string }) => (
  <a
    href="#"
    aria-label={label}
    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-mist-400 transition-colors hover:border-white/20 hover:text-white"
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d={d} />
    </svg>
  </a>
)

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-ink-950 pt-16">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-mist-400">
              The enterprise AI platform for teams that can’t afford to guess. Governed,
              observable, production-grade.
            </p>
            <div className="mt-5 flex gap-2.5">
              <Social label="X" d="M18.9 2H22l-7.3 8.3L23 22h-6.6l-5.2-6.8L5.3 22H2l7.8-8.9L1.5 2h6.8l4.7 6.2L18.9 2Zm-1.2 18h1.8L7.4 4H5.5l12.2 16Z" />
              <Social label="LinkedIn" d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.3h3.5V21H3.2V8.3Zm5.6 0h3.3v1.7h.05c.46-.87 1.6-1.8 3.3-1.8 3.5 0 4.15 2.3 4.15 5.3V21h-3.5v-5.6c0-1.3-.02-3-1.8-3-1.8 0-2.1 1.4-2.1 2.9V21H8.8V8.3Z" />
              <Social label="GitHub" d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.5 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 3.9-1.3 6.8-5.1 6.8-9.6C22 6.6 17.5 2 12 2Z" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="text-[13px] font-semibold text-white">{c.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-[13.5px] text-mist-400 transition-colors hover:text-mist-100">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.07] py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-mist-400">
            © {new Date().getFullYear()} Aerolith Intelligence, Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-mist-400">
            {['Privacy', 'Terms', 'Security', 'DPA', 'Cookie preferences'].map((l) => (
              <a key={l} href="#" className="transition-colors hover:text-mist-100">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
