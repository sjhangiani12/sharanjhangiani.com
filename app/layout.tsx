import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans_Condensed } from "next/font/google";
import Link from "next/link";
import { Clocks } from "@/components/Clocks";
import { SOL_ZERO } from "@/lib/missions";
import "./globals.css";

const mono = IBM_Plex_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500", "600"] });
const label = IBM_Plex_Sans_Condensed({ variable: "--font-label", subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sharanjhangiani.com"),
  title: { default: "Sharan Jhangiani", template: "%s · Sharan Jhangiani" },
  description: "Mission control for the things Sharan Jhangiani builds.",
};

export const viewport: Viewport = { themeColor: "#070a0f" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${mono.variable} ${label.variable}`}>
      <body>
        <header className="bar">
          <Link className="bar-id" href="/">
            <span className="lamp lamp-go" />
            SJ‑MCC <span className="dim">{"//"}</span> Mission Control
          </Link>
          <nav className="bar-nav">
            <Link href="/#missions">Missions</Link>
            <a href="/events">Events</a>
            <Link href="/#comms">Comms</Link>
          </nav>
          <Clocks solZero={SOL_ZERO} />
        </header>
        {children}
        <footer className="foot">
          <span>End of transmission</span>
          <span className="dim">Sharan Jhangiani · New York</span>
        </footer>
      </body>
    </html>
  );
}
