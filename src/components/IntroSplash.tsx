import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";

export default function IntroSplash({ onDone }: { onDone: () => void }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLeaving(true), 1500);
    const t2 = setTimeout(onDone, 2100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink transition-opacity duration-700 ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <p className="rise-in font-body text-xs uppercase tracking-[0.3em] text-paper-dim">
        Selamat datang di portofolio
      </p>
      <h1
        className="rise-in mt-3 font-display text-3xl font-bold text-paper sm:text-5xl"
        style={{ animationDelay: "0.15s" }}
      >
        {profile.name}
      </h1>
      <span className="draw-underline mt-4 block h-[3px] w-16 bg-accent" />
    </div>
  );
}
