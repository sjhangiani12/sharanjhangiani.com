"use client";

import { useEffect, useState } from "react";

const pad = (value: number) => String(value).padStart(2, "0");
const nyc = new Intl.DateTimeFormat("en-GB", {
  timeZone: "America/New_York",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

/** The three clocks in the top bar. Sol is the count of days since `solZero`. */
export function Clocks({ solZero }: { solZero: string }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const utc = now ? `${pad(now.getUTCHours())}:${pad(now.getUTCMinutes())}:${pad(now.getUTCSeconds())}` : "--:--:--";
  const local = now ? nyc.format(now) : "--:--:--";
  const sol = now
    ? String(Math.floor((now.getTime() - Date.parse(`${solZero}T00:00:00Z`)) / 86400000)).padStart(4, "0")
    : "----";

  return (
    <div className="clocks" aria-hidden="true">
      <div className="clock">
        <span className="clock-label">UTC</span>
        <span className="clock-value">{utc}</span>
      </div>
      <div className="clock">
        <span className="clock-label">NYC</span>
        <span className="clock-value">{local}</span>
      </div>
      <div className="clock">
        <span className="clock-label">SOL</span>
        <span className="clock-value amber">{sol}</span>
      </div>
    </div>
  );
}
