import { notFound } from "next/navigation";
import { team } from "@/data/team";
import TeamModal from "@/components/organisms/TeamModal";

export default async function InterceptedTeamModal({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const member = team.find((m) => m.slug === resolvedParams.slug);
  if (!member) notFound();
  return <TeamModal member={member} />;
}
