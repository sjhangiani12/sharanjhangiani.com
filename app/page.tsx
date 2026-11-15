import Link from "next/link";
import { getMissions } from "@/lib/missions";

export default async function Home() {
  const missions = await getMissions();
  const active = missions.filter((mission) => mission.status === "active");
  const latest = missions.map((mission) => mission.lastContact ?? "").sort().at(-1);

  return (
    <main className="deck">
      <div className="grid-top">
        <section className="panel hero">
          <div className="panel-tag">Console 01 · Flight director</div>
          <h1>Sharan Jhangiani</h1>
          <p className="lede">I like building products that make work feel effortless.</p>
          <dl className="brief">
            <dt>Now</dt>
            <dd>
              Building <Link href="/missions/cura">Cura</Link>, portfolio management on autopilot for early-stage VCs.
            </dd>
            <dt>Before</dt>
            <dd>
              GTM at <Link href="/missions/yoodli">Yoodli</Link>, ML at <Link href="/missions/productiv">Productiv</Link>,
              and started <Link href="/missions/dubhacks-next">DubHacks Next</Link>.
            </dd>
            <dt>Always</dt>
            <dd>Small tools for my home, my Kindle, and my commute. Each one has a log below.</dd>
          </dl>
        </section>

        <section className="panel track">
          <div className="panel-tag">Console 02 · Ground track</div>
          <svg className="track-map" viewBox="0 0 400 200" role="img" aria-label="A decorative ground track display">
            <path
              className="track-grid"
              d="M0 50H400M0 100H400M0 150H400M50 0V200M100 0V200M150 0V200M200 0V200M250 0V200M300 0V200M350 0V200"
            />
            <path className="track-equator" d="M0 100H400" />
            <path className="track-prev" d="M-95 100C-45 20 5 20 55 100S155 180 205 100S305 20 355 100S405 180 455 100" />
            <path className="track-now" d="M0 100C50 20 100 20 150 100S250 180 300 100S350 60 400 30" />
            <circle className="track-site" cx="118" cy="62" r="3" />
            <text className="track-label" x="126" y="58">
              NYC
            </text>
            <g className="track-craft">
              <circle r="9" className="track-halo" />
              <circle r="3.5" />
            </g>
          </svg>
          <dl className="readout readout-row">
            <div>
              <dt>Missions</dt>
              <dd>{missions.length}</dd>
            </div>
            <div>
              <dt>Active</dt>
              <dd className="green">{active.length}</dd>
            </div>
            <div>
              <dt>Last contact</dt>
              <dd>{latest}</dd>
            </div>
          </dl>
        </section>
      </div>

      <section className="panel poll">
        <div className="panel-tag">Console 03 · Go / no-go poll</div>
        <div className="poll-row">
          {missions.map((mission) => (
            <Link
              key={mission.slug}
              className={`poll-cell status-${mission.status}`}
              href={`/missions/${mission.slug}`}
              title={`${mission.title}: ${mission.status}`}
            >
              <span className="lamp" />
              {mission.code}
            </Link>
          ))}
        </div>
      </section>

      <section className="panel board" id="missions">
        <div className="panel-tag">Console 04 · Mission board</div>
        <div className="board-head" aria-hidden="true">
          <span>ID</span>
          <span>Mission</span>
          <span>Class</span>
          <span>Status</span>
          <span>Launched</span>
          <span>Last contact</span>
        </div>
        {missions.map((mission) => (
          <Link key={mission.slug} className="board-row" href={`/missions/${mission.slug}`}>
            <span className="dim">{mission.id}</span>
            <span className="board-name">
              <strong>{mission.title}</strong>
              <em>{mission.summary}</em>
            </span>
            <span className="dim board-class">{mission.kind}</span>
            <span className={`status status-${mission.status}`}>
              <span className="lamp" />
              {mission.status}
            </span>
            <span className="board-date">{mission.launched || "—"}</span>
            <span className="board-date">{mission.lastContact ?? "—"}</span>
          </Link>
        ))}
      </section>

      <section className="panel comms" id="comms">
        <div className="panel-tag">Console 05 · Comms</div>
        <ul className="links links-row">
          <li>
            <a href="mailto:jhangiani.sharan@gmail.com">
              <small>CH 1</small>Email <span>↗</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/sjhangiani12">
              <small>CH 2</small>GitHub <span>↗</span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/sjhangiani12">
              <small>CH 3</small>Twitter <span>↗</span>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/sharanjhangiani">
              <small>CH 4</small>LinkedIn <span>↗</span>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
