import Link from 'next/link'
import { KhaosMarketingShell } from '@/components/shared/khaos-marketing-shell'
import { SITE_CONFIG } from '@/lib/site-config'

const roles = [
  {
    title: 'Staff Product Designer',
    location: 'Remote — Americas',
    type: 'Full-time',
    level: 'Senior',
    focus: 'Systems thinking for editorial + directory surfaces, prototyping in-code with engineers.',
  },
  {
    title: 'Frontend Engineer (Performance)',
    location: 'Hybrid — New York',
    type: 'Full-time',
    level: 'Senior',
    focus: 'Core Web Vitals, streaming data, and accessible component APIs across task layouts.',
  },
  {
    title: 'Trust & Safety Specialist',
    location: 'Remote — EU',
    type: 'Full-time',
    level: 'Mid',
    focus: 'Policy operations, appeals, and tooling that keeps creators safe without slowing shipping.',
  },
  {
    title: 'Developer Advocate',
    location: 'Remote',
    type: 'Full-time',
    level: 'Mid',
    focus: 'Docs, sample integrations, and partner workshops for teams embedding our APIs.',
  },
]

const principles = [
  { title: 'Autonomy with accountability', body: 'Small teams own outcomes end-to-end; leadership clears blockers instead of adding process.' },
  { title: 'Write in public', body: 'RFCs, postmortems, and roadmap notes are shared internally by default.' },
  { title: 'Measure human time saved', body: 'We ship when workflows feel measurably faster—not when a dashboard turns green.' },
]

const perks = [
  'Competitive cash + equity with transparent leveling',
  'Medical, dental, vision, and mental health stipend',
  '$2.4k annual learning budget + conference travel',
  'Remote-first with quarterly in-person design sprints',
  'Hardware refresh every 24 months',
  'Four weeks minimum PTO plus winter recharge days',
]

export default function CareersPage() {
  return (
    <KhaosMarketingShell
      eyebrow="Careers"
      title="Build the calmest high-trust discovery platform on the web"
      description={`${SITE_CONFIG.name} is hiring people who care about typographic detail, fair marketplaces, and infrastructure that respects user time.`}
      actions={
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
        >
          Introduce yourself
        </Link>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          {roles.map((role) => (
            <article
              key={role.title}
              className="border border-white/10 bg-white/[0.03] p-6 transition hover:border-red-600/35"
            >
              <div className="flex flex-wrap gap-2">
                <span className="border border-white/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-zinc-300">
                  {role.level}
                </span>
                <span className="border border-red-600/40 bg-red-600/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-red-300">
                  {role.type}
                </span>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-white">{role.title}</h2>
              <p className="mt-1 text-sm text-zinc-500">{role.location}</p>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{role.focus}</p>
              <Link
                href="/contact"
                className="mt-5 inline-flex text-sm font-semibold text-red-400 hover:text-red-300"
              >
                Apply for this role →
              </Link>
            </article>
          ))}
        </div>
        <div className="space-y-6">
          <div className="border border-white/10 bg-[#0a0f1c] p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white">How we work</h3>
            <div className="mt-6 space-y-5">
              {principles.map((p) => (
                <div key={p.title}>
                  <h4 className="text-sm font-semibold text-white">{p.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-[#1a367e]/60 bg-[#1a367e]/15 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white">Benefits & support</h3>
            <ul className="mt-5 space-y-3 text-sm text-zinc-300">
              {perks.map((perk) => (
                <li key={perk} className="flex gap-2">
                  <span className="text-red-500" aria-hidden>
                    /
                  </span>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </KhaosMarketingShell>
  )
}
