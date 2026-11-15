"use client";

import { useEffect, useState } from "react";

const nyc = new Intl.DateTimeFormat("en-GB", {
  timeZone: "America/New_York",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

/** The time in New York and the sol: the count of days since `solZero`. */
export function Clocks({ solZero }: { solZero: string }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!now) return <span className="right">&nbsp;</span>;
  const sol = Math.floor((now.getTime() - Date.parse(`${solZero}T00:00:00Z`)) / 86400000);
  return (
    <span className="right" aria-hidden="true">
      sol {sol} · {nyc.format(now)} nyc
    </span>
  );
}
