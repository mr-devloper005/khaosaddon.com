import Link from "next/link";
import { Mail, Phone, Sparkles } from "lucide-react";
import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";
import { ContactLeadForm } from "@/components/shared/contact-lead-form";

const lanes = [
  {
    icon: Mail,
    title: "Editorial support",
    body: "Questions about articles, corrections, publication flow, or submission guidance.",
  },
  {
    icon: Sparkles,
    title: "Partnerships",
    body: "Collaborations, sponsorships, and branded article campaign requests.",
  },
  {
    icon: Phone,
    title: "General help",
    body: "Account, publishing, and platform questions that need a direct response.",
  },
];

export default function ContactPage() {
  return (
    <PageShell
      title="Contact Us"
      description={`Reach the ${SITE_CONFIG.name} editorial team and support desk.`}
      actions={
        <Button variant="outline" asChild>
          <Link href="/articles">Browse Articles</Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          {lanes.map((lane) => (
            <Card key={lane.title} className="border-[#d2daf0] bg-white">
              <CardContent className="p-6">
                <lane.icon className="h-5 w-5 text-[#1f2a52]" />
                <h2 className="mt-3 text-xl font-semibold text-[#1f2a52]">{lane.title}</h2>
                <p className="mt-2 text-sm leading-7 text-[#4f5b85]">{lane.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-[#d2daf0] bg-white">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-[#1f2a52]">Send a message</h2>
            <p className="mt-2 text-sm text-[#4f5b85]">
              Share your request and we will route it to the right team.
            </p>
            <ContactLeadForm />
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
