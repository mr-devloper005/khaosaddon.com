'use client'

import { useState } from 'react'
import Image from 'next/image'
import { KhaosMarketingShell } from '@/components/shared/khaos-marketing-shell'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'
import { mockPressAssets, mockPressCoverage } from '@/data/mock-data'

export default function PressPage() {
  const { toast } = useToast()
  const [activeAssetId, setActiveAssetId] = useState<string | null>(null)
  const activeAsset = mockPressAssets.find((asset) => asset.id === activeAssetId)

  return (
    <KhaosMarketingShell
      eyebrow="Press"
      title="Media room & brand standards"
      description="Download approved marks, product captures, and narrative guidelines. For embargoed launches or executive interviews, reach out via the contact page with your deadline and distribution plan."
    >
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-white">Press kit downloads</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Assets ship in lossless formats. Please preserve clear space rules and avoid recoloring the logomark outside of
            the provided palettes.
          </p>
          <div className="mt-8 space-y-4">
            {mockPressAssets.map((asset) => (
              <div
                key={asset.id}
                className="flex flex-col gap-4 border border-white/10 bg-black/30 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-medium text-white">{asset.title}</p>
                  <p className="mt-1 text-sm text-zinc-500">{asset.description}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="border-white/20 bg-white/10 text-zinc-200">
                    {asset.fileType}
                  </Badge>
                  <Button size="sm" variant="outline" className="border-white/25 text-white" onClick={() => setActiveAssetId(asset.id)}>
                    Preview
                  </Button>
                  <Button
                    size="sm"
                    className="bg-red-600 text-white hover:bg-red-500"
                    onClick={() =>
                      toast({
                        title: 'Download started',
                        description: `${asset.title} is downloading.`,
                      })
                    }
                  >
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <div className="border border-[#1a367e]/50 bg-[#1a367e]/20 p-6">
            <h3 className="text-lg font-semibold text-white">Pitch us</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              Include audience size, previous commerce coverage, and whether imagery needs a product walkthrough. We answer
              most requests within two business days.
            </p>
          </div>
          {mockPressCoverage.map((item) => (
            <article
              key={item.id}
              className="border border-white/10 bg-[#070b14] p-6 transition hover:border-red-600/35"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">{item.outlet}</p>
              <p className="mt-3 text-base font-medium text-white">{item.headline}</p>
              <p className="mt-2 text-xs text-zinc-500">{item.date}</p>
            </article>
          ))}
        </section>
      </div>

      <Dialog open={Boolean(activeAsset)} onOpenChange={() => setActiveAssetId(null)}>
        <DialogContent className="max-w-3xl border-white/10 bg-[#0a0f1c] text-white">
          <DialogHeader>
            <DialogTitle>{activeAsset?.title}</DialogTitle>
          </DialogHeader>
          {activeAsset?.previewUrl && (
            <div className="relative aspect-video overflow-hidden border border-white/10 bg-black">
              <Image src={activeAsset.previewUrl} alt={activeAsset.title} fill className="object-cover" />
            </div>
          )}
          <p className="text-sm text-zinc-400">{activeAsset?.description}</p>
          <DialogFooter>
            <Button variant="outline" className="border-white/25 text-white" onClick={() => setActiveAssetId(null)}>
              Close
            </Button>
            <Button
              className="bg-red-600 text-white hover:bg-red-500"
              onClick={() =>
                toast({
                  title: 'Download started',
                  description: `${activeAsset?.title} is downloading.`,
                })
              }
            >
              Download {activeAsset?.fileType}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </KhaosMarketingShell>
  )
}
