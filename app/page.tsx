import Link from "next/link";
import { Clocks } from "@/components/Clocks";
import { getProjects, SOL_ZERO } from "@/lib/projects";

export default async function Home() {
  const projects = (await getProjects()).filter((project) => project.kind !== "past");

  return (
    <main className="page">
      <div className="status-line">
        <Clocks solZero={SOL_ZERO} />
      </div>

      <h1>Sharan Jhangiani</h1>
      <p className="lede">I like building products that make work feel effortless.</p>

      <section className="block inline">
        <p>
          Now: building <Link href="/projects/cura">Cura</Link>, portfolio management on autopilot for early-stage VCs.
        </p>
        <p>
          Before: GTM at <Link href="/projects/yoodli">Yoodli</Link>, ML at{" "}
          <Link href="/projects/productiv">Productiv</Link>, and started{" "}
          <Link href="/projects/dubhacks-next">DubHacks Next</Link>.
        </p>
      </section>

      <section className="block">
        <div className="label">Projects</div>
        <ul className="rows">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link href={`/projects/${project.slug}`}>
                <span className={`mark ${project.status === "active" ? "mark-active" : ""}`} />
                <span className="name">
                  <b>{project.title}</b>
                  <span className="what">{project.summary}</span>
                </span>
                <span className="when">{(project.lastContact ?? project.launched).slice(0, 4) || "now"}</span>
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
          <a href="https://x.com/sharanjhangiani">X</a>
          <a href="https://linkedin.com/in/sharanjhangiani">LinkedIn</a>
        </div>
      </section>
    </main>
  );
}
