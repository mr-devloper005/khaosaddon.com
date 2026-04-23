import Link from 'next/link'
import { KhaosMarketingShell } from '@/components/shared/khaos-marketing-shell'
import { SITE_CONFIG } from '@/lib/site-config'

const sections = [
  {
    id: 'agreement',
    title: 'Agreement',
    body: `By accessing ${SITE_CONFIG.name} you agree to these Terms and our Privacy Policy. If you use the service on behalf of an organization, you represent that you have authority to bind that organization.`,
  },
  {
    id: 'accounts-security',
    title: 'Accounts & security',
    body: 'You must provide accurate registration information, safeguard credentials, and notify us of unauthorized use. We may suspend accounts that present risk to the platform or other users.',
  },
  {
    id: 'content-licenses',
    title: 'Content & licenses',
    body: 'You retain ownership of content you submit. You grant us a worldwide, non-exclusive license to host, reproduce, adapt, and display that content solely to operate and promote the service. You are responsible for securing rights from collaborators.',
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable use',
    body: 'Do not upload malware, scrape the service in violation of our robots policy, interfere with infrastructure, harass others, or publish unlawful material. Marketplace participants must honor pricing and fulfillment commitments.',
  },
  {
    id: 'third-party-services',
    title: 'Third-party services',
    body: 'Integrations may link to third-party sites. Their terms govern your use of those services; we are not responsible for their availability or practices.',
  },
  {
    id: 'fees-trials',
    title: 'Fees & trials',
    body: 'Paid plans renew according to the billing cadence you select unless canceled. Taxes may apply. Trial credits expire as disclosed at signup.',
  },
  {
    id: 'availability-changes',
    title: 'Availability & changes',
    body: 'We strive for high availability but do not guarantee uninterrupted access. We may modify features with reasonable notice for material changes.',
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer',
    body: 'The service is provided "as is" without warranties of merchantability, fitness for a particular purpose, or non-infringement, except where prohibited by law.',
  },
  {
    id: 'limitation-liability',
    title: 'Limitation of liability',
    body: 'To the fullest extent permitted, our aggregate liability arising from these terms is limited to the fees you paid us in the twelve months preceding the claim, or fifty dollars if no fees applied.',
  },
  {
    id: 'indemnity',
    title: 'Indemnity',
    body: 'You will defend and indemnify us against claims arising from your content, misuse of the service, or violation of these terms.',
  },
  {
    id: 'disputes',
    title: 'Disputes',
    body: 'These terms are governed by the laws of the jurisdiction stated in your order form, excluding conflict-of-law rules. Informal resolution is required before initiating formal proceedings unless urgent injunctive relief is needed.',
  },
  {
    id: 'contact',
    title: 'Contact',
    body: 'Legal notices should be sent to legal@ with "Terms Notice" in the subject line.',
  },
]

export default function TermsPage() {
  return (
    <KhaosMarketingShell
      eyebrow="Legal"
      title="Terms of Service"
      description={`Rules for using ${SITE_CONFIG.name}, including content licensing, acceptable use, and liability.`}
      actions={
        <Link
          href="/privacy"
          className="inline-flex items-center justify-center border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
        >
          Privacy Policy
        </Link>
      }
    >
      <p className="text-sm text-zinc-500">Last updated: April 13, 2026</p>
      <div className="mt-8 space-y-5">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-28 border border-white/10 bg-white/[0.03] p-6 sm:p-8"
          >
            <h2 className="text-lg font-semibold text-white">{section.title}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{section.body}</p>
          </section>
        ))}
      </div>
    </KhaosMarketingShell>
  )
}
