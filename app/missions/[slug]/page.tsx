import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMission, getMissions, GITHUB_USER, SITE_REPO } from "@/lib/missions";

export async function generateStaticParams() {
  return (await getMissions()).map((mission) => ({ slug: mission.slug }));
}

export async function generateMetadata({ params }: PageProps<"/missions/[slug]">): Promise<Metadata> {
  const mission = await getMission((await params).slug);
  return mission ? { title: mission.title, description: mission.summary } : {};
}

export default async function MissionPage({ params }: PageProps<"/missions/[slug]">) {
  const mission = await getMission((await params).slug);
  if (!mission) notFound();

  return (
    <main className="page">
      <div className="status-line">
        <Link href="/">← sj</Link>
        <span>{mission.id}</span>
        <span>{mission.status}</span>
        {mission.launched && <span className="right">launched {mission.launched}</span>}
      </div>

      <h1>{mission.title}</h1>
      <p className="lede">{mission.summary}</p>

      {/* The Markdown comes from this repository, so the HTML is safe to insert. */}
      <article className="prose" dangerouslySetInnerHTML={{ __html: mission.html }} />

      <section className="block">
        <div className="label">Uplinks</div>
        <div className="links">
          {mission.site && <a href={mission.site}>Live site</a>}
          {mission.repo && <a href={`https://github.com/${GITHUB_USER}/${mission.repo}`}>Source code</a>}
          <a href={`${SITE_REPO}/blob/master/${mission.file}`}>This log as .md</a>
        </div>
      </section>
    </main>
  );
}
