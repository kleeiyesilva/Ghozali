import Section from "./Section";
import { hardSkills } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

export default function HardSkills() {
  const { ref, inView } = useInView<HTMLUListElement>();

  return (
    <Section id="hard-skill" index="02" label="Kemampuan teknis" title="Hard skill">
      <ul ref={ref} className="flex flex-col divide-y divide-line border-y border-line">
        {hardSkills.map((s, i) => (
          <li key={s.name} className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="sm:w-64">
              <p className="font-display text-base font-semibold text-paper">{s.name}</p>
              <p className="font-body text-xs text-paper-dim">{s.note}</p>
            </div>
            <div className="flex flex-1 items-center gap-3">
              <div className="h-px flex-1 bg-line">
                <div
                  className="h-px bg-accent transition-[width] duration-[1000ms] ease-out"
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
              <span className="index-num w-10 text-right text-xs">{s.level}%</span>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
