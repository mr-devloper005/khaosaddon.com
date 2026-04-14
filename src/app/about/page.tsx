import Link from 'next/link'
import { KhaosMarketingShell } from '@/components/shared/khaos-marketing-shell'
import { mockTeamMembers } from '@/data/mock-data'
import { SITE_CONFIG } from '@/lib/site-config'

const milestones = [
  { year: '2022', title: 'Prototype weekend', detail: 'First bookmarking experiments shipped to a closed creator cohort.' },
  { year: '2024', title: 'Public directory', detail: 'Listings and articles merged into one coherent discovery graph.' },
  { year: '2026', title: 'Scale & trust', detail: 'Fraud resistance, faster search, and editorial standards across every surface.' },
]

const pillars = [
  {
    title: 'Precision over noise',
    body: 'We design surfaces that reward focus: fewer carousels, stronger typography, and metadata you can trust at a glance.',
  },
  {
    title: 'Creators own the graph',
    body: 'Your collections, listings, and posts stay portable. We are infrastructure—not a lock-in engine.',
  },
  {
    title: 'Safety by default',
    body: 'Moderation tooling, audit trails, and transparent appeals keep communities healthy without slowing shipping.',
  },
]

const stats = [
  { label: 'Active creators', value: '12k+' },
  { label: 'Curated bookmarks', value: '180k' },
  { label: 'Live listings', value: '8.6k' },
]

export default function AboutPage() {
  return (
    <KhaosMarketingShell
      eyebrow="Company"
      title={`About ${SITE_CONFIG.name}`}
      description="We build sharp, fast tools for people who outgrow generic feeds—publishers, operators, and communities that want their knowledge to travel with intent."
      actions={
        <>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
          >
            Talk with us
          </Link>
          <Link
            href="/careers"
            className="inline-flex items-center justify-center border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            View careers
          </Link>
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-6 border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">North star</p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            A single operating layer for publishing, listings, and shared knowledge.
          </h2>
          <p className="text-sm leading-7 text-zinc-400">
            {SITE_CONFIG.name} started as a reaction to fragmented tabs and duplicated spreadsheets. Teams needed a place to
            capture what actually worked—vendor shortlists, launch narratives, classifieds, and long-form explainers—without
            losing the human signal that makes recommendations valuable.
          </p>
          <p className="text-sm leading-7 text-zinc-400">
            Today we pair editorial-grade article layouts with directory-grade discovery so operators can move from research
            to action in one session. Every release tightens that loop.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {stats.map((item) => (
            <div key={item.label} className="border border-white/10 bg-[#0a0f1c] px-5 py-6">
              <div className="text-3xl font-semibold text-white">{item.value}</div>
              <div className="mt-2 text-xs uppercase tracking-wide text-zinc-500">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 border border-white/10 bg-gradient-to-br from-[#1a367e]/40 to-transparent p-6 sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-400">Trajectory</p>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {milestones.map((m) => (
            <div key={m.year} className="relative border-l-2 border-red-600 pl-5">
              <span className="text-xs font-semibold text-red-500">{m.year}</span>
              <h3 className="mt-2 text-lg font-semibold text-white">{m.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{m.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{pillar.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">Leadership & craft</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">People behind the platform</h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-400">
              Product, editorial, and infrastructure specialists working across time zones to keep the experience fast and
              humane.
            </p>
          </div>
          <Link href="/team" className="text-sm font-semibold text-red-400 hover:text-red-300">
            Meet the full team →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {mockTeamMembers.map((member) => (
            <div
              key={member.id}
              className="border border-white/10 bg-[#070b14] p-6 transition hover:border-red-600/40"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center bg-white/10 text-sm font-bold text-white">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{member.name}</p>
                  <p className="text-xs text-zinc-500">{member.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{member.bio}</p>
              <p className="mt-3 text-xs text-zinc-600">{member.location}</p>
            </div>
          ))}
        </div>
      </div>
    </KhaosMarketingShell>
  )
}
