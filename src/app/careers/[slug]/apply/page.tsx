import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/atoms/Container";
import Badge from "@/components/atoms/Badge";
import BackLink from "@/components/molecules/BackLink";
import ApplyForm from "@/components/organisms/ApplyForm";
import { jobs } from "@/data/careers";

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return {};
  return { title: `Apply — ${job.title}` };
}

// Direct-navigation fallback for the intercepted @modal apply route.
export default async function ApplyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) notFound();

  return (
    <section className="py-14 sm:py-20">
      <Container className="max-w-xl">
        <BackLink href={`/careers/${job.slug}`} label="Back to role" />
        <div className="card-surface mt-6 rounded-3xl border p-7 sm:p-8">
          <Badge>{job.department}</Badge>
          <h1 className="mt-3 text-xl font-bold text-[var(--text)]">
            Apply for {job.title}
          </h1>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            {job.location} · {job.type}
          </p>
          <div className="mt-6">
            <ApplyForm job={job} />
          </div>
        </div>
      </Container>
    </section>
  );
}
