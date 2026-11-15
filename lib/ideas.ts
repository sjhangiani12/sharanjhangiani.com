import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Idea = { id: string; title: string; status: string; added: string; note: string };

/** The public ideas, from content/ideas.md, in file order. */
export async function getIdeas(): Promise<Idea[]> {
  "use cache";
  const { data } = matter(fs.readFileSync(path.join(process.cwd(), "content", "ideas.md"), "utf8"));
  return (data.ideas ?? []).map((idea: { title: string; status?: string; added?: unknown; note?: string }) => ({
    id: idea.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    title: idea.title,
    status: idea.status ?? "idea",
    added: idea.added instanceof Date ? idea.added.toISOString().slice(0, 10) : String(idea.added ?? ""),
    note: idea.note ?? "",
  }));
}
