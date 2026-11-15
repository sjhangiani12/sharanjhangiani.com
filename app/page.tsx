import Link from "next/link";
import { Clocks } from "@/components/Clocks";
import { getMissions, SOL_ZERO } from "@/lib/missions";

export default async function Home() {
  const missions = (await getMissions()).filter((mission) => mission.kind !== "past");

  return (
    <main className="page">
      <div className="status-line">
        <span>sj</span>
        <Clocks solZero={SOL_ZERO} />
      </div>

      <h1>Sharan Jhangiani</h1>
      <p className="lede">I like building products that make work feel effortless.</p>

      <section className="block inline">
        <p>
          Now: building <Link href="/missions/cura">Cura</Link>, portfolio management on autopilot for early-stage VCs.
        </p>
        <p>
          Before: GTM at <Link href="/missions/yoodli">Yoodli</Link>, ML at{" "}
          <Link href="/missions/productiv">Productiv</Link>, and started{" "}
          <Link href="/missions/dubhacks-next">DubHacks Next</Link>.
        </p>
      </section>

      <section className="block">
        <div className="label">Missions</div>
        <ul className="rows">
          {missions.map((mission) => (
            <li key={mission.slug}>
              <Link href={`/missions/${mission.slug}`}>
                <span className={`mark ${mission.status === "active" ? "mark-active" : ""}`} />
                <span className="name">
                  <b>{mission.title}</b>
                  <span className="what">{mission.summary}</span>
                </span>
                <span className="when">{(mission.lastContact ?? mission.launched).slice(0, 4) || "now"}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="block">
        <div className="label">Comms</div>
        <div className="links">
          <a href="mailto:jhangiani.sharan@gmail.com">Email</a>
          <a href="https://github.com/sjhangiani12">GitHub</a>
          <a href="https://twitter.com/sjhangiani12">Twitter</a>
          <a href="https://linkedin.com/in/sharanjhangiani">LinkedIn</a>
          <a href="/events">Events</a>
        </div>
      </section>
    </main>
  );
}
