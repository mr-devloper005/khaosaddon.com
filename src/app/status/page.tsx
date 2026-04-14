import Link from 'next/link'
import { KhaosMarketingShell } from '@/components/shared/khaos-marketing-shell'

const services = [
  { name: 'Web application', detail: 'Dashboards, editorial tools, and public discovery surfaces.', status: 'Operational', uptime: '99.99%' },
  { name: 'Core API', detail: 'REST + webhook delivery for listings, articles, and collections.', status: 'Operational', uptime: '99.98%' },
  { name: 'Media pipeline', detail: 'Image optimization, PDF rendering, and CDN fan-out.', status: 'Operational', uptime: '99.97%' },
  { name: 'Search index', detail: 'Full-text and faceted search with sub-minute ingestion.', status: 'Operational', uptime: '99.95%' },
  { name: 'Auth & sessions', detail: 'OAuth providers, magic links, and device management.', status: 'Operational', uptime: '99.99%' },
]

const incidents = [
  {
    id: '2026-03-12',
    date: 'March 12, 2026',
    title: 'Delayed notification fan-out',
    impact: 'Push and email digests lagged up to 18 minutes.',
    resolution: 'Scaled worker pool and patched queue back-pressure. No data loss.',
    state: 'Resolved',
  },
  {
    id: '2026-02-22',
    date: 'February 22, 2026',
    title: 'Search indexing backlog',
    impact: 'New articles appeared in search after ~25 minute delay.',
    resolution: 'Rebalanced indexer shards and added autoscaling on CPU.',
    state: 'Resolved',
  },
  {
    id: '2026-01-08',
    date: 'January 8, 2026',
    title: 'Third-party DNS drift',
    impact: 'Brief elevation of API error rates in EU edge PoPs.',
    resolution: 'Failover to secondary DNS with manual verification.',
    state: 'Resolved',
  },
]

export default function StatusPage() {
  return (
    <KhaosMarketingShell
      eyebrow="Status"
      title="Live platform health"
      description="Independent checks run every 60 seconds from six regions. Historical incidents include customer impact, remediation, and follow-up tasks."
      actions={
        <Link
          href="/contact"
          className="inline-flex items-center justify-center border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
        >
          Report an issue
        </Link>
      }
    >
      <div className="flex flex-wrap items-center gap-4 border border-emerald-500/30 bg-emerald-500/10 px-5 py-4 text-sm text-emerald-100">
        <span className="flex h-2.5 w-2.5 animate-pulse bg-emerald-400" aria-hidden />
        <span className="font-semibold">All systems operational</span>
        <span className="text-emerald-200/80">Last verified: auto · rolling window 90 days</span>
      </div>

      <div className="mt-10 overflow-x-auto border border-white/10">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-white/[0.04] text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            <tr>
              <th className="px-5 py-4 font-semibold">Component</th>
              <th className="px-5 py-4 font-semibold">Detail</th>
              <th className="px-5 py-4 font-semibold">Uptime (90d)</th>
              <th className="px-5 py-4 font-semibold">State</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {services.map((service) => (
              <tr key={service.name} className="bg-[#05070d]/80">
                <td className="px-5 py-4 font-medium text-white">{service.name}</td>
                <td className="px-5 py-4 text-zinc-400">{service.detail}</td>
                <td className="px-5 py-4 text-zinc-300">{service.uptime}</td>
                <td className="px-5 py-4">
                  <span className="inline-flex items-center gap-2 text-emerald-400">
                    <span className="h-1.5 w-1.5 bg-emerald-400" aria-hidden />
                    {service.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-14">
        <h2 className="text-xl font-semibold text-white">Incident history</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-400">
          We publish timelines during active events and finalize notes within five business days. Subscribe to the RSS feed
          in your monitoring stack for webhook parity.
        </p>
        <div className="mt-8 space-y-5">
          {incidents.map((incident) => (
            <article key={incident.id} className="border border-white/10 bg-white/[0.03] p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{incident.date}</span>
                <span className="border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-300">
                  {incident.state}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">{incident.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">
                <span className="font-medium text-zinc-300">Customer impact: </span>
                {incident.impact}
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                <span className="font-medium text-zinc-300">Resolution: </span>
                {incident.resolution}
              </p>
            </article>
          ))}
        </div>
      </section>
    </KhaosMarketingShell>
  )
}
