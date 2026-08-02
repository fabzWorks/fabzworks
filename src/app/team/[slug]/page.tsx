import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/atoms/Container";
import BackLink from "@/components/molecules/BackLink";
import TeamMemberContent from "@/components/organisms/TeamMemberContent";
import { team } from "@/data/team";
import { ui } from "@/lib/i18n";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) return {};
  return { title: member.name, description: member.bio.en };
}

// Direct-navigation fallback for the intercepted @modal route above.
// Visiting /team/[slug] directly (refresh, shared link, no-JS) renders
// this full page instead of the modal. See docs/PROJECT_GUIDE.md.
export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <article className="py-14 sm:py-20">
      <Container className="max-w-2xl">
        <BackLink href="/team" label={ui.allTeamMembers} />
        <div className="card-surface mt-6 rounded-3xl border p-7 sm:p-8">
          <TeamMemberContent member={member} />
        </div>
      </Container>
    </article>
  );
}
