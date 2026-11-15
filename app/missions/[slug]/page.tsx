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
    <main className="deck">
      <Link className="back" href="/#missions">
        ← Mission Control
      </Link>

      <section className="panel mission-head">
        <div className="panel-tag">
          {mission.id} · {mission.kind} mission
        </div>
        <div className="mission-head-row">
          <div className="patch" aria-hidden="true">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="46" />
              <circle cx="50" cy="50" r="38" className="patch-inner" />
              <path d="M12 62Q50 20 88 44" className="patch-orbit" />
              <circle cx="88" cy="44" r="3.5" className="patch-dot" />
            </svg>
            <span>{mission.code}</span>
          </div>
          <div>
            <h1>{mission.title}</h1>
            <p className="lede">{mission.summary}</p>
          </div>
          <div className={`status status-${mission.status}`}>
            <span className="lamp" />
            {mission.status}
          </div>
        </div>
      </section>

      <div className="mission-grid">
        <article className="panel log">
          <div className="panel-tag">Mission log</div>
          {/* The Markdown comes from this repository, so the HTML is safe to insert. */}
          <div className="prose" dangerouslySetInnerHTML={{ __html: mission.html }} />
        </article>

        <aside className="side">
          <section className="panel">
            <div className="panel-tag">Telemetry</div>
            <dl className="readout">
              <dt>Status</dt>
              <dd className={`status-text-${mission.status} upper`}>{mission.status}</dd>
              {mission.launched && (
                <>
                  <dt>Launched</dt>
                  <dd>{mission.launched}</dd>
                </>
              )}
              {mission.ended && (
                <>
                  <dt>Splashdown</dt>
                  <dd>{mission.ended}</dd>
                </>
              )}
              {mission.lastContact && (
                <>
                  <dt>Last contact</dt>
                  <dd>{mission.lastContact}</dd>
                </>
              )}
              {mission.role && (
                <>
                  <dt>Station</dt>
                  <dd>{mission.role}</dd>
                </>
              )}
            </dl>
            {mission.stack.length > 0 && (
              <div className="chips">
                {mission.stack.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            )}
          </section>

          <section className="panel">
            <div className="panel-tag">Uplinks</div>
            <ul className="links">
              {mission.site && (
                <li>
                  <a href={mission.site}>
                    Live site <span>↗</span>
                  </a>
                </li>
              )}
              {mission.repo && (
                <li>
                  <a href={`https://github.com/${GITHUB_USER}/${mission.repo}`}>
                    Source code <span>↗</span>
                  </a>
                </li>
              )}
              <li>
                <a href={`${SITE_REPO}/blob/master/${mission.file}`}>
                  This log as .md <span>↗</span>
                </a>
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </main>
  );
}
