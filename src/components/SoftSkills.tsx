import Section from "./Section";
import { softSkills, type SoftSkill } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

function SoftSkillRow({ skill, index }: { skill: SoftSkill; index: number }) {
  const { ref, inView } = useInView<HTMLLIElement>();

  return (
    <li ref={ref} className={`reveal grid gap-2 py-6 sm:grid-cols-[2rem_1fr] sm:gap-6 ${inView ? "reveal-visible" : ""}`}>
      <span className="index-num text-sm">{String(index + 1).padStart(2, "0")}</span>
      <div>
        <p className="font-display text-lg font-semibold text-paper">{skill.name}</p>
        <p className="mt-1.5 max-w-lg font-body text-sm leading-relaxed text-paper-dim">
          {skill.description}
        </p>
      </div>
    </li>
  );
}

export default function SoftSkills() {
  return (
    <Section id="soft-skill" index="03" label="Kemampuan personal" title="Soft skill">
      <ul className="divide-y divide-line border-y border-line">
        {softSkills.map((s, i) => (
          <SoftSkillRow key={s.name} skill={s} index={i} />
        ))}
      </ul>
    </Section>
  );
}
