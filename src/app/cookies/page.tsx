import Link from 'next/link'
import { KhaosMarketingShell } from '@/components/shared/khaos-marketing-shell'

const cookies = [
  {
    name: 'session_id',
    purpose: 'Keeps you signed in across requests and secures dashboard actions.',
    type: 'Essential',
    duration: 'Rolling 30 days',
  },
  {
    name: 'csrf_token',
    purpose: 'Prevents cross-site request forgery on state-changing operations.',
    type: 'Essential',
    duration: 'Session',
  },
  {
    name: 'theme_pref',
    purpose: 'Remembers light/dark preference when you opt out of system defaults.',
    type: 'Preferences',
    duration: '1 year',
  },
  {
    name: '_analytics_uid',
    purpose: 'Anonymous visitor identifier for product analytics and funnel measurement.',
    type: 'Analytics',
    duration: '13 months',
  },
  {
    name: 'campaign_ref',
    purpose: 'Attributes signups to partner campaigns without storing PII in the query string.',
    type: 'Marketing',
    duration: '90 days',
  },
]

export default function CookiesPage() {
  return (
    <KhaosMarketingShell
      eyebrow="Legal"
      title="Cookie Policy"
      description="How we use cookies, local storage, and similar technologies—and how you can control them."
      actions={
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
        >
          Cookie questions
        </Link>
      }
    >
      <div className="space-y-6 border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <p className="text-sm leading-7 text-zinc-400">
          We minimize tracking to what is necessary for security, preferences, and understanding product usage. You can
          adjust non-essential categories from the consent banner or browser settings; essential cookies cannot be
          disabled without breaking core functionality.
        </p>
        <p className="text-xs text-zinc-500">Last updated: April 13, 2026</p>
      </div>

      <div className="mt-10 overflow-x-auto border border-white/10">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-white/[0.04] text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            <tr>
              <th className="px-5 py-4">Cookie / key</th>
              <th className="px-5 py-4">Purpose</th>
              <th className="px-5 py-4">Category</th>
              <th className="px-5 py-4">Duration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {cookies.map((row) => (
              <tr key={row.name} className="bg-[#05070d]/80">
                <td className="px-5 py-4 font-mono text-xs text-red-300">{row.name}</td>
                <td className="px-5 py-4 text-zinc-400">{row.purpose}</td>
                <td className="px-5 py-4 text-white">{row.type}</td>
                <td className="px-5 py-4 text-zinc-400">{row.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="border border-white/10 bg-[#0a0f1c] p-6">
          <h2 className="text-lg font-semibold text-white">Browser controls</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Major browsers let you block third-party cookies, clear storage, or enable global privacy signals. Refer to your
            browser vendor documentation for step-by-step instructions.
          </p>
        </div>
        <div className="border border-[#1a367e]/50 bg-[#1a367e]/15 p-6">
          <h2 className="text-lg font-semibold text-white">Updates</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-300">
            When we introduce new cookies we refresh this table and, where required, prompt for consent again before
            activation.
          </p>
        </div>
      </section>
    </KhaosMarketingShell>
  )
}
