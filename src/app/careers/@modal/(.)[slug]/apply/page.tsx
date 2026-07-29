import { notFound } from "next/navigation";
import { jobs } from "@/data/careers";
import ApplyModal from "@/components/organisms/ApplyModal";

export default async function InterceptedApplyModal({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const job = jobs.find((j) => j.slug === resolvedParams.slug);
  if (!job) notFound();
  return <ApplyModal job={job} />;
}
