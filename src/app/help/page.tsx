import Link from 'next/link'
import { KhaosMarketingShell } from '@/components/shared/khaos-marketing-shell'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { mockFaqs } from '@/data/mock-data'

const playbooks = [
  {
    title: 'Launch your first collection',
    body: 'Connect sources, set visibility, and invite collaborators with granular permissions.',
    href: '/articles',
  },
  {
    title: 'Publish long-form without template fatigue',
    body: 'Use editorial blocks, hero media, and structured metadata tuned for search and social cards.',
    href: '/articles',
  },
  {
    title: 'Operate listings at scale',
    body: 'Bulk edits, verification badges, and duplicate detection keep directories trustworthy.',
    href: '/listings',
  },
  {
    title: 'Bookmarks that sync with your team',
    body: 'Shared folders, comment threads, and export to CSV or JSON for downstream tools.',
    href: '/sbm/collections',
  },
]

const channels = [
  { label: 'Priority support', detail: '24h SLA on growth plans for billing and outages.', tone: 'text-red-300' },
  { label: 'Community office hours', detail: 'Weekly live Q&A covering new APIs and layout recipes.', tone: 'text-zinc-300' },
  { label: 'Status & incidents', detail: 'Historical transparency with root-cause summaries.', tone: 'text-zinc-300' },
]

export default function HelpPage() {
  return (
    <KhaosMarketingShell
      eyebrow="Help Center"
      title="Answers, playbooks, and human support"
      description="Search across guides, dig into FAQs, or reach our team when you are blocked—we respond with steps, not scripts."
      actions={
        <>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
          >
            Contact support
          </Link>
          <Link
            href="/status"
            className="inline-flex items-center justify-center border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            System status
          </Link>
        </>
      }
    >
      <section className="grid gap-6 border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:grid-cols-3">
        {channels.map((c) => (
          <div key={c.label} className="border border-white/10 bg-black/25 p-5">
            <h2 className={`text-sm font-semibold ${c.tone}`}>{c.label}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{c.detail}</p>
          </div>
        ))}
      </section>

      <section className="mt-12">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">Playbooks</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Start with the workflow you need</h2>
          </div>
          <Link href="/search" className="text-sm font-semibold text-red-400 hover:text-red-300">
            Search all topics →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {playbooks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group border border-white/10 bg-[#070b14] p-6 transition hover:border-red-600/45"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-red-200">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{item.body}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-red-400">Open guide →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14 border border-white/10 bg-[#0a0f1c] p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-white">Frequently asked questions</h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-400">
          Straight answers about accounts, billing, data residency, and moderation. Still stuck? Email support with your
          workspace ID.
        </p>
        <Accordion type="single" collapsible className="mt-6 w-full border-t border-white/10">
          {mockFaqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border-white/10">
              <AccordionTrigger className="text-left text-white hover:text-red-200">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-sm leading-6 text-zinc-400">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </KhaosMarketingShell>
  )
}
