import type { Metadata } from "next";
import Link from "next/link";
import { getIdeas } from "@/lib/ideas";

export const metadata: Metadata = { title: "Ideas", description: "Things that I want to build." };

export default async function Ideas() {
  const ideas = await getIdeas();

  return (
    <main className="page">
      <div className="status-line">
        <Link href="/">← back</Link>
        <span className="right">{ideas.length} ideas</span>
      </div>

      <h1>Ideas</h1>
      <p className="lede">Things that I want to build. Most of them are not started.</p>

      <div className="ideas">
        {ideas.map((idea) => (
          <section key={idea.id} id={idea.id} className="idea">
            <div className="label">
              {idea.status} · {idea.added}
            </div>
            <h2>{idea.title}</h2>
            <p>{idea.note}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
