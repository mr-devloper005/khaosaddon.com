import Link from 'next/link'
import { KhaosMarketingShell } from '@/components/shared/khaos-marketing-shell'
import { SITE_CONFIG } from '@/lib/site-config'

const sections = [
  {
    id: 'who-this-policy-covers',
    title: 'Who this policy covers',
    body: `This policy explains how ${SITE_CONFIG.name} ("we", "us") handles personal data for visitors, registered users, and workspace administrators across our websites, APIs, and offline events.`,
  },
  {
    id: 'information-we-collect',
    title: 'Information we collect',
    body: 'Account details (name, email, authentication tokens), billing records processed by our payment partners, content you upload, device and log data (IP address, browser, approximate location), and product telemetry that helps us diagnose reliability issues.',
  },
  {
    id: 'how-we-use-information',
    title: 'How we use information',
    body: 'We use data to operate the service, personalize discovery, prevent abuse, fulfill legal obligations, and communicate product changes. Aggregated metrics may inform public roadmap posts without identifying individuals.',
  },
  {
    id: 'legal-bases-eea-uk',
    title: 'Legal bases (EEA & UK)',
    body: 'Where GDPR applies we rely on contract performance, legitimate interests (security, product improvement), consent for optional marketing, and legal requirements where compelled.',
  },
  {
    id: 'sharing-subprocessors',
    title: 'Sharing & subprocessors',
    body: 'We share data with infrastructure, analytics, customer support, and payment vendors bound by data processing agreements. A current subprocessor list is available upon request to privacy@.',
  },
  {
    id: 'retention',
    title: 'Retention',
    body: 'We retain account data while your workspace is active. Backups roll off within 35 days of deletion unless law requires longer storage. Audit logs for security events may be kept up to 18 months.',
  },
  {
    id: 'your-rights',
    title: 'Your rights',
    body: 'You may access, correct, export, or delete personal data subject to legal exceptions. EEA/UK users may lodge complaints with their supervisory authority. California residents may request disclosure or deletion as described below.',
  },
  {
    id: 'security',
    title: 'Security',
    body: 'We encrypt data in transit (TLS 1.2+), enforce least-privilege access, run regular penetration tests, and maintain incident response playbooks reviewed quarterly.',
  },
  {
    id: 'international-transfers',
    title: 'International transfers',
    body: 'If data moves outside your region we rely on Standard Contractual Clauses or equivalent safeguards. Contact us for transfer impact assessment summaries.',
  },
  {
    id: 'children',
    title: 'Children',
    body: 'The service is not directed to children under 16 and we do not knowingly collect their data.',
  },
  {
    id: 'updates',
    title: 'Updates',
    body: 'We will post changes here with a revised "Last updated" date. Material changes trigger in-product notices and, where required, fresh consent.',
  },
  {
    id: 'contact',
    title: 'Contact',
    body: 'Questions about privacy? Email privacy@ or mail our registered address listed in the footer. For EU representatives, request details via the same channel.',
  },
]

export default function PrivacyPage() {
  return (
    <KhaosMarketingShell
      eyebrow="Legal"
      title="Privacy Policy"
      description="Transparency about the data we collect, why we process it, and the controls available to you."
      actions={
        <Link
          href="/contact"
          className="inline-flex items-center justify-center border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
        >
          Privacy requests
        </Link>
      }
    >
      <p className="text-sm text-zinc-500">Last updated: April 13, 2026</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-[220px_1fr] lg:items-start">
        <nav className="hidden border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-400 lg:block">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">On this page</p>
          <ul className="mt-4 space-y-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:text-red-300">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-5">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 border border-white/10 bg-[#070b14] p-6 sm:p-8"
            >
              <h2 className="text-lg font-semibold text-white">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </KhaosMarketingShell>
  )
}
