import { KhaosMarketingShell } from '@/components/shared/khaos-marketing-shell'

const stack = [
  { name: 'Next.js', license: 'MIT', note: 'App router, streaming, and image optimization.' },
  { name: 'React', license: 'MIT', note: 'UI library powering interactive surfaces.' },
  { name: 'Tailwind CSS', license: 'MIT', note: 'Utility-first styling system.' },
  { name: 'Radix UI', license: 'MIT', note: 'Accessible primitives for dialogs, menus, and forms.' },
  { name: 'Lucide', license: 'ISC', note: 'Icon set used across navigation and marketing pages.' },
  { name: 'Zod', license: 'MIT', note: 'Schema validation for forms and API payloads.' },
  { name: 'Framer Motion', license: 'MIT', note: 'Declarative animation utilities.' },
  { name: 'Recharts', license: 'MIT', note: 'Composable charting for dashboards.' },
  { name: 'date-fns', license: 'MIT', note: 'Lightweight date formatting and manipulation.' },
  { name: 'Vercel Analytics', license: 'Apache-2.0', note: 'Privacy-aware analytics instrumentation.' },
]

export default function LicensesPage() {
  return (
    <KhaosMarketingShell
      eyebrow="Legal"
      title="Open source notices"
      description="We build on a foundation of extraordinary open source projects. Below are the primary dependencies shipped to browsers alongside our application code."
    >
      <p className="text-sm text-zinc-500">This page was last reviewed on April 13, 2026.</p>

      <div className="mt-8 space-y-4">
        {stack.map((item) => (
          <div
            key={item.name}
            className="grid gap-3 border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-[160px_100px_1fr] sm:items-center"
          >
            <div className="font-semibold text-white">{item.name}</div>
            <div className="text-sm font-medium text-red-400">{item.license}</div>
            <div className="text-sm text-zinc-400">{item.note}</div>
          </div>
        ))}
      </div>

      <section className="mt-12 border border-white/10 bg-[#0a0f1c] p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-white">Full text &amp; modifications</h2>
        <p className="mt-3 text-sm leading-7 text-zinc-400">
          Complete license texts ship inside our deployed JavaScript bundles and are available from each package
          repository. If you believe a notice is missing or incorrect, email legal@ with the package name and version—we
          correct filings within five business days.
        </p>
        <p className="mt-4 text-sm leading-7 text-zinc-400">
          Some enterprise features include optional proprietary SDKs governed by separate agreements; those components are not
          listed here.
        </p>
      </section>
    </KhaosMarketingShell>
  )
}
