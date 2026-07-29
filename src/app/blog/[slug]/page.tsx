import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/atoms/Container";
import BackLink from "@/components/molecules/BackLink";
import { blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.tag === post.tag).slice(0, 2);

  return (
    <article className="py-14 sm:py-20">
      <div className={`bg-gradient-to-br ${post.gradient} border-b border-[var(--border)] pb-14 pt-4`}>
        <Container className="max-w-2xl">
          <BackLink href="/blog" label="All posts" />
          <div className="mt-6 flex items-center gap-2 text-xs text-[var(--text-faint)]">
            <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 font-semibold text-[var(--accent)]">
              {post.tag}
            </span>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.read}</span>
          </div>
          <h1 className="mt-4 text-balance text-2xl font-bold text-[var(--text)] sm:text-3xl">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface)] text-xs font-bold text-[var(--text)] ring-1 ring-[var(--border)]">
              {post.authorInitials}
            </span>
            <div>
              <p className="text-sm font-semibold text-[var(--text)]">{post.author}</p>
              <p className="text-xs text-[var(--text-faint)]">{post.authorRole}</p>
            </div>
          </div>
        </Container>
      </div>

      <Container className="max-w-2xl">
        <div className="mt-10 space-y-5">
          {post.content.map((para, i) => (
            <p key={i} className="text-[15px] leading-[1.8] text-[var(--text-muted)]">
              {para}
            </p>
          ))}
        </div>

        {related.length > 0 && (
          <div className="mt-14 border-t border-[var(--border)] pt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              More on {post.tag}
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <a
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="card-surface rounded-2xl border p-5 transition-colors hover:border-[var(--accent)]"
                >
                  <p className="text-sm font-semibold text-[var(--text)]">{r.title}</p>
                  <p className="mt-1.5 text-xs text-[var(--text-faint)]">{r.read}</p>
                </a>
              ))}
            </div>
          </div>
        )}
      </Container>
    </article>
  );
}
