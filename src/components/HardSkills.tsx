import Section from "./Section";
import { hardSkills } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

export default function HardSkills() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Section id="hard-skill" index="02" label="Kemampuan teknis" title="Hard skill">
      <div ref={ref} className="grid gap-5 sm:grid-cols-2">
        {hardSkills.map((s, i) => (
          <div
            key={s.name}
            className="group rounded-2xl border border-line bg-panel/40 p-6 transition-all duration-300 hover:border-accent/30 hover:bg-panel"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <p className="font-display text-base font-semibold text-paper">{s.name}</p>
                <p className="mt-0.5 font-body text-xs text-paper-dim">{s.note}</p>
              </div>
              <span className="index-num shrink-0 text-lg">{s.level}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-line">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent-soft to-accent transition-[width] duration-[1200ms] ease-out"
                style={{
                  width: inView ? `${s.level}%` : "0%",
                  transitionDelay: `${i * 80}ms`,
                }}
                role="progressbar"
                aria-valuenow={s.level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={s.name}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}