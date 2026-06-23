import Reveal, { SectionHead } from './Reveal'

const integrations = [
  'Snowflake', 'Databricks', 'Postgres', 'Salesforce', 'ServiceNow', 'SAP',
  'Okta', 'Slack', 'SharePoint', 'S3', 'BigQuery', 'Confluence',
  'Zendesk', 'Workday', 'Jira', 'Splunk',
]

export default function Integrations() {
  return (
    <section className="border-y border-white/[0.06] bg-ink-950/40 py-24 sm:py-28">
      <div className="container-x">
        <SectionHead
          center
          eyebrow="Integrations"
          title={<>Plugs into the systems you already run</>}
          sub="Native connectors for the enterprise stack — data, identity, and the tools your teams live in."
        />
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {integrations.map((name, i) => (
            <Reveal key={name} delay={(i % 4) * 0.04}>
              <div className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 transition-all duration-300 hover:border-white/[0.16] hover:bg-white/[0.04]">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-iris-500/25 to-teal-500/20 font-mono text-xs font-bold text-mist-100">
                  {name.slice(0, 2)}
                </span>
                <span className="text-[14px] font-medium text-mist-200 group-hover:text-white">
                  {name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-sm text-mist-400">
            Don’t see yours? Build any connector in minutes with the{' '}
            <span className="font-mono text-iris-300">@aerolith/sdk</span>.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
