import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // The events calendar is one plain HTML file in public/.
  async rewrites() {
    return [{ source: "/events", destination: "/events/index.html" }];
  },
};

export default nextConfig;
