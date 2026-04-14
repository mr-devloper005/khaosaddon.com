'use client'

import type { ReactNode } from 'react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

type Props = {
  eyebrow?: string
  title: string
  description?: string
  actions?: ReactNode
  children?: ReactNode
}

export function KhaosMarketingShell({ eyebrow, title, description, actions, children }: Props) {
  return (
    <div className="min-h-screen bg-[#030305] text-zinc-100">
      <NavbarShell />
      <main>
        <header className="relative overflow-hidden border-b border-white/10 bg-[linear-gradient(125deg,#050508_0%,#1a367e_42%,#0c1020_100%)]">
          <div
            className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-none bg-[#dc2626]/20 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl space-y-4">
                {eyebrow ? (
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-zinc-400">{eyebrow}</p>
                ) : null}
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h1>
                {description ? (
                  <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">{description}</p>
                ) : null}
              </div>
              {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
            </div>
          </div>
        </header>
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
