import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getProjects, GITHUB_USER, SITE_REPO } from "@/lib/projects";

export async function generateStaticParams() {
  return (await getProjects()).map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const project = await getProject((await params).slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const project = await getProject((await params).slug);
  if (!project) notFound();

  return (
    <main className="page">
      <div className="status-line">
        <Link href="/">← back</Link>
        <span>{project.status}</span>
        {project.launched && <span className="right">launched {project.launched}</span>}
      </div>

      <h1>{project.title}</h1>
      <p className="lede">{project.summary}</p>

      {/* The Markdown comes from this repository, so the HTML is safe to insert. */}
      <article className="prose" dangerouslySetInnerHTML={{ __html: project.html }} />

      <section className="block">
        <div className="label">Links</div>
        <div className="links">
          {project.site && <a href={project.site}>Live site</a>}
          {project.repo && <a href={`https://github.com/${GITHUB_USER}/${project.repo}`}>Source code</a>}
          <a href={`${SITE_REPO}/blob/master/${project.file}`}>This log as .md</a>
        </div>
      </section>
    </main>
  );
}
