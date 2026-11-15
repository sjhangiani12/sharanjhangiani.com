import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { cacheLife } from "next/cache";

export const GITHUB_USER = "sjhangiani12";
export const SITE_REPO = `https://github.com/${GITHUB_USER}/sharanjhangiani.com`;
/** Sol 0: the day of the first public repository. */
export const SOL_ZERO = "2017-08-30";

const DIRECTORY = path.join(process.cwd(), "content", "projects");

export type Status = "active" | "nominal" | "complete" | "archived";

export type Project = {
  slug: string;
  title: string;
  /** The short name for the project. */
  code: string;
  id: string;
  kind: "primary" | "side" | "past";
  status: Status;
  summary: string;
  launched: string;
  ended?: string;
  lastContact?: string;
  role?: string;
  stack: string[];
  /** The name of the GitHub repository, if the project has one. */
  repo?: string;
  site?: string;
  order: number;
  /** The path of the Markdown file in the repository. */
  file: string;
  html: string;
};

const day = (value: unknown) =>
  value instanceof Date ? value.toISOString().slice(0, 10) : value ? String(value) : undefined;

function read(file: string): Project {
  const { data, content } = matter(fs.readFileSync(path.join(DIRECTORY, file), "utf8"));
  return {
    slug: file.replace(/\.md$/, ""),
    title: data.title,
    code: data.code,
    id: data.id,
    kind: data.kind ?? "side",
    status: data.status ?? "nominal",
    summary: data.summary ?? "",
    launched: day(data.launched) ?? "",
    ended: day(data.ended),
    lastContact: day(data.last_contact),
    role: data.role,
    stack: data.stack ?? [],
    repo: data.repo,
    site: data.site,
    order: data.order ?? 999,
    file: `content/projects/${file}`,
    html: marked.parse(content, { async: false }),
  };
}

/** The date of the last push to each repository, from GitHub. It is empty if GitHub does not answer. */
async function lastPushes(): Promise<Record<string, string>> {
  "use cache";
  cacheLife("hours");
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`, {
      headers: { accept: "application/vnd.github+json" },
    });
    if (!response.ok) return {};
    const repos: { name: string; pushed_at: string }[] = await response.json();
    return Object.fromEntries(repos.map((repo) => [repo.name, repo.pushed_at.slice(0, 10)]));
  } catch {
    return {};
  }
}

/** All projects, in list order. Each project is one Markdown file in content/projects. */
export async function getProjects(): Promise<Project[]> {
  "use cache";
  cacheLife("hours");
  const pushes = await lastPushes();
  return fs
    .readdirSync(DIRECTORY)
    .filter((file) => file.endsWith(".md"))
    .map(read)
    .map((project) => {
      const live = project.repo ? pushes[project.repo] : undefined;
      return live && live > (project.lastContact ?? "") ? { ...project, lastContact: live } : project;
    })
    .sort((a, b) => a.order - b.order);
}

export async function getProject(slug: string) {
  return (await getProjects()).find((project) => project.slug === slug);
}
