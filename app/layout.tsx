import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Paper Mono, by Paper Design. SIL Open Font License; see app/fonts/paper-mono/OFL.txt.
const mono = localFont({
  variable: "--font-mono",
  src: [
    { path: "./fonts/paper-mono/PaperMono-Regular.woff2", weight: "400" },
    { path: "./fonts/paper-mono/PaperMono-Medium.woff2", weight: "500" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sharanjhangiani.com"),
  title: { default: "Sharan Jhangiani", template: "%s · Sharan Jhangiani" },
  description: "I like building products that make work feel effortless.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfa" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d0f" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={mono.variable}>
      <body>{children}</body>
    </html>
  );
}
