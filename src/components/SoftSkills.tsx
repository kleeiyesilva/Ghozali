import Section from "./Section";
import { softSkills, type SoftSkill } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

function SoftSkillCard({ skill, index }: { skill: SoftSkill; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal group relative overflow-hidden rounded-2xl border border-line bg-panel/40 p-6 transition-all duration-300 hover:border-accent/30 hover:bg-panel ${
        inView ? "reveal-visible" : ""
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className="pointer-events-none absolute -right-2 -top-4 font-display text-6xl font-bold color: color-mix(in oklab, var(--color-paper) /* #1a1816 */ 4%, transparent); transition-colors color: color-mix(in oklab, var(--color-accent) /* #ff5a36 */ 8%, transparent);">
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className="relative font-display text-lg font-semibold text-paper">{skill.name}</p>
      <p className="relative mt-2 font-body text-sm leading-relaxed text-paper-dim">
        {skill.description}
      </p>
    </div>
  );
}

export default function SoftSkills() {
  return (
    <Section id="soft-skill" index="03" label="Kemampuan personal" title="Soft skill">
      <div className="grid gap-5 sm:grid-cols-2">
        {softSkills.map((s, i) => (
          <SoftSkillCard key={s.name} skill={s} index={i} />
        ))}
      </div>
    </Section>
  );
}