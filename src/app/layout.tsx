import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Carter_One } from 'next/font/google'

import './globals.css'

import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { AuthProvider } from '@/lib/auth-context'
import { buildSiteMetadata } from '@/lib/seo'
import { getFactoryState } from '@/design/factory/get-factory-state'

const carterOne = Carter_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-carter-one',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  return buildSiteMetadata()
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const { recipe, brandPack } = getFactoryState()
  const hasLeftSidebarNav = false

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${carterOne.className} ${brandPack.bodyClassName} ${brandPack.fontClassName} ${brandPack.paletteClassName}${hasLeftSidebarNav ? ' factory-left-nav' : ''}`}
        data-site-shell={recipe.homeLayout}
        data-motion-pack={recipe.motionPack}
        data-nav-layout={hasLeftSidebarNav ? 'sidebar-left' : 'topbar'}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <AuthProvider>
            {children}
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
