import Link from 'next/link'
import { FileText, ArrowRight } from 'lucide-react'
import { TaskListClient } from '@/components/tasks/task-list-client'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG, getTaskConfig } from '@/lib/site-config'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'
import { KhaosMarketingShell } from '@/components/shared/khaos-marketing-shell'

export async function BrandArticlesHub({ category }: { category?: string }) {
  const posts = await fetchTaskPosts('article', 30)
  const normalizedCategory = category ? normalizeCategory(category) : 'all'
  const taskConfig = getTaskConfig('article')
  const baseUrl = SITE_CONFIG.baseUrl.replace(/\/$/, '')
  const schemaItems = posts.slice(0, 10).map((post, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `${baseUrl}${taskConfig?.route || '/articles'}/${post.slug}`,
    name: post.title,
  }))

  return (
    <KhaosMarketingShell
      eyebrow="Editorial & insights"
      title="Articles built for clarity, speed, and depth"
      description={`Long-form guides, release notes, and field stories from the ${SITE_CONFIG.name} team and partner creators—organized so you can skim fast or read end-to-end without noise.`}
    >
      <SchemaJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: `${taskConfig?.label || 'Articles'} | ${SITE_CONFIG.name}`,
          url: `${baseUrl}${taskConfig?.route || '/articles'}`,
          hasPart: schemaItems,
        }}
      />

      <section className="mb-12 grid gap-8 border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            <FileText className="h-4 w-4 text-red-500" aria-hidden />
            Reading desk
          </div>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Field-tested workflows, transparent roadmaps, and opinionated product craft.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
            Every piece is edited for signal: tight ledes, scannable sections, and actionable takeaways. Use categories to
            jump between platform updates, creator playbooks, and engineering deep dives.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={taskConfig?.route || '/articles'}
              className="inline-flex items-center gap-2 bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
            >
              Refresh feed
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/search"
              className="inline-flex items-center gap-2 border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Open global search
            </Link>
          </div>
        </div>
        <div className="border border-white/10 bg-black/30 p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Filter by topic</p>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Narrow the shelf without losing context—filters apply instantly and preserve layout rhythm.
          </p>
          <form className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center" action={taskConfig?.route || '/articles'}>
            <label className="sr-only" htmlFor="article-category">
              Category
            </label>
            <select
              id="article-category"
              name="category"
              defaultValue={normalizedCategory}
              className="h-11 w-full border border-white/15 bg-[#0a0f1c] px-3 text-sm text-white sm:flex-1"
            >
              <option value="all">All categories</option>
              {CATEGORY_OPTIONS.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="h-11 shrink-0 bg-white px-5 text-sm font-semibold text-[#0a0f1c] transition hover:bg-zinc-200"
            >
              Apply
            </button>
          </form>
        </div>
      </section>

      <section className="rounded-sm border border-white/10 bg-[#e8ecf6] p-6 sm:p-8">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-[#0f172a]">Latest stories</h3>
            <p className="text-sm text-[#475569]">Cards inherit the editorial layout—tap through for full reads.</p>
          </div>
        </div>
        <TaskListClient task="article" initialPosts={posts} category={normalizedCategory} />
      </section>
    </KhaosMarketingShell>
  )
}
