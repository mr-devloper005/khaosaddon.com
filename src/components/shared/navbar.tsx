'use client'

import { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X, User, FileText, Building2, LayoutGrid, Tag, Image as ImageIcon, Sparkles, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { siteContent } from '@/config/site.content'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { NAVBAR_OVERRIDE_ENABLED, NavbarOverride } from '@/overrides/navbar'

const NavbarAuthControls = dynamic(() => import('@/components/shared/navbar-auth-controls').then((mod) => mod.NavbarAuthControls), {
  ssr: false,
  loading: () => null,
})

const taskIcons: Record<TaskKey, any> = {
  article: FileText,
  listing: Building2,
  sbm: LayoutGrid,
  classified: Tag,
  image: ImageIcon,
  profile: User,
  social: LayoutGrid,
  pdf: FileText,
  org: Building2,
  comment: FileText,
}

const variantClasses = {
  'compact-bar': {
    shell: 'border-b border-[#d7deef] bg-[#f8f9fe]/95 text-[#1f2a52] backdrop-blur-xl',
    logo: 'rounded-2xl border border-[#d7deef] bg-white',
    active: 'bg-[#1f2a52] text-white',
    idle: 'text-[#4b5888] hover:bg-[#eef2fb] hover:text-[#1f2a52]',
    cta: 'rounded-full bg-[#cd1f6f] text-white hover:bg-[#aa175c]',
    mobile: 'border-t border-[#d7deef] bg-[#f8f9fe]',
  },
  'editorial-bar': {
    shell: 'border-b border-[#d7c4b3] bg-[#fff7ee]/90 text-[#2f1d16] backdrop-blur-xl',
    logo: 'rounded-full border border-[#dbc6b6] bg-white shadow-sm',
    active: 'bg-[#2f1d16] text-[#fff4e4]',
    idle: 'text-[#72594a] hover:bg-[#f2e5d4] hover:text-[#2f1d16]',
    cta: 'rounded-full bg-[#2f1d16] text-[#fff4e4] hover:bg-[#452920]',
    mobile: 'border-t border-[#dbc6b6] bg-[#fff7ee]',
  },
  'floating-bar': {
    shell: 'border-b border-transparent bg-transparent text-white',
    logo: 'rounded-[1.35rem] border border-white/12 bg-white/8 shadow-[0_16px_48px_rgba(15,23,42,0.22)] backdrop-blur',
    active: 'bg-[#8df0c8] text-[#07111f]',
    idle: 'text-slate-200 hover:bg-white/10 hover:text-white',
    cta: 'rounded-full bg-[#8df0c8] text-[#07111f] hover:bg-[#77dfb8]',
    mobile: 'border-t border-white/10 bg-[#09101d]/96',
  },
  'utility-bar': {
    shell: 'border-b border-[#d7deca] bg-[#f4f6ef]/94 text-[#1f2617] backdrop-blur-xl',
    logo: 'rounded-xl border border-[#d7deca] bg-white shadow-sm',
    active: 'bg-[#1f2617] text-[#edf5dc]',
    idle: 'text-[#56604b] hover:bg-[#e7edd9] hover:text-[#1f2617]',
    cta: 'rounded-lg bg-[#1f2617] text-[#edf5dc] hover:bg-[#2f3a24]',
    mobile: 'border-t border-[#d7deca] bg-[#f4f6ef]',
  },
} as const

const directoryPalette = {
  'directory-clean': {
    shell: 'border-b border-white/20 bg-[linear-gradient(120deg,#15306f_0%,#224aa5_56%,#c71d6c_100%)] text-white shadow-[0_1px_0_rgba(17,27,58,0.35)] backdrop-blur-xl',
    logo: 'rounded-2xl border border-white/22 bg-white/12',
    active: 'bg-white text-[#1f2a52]',
    idle: 'text-[#dce5ff] hover:bg-white/14 hover:text-white',
    cta: 'bg-white text-[#1f2a52] hover:bg-[#e9eeff]',
    search: 'border border-white/25 bg-white/12 text-[#dce5ff]',
    mobile: 'border-t border-white/20 bg-[#1d3d8a]',
  },
  'market-utility': {
    shell: 'border-b border-[#d7deca] bg-[#f4f6ef]/96 text-[#1f2617] shadow-[0_1px_0_rgba(64,76,34,0.06)] backdrop-blur-xl',
    logo: 'rounded-xl border border-[#d7deca] bg-white',
    active: 'bg-[#1f2617] text-[#edf5dc]',
    idle: 'text-[#56604b] hover:bg-[#e7edd9] hover:text-[#1f2617]',
    cta: 'bg-[#1f2617] text-[#edf5dc] hover:bg-[#2f3a24]',
    search: 'border border-[#d7deca] bg-white text-[#56604b]',
    mobile: 'border-t border-[#d7deca] bg-[#f4f6ef]',
  },
} as const

export function Navbar() {
  if (NAVBAR_OVERRIDE_ENABLED) {
    return <NavbarOverride />
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()
  const { recipe } = getFactoryState()

  const navigation = useMemo(() => {
    const articleOnly = SITE_CONFIG.tasks.filter((task) => task.enabled && task.key === 'article')
    return articleOnly.length ? articleOnly : SITE_CONFIG.tasks.filter((task) => task.enabled && task.key !== 'profile')
  }, [])
  const primaryNavigation = navigation.slice(0, 6)
  const mobileNavigation = navigation.map((task) => ({
    name: task.label,
    href: task.route,
    icon: taskIcons[task.key] || LayoutGrid,
  }))

  const primaryTask =
    SITE_CONFIG.tasks.find((task) => task.enabled && task.key === 'article') ||
    SITE_CONFIG.tasks.find((task) => task.key === recipe.primaryTask && task.enabled) ||
    primaryNavigation[0]
  const isDirectoryProduct = recipe.homeLayout === 'listing-home' || recipe.homeLayout === 'classified-home'
  const createHref = isAuthenticated ? '/create/article' : '/login?next=/create/article'

  const style = isDirectoryProduct
    ? directoryPalette[(recipe.brandPack === 'market-utility' ? 'market-utility' : 'directory-clean') as keyof typeof directoryPalette]
    : variantClasses[recipe.navbar]

  return (
    <header data-mobile-nav="true" className={cn('sticky top-0 z-50 w-full', style.shell)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <Link href="/" className="flex min-w-0 items-center gap-3">
              <div className={cn('flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden p-1.5', style.logo)}>
                <img src="/favicon.png?v=20260413" alt={`${SITE_CONFIG.name} logo`} width="48" height="48" className="h-full w-full object-contain" />
              </div>
              <div className="min-w-0">
                <span className="block truncate text-lg font-semibold">{SITE_CONFIG.name}</span>
                <span className="block truncate text-[10px] uppercase tracking-[0.22em] opacity-75">{siteContent.navbar.tagline}</span>
              </div>
            </Link>
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <form action="/search" className={cn('hidden xl:flex items-center gap-2 rounded-full px-2 py-1.5 text-sm', style.search)}>
              <Search className="ml-2 h-4 w-4" />
              <input
                name="q"
                placeholder="Search articles"
                className="h-8 w-48 bg-transparent text-sm outline-none placeholder:text-current/70"
              />
              <Button type="submit" size="sm" className="h-8 rounded-full bg-white/90 px-3 text-[#1f2a52] hover:bg-white">
                Search
              </Button>
            </form>

            {!isAuthenticated ? (
              <>
                <Button variant="ghost" size="sm" asChild className="rounded-full px-4">
                  <Link href="/login">Sign In</Link>
                </Button>
              </>
            ) : (
              <NavbarAuthControls />
            )}
          </div>

          <Button variant="ghost" size="icon" className="rounded-full lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <div className="hidden pb-4 lg:block">
          <div className="grid gap-3 xl:grid-cols-[1.2fr_0.8fr]">
            <nav className="flex flex-wrap items-center gap-2 rounded-2xl border border-current/15 bg-white/10 p-2 backdrop-blur-md">
              {primaryNavigation.map((task) => {
                const isActive = pathname.startsWith(task.route)
                const Icon = taskIcons[task.key] || LayoutGrid
                return (
                  <Link
                    key={task.key}
                    href={task.route}
                    className={cn('inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-colors', isActive ? style.active : style.idle)}
                  >
                    <Icon className="h-4 w-4" />
                    {task.label}
                  </Link>
                )
              })}
              <Link href="/about" className={cn('inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-colors', pathname === '/about' ? style.active : style.idle)}>
                About
              </Link>
              {!primaryNavigation.some((item) => item.route === '/articles') ? (
                <Link href="/articles" className={cn('inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-colors', pathname.startsWith('/articles') ? style.active : style.idle)}>
                  Articles
                </Link>
              ) : null}
              <Link href="/contact" className={cn('inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-colors', pathname === '/contact' ? style.active : style.idle)}>
                Contact
              </Link>
              <Link href={createHref} className={cn('inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-colors', pathname.startsWith('/create') ? style.active : style.idle)}>
                <Plus className="h-4 w-4" />
                Create
              </Link>
            </nav>

            <div className="rounded-2xl border border-current/15 bg-white/10 px-4 py-3 backdrop-blur-md">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] opacity-75">Featured lane</p>
              <div className="mt-1 flex items-center justify-between gap-3">
                <div>
                  <p className="text-base font-semibold">{primaryTask?.label || 'Explore'}</p>
                  <p className="text-xs opacity-80">{primaryTask?.description || 'Browse long-form articles and editorials.'}</p>
                </div>
                <Link href={primaryTask?.route || '/'} className="inline-flex items-center gap-1 rounded-full border border-current/25 px-3 py-1.5 text-xs font-semibold">
                  <Sparkles className="h-3.5 w-3.5" />
                  Open
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={cn('lg:hidden', style.mobile)}>
          <div className="space-y-2 px-4 py-4">
            <form action="/search" className={cn('mb-3 flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-medium', style.search)}>
              <Search className="h-4 w-4" />
              <input name="q" placeholder="Search articles" className="h-8 flex-1 bg-transparent text-sm outline-none placeholder:text-current/70" />
              <Button type="submit" size="sm" className="h-8 rounded-full bg-white/90 px-3 text-[#1f2a52] hover:bg-white">
                Go
              </Button>
            </form>
            <Button size="sm" asChild className={cn('w-full rounded-full', style.cta)}>
              <Link href={createHref}>
                <Plus className="mr-1 h-4 w-4" />
                Create Article
              </Link>
            </Button>
            {mobileNavigation.map((item) => {
              const isActive = pathname.startsWith(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn('flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors', isActive ? style.active : style.idle)}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
