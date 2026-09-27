import Section from "./Section";
import { visionMission } from "../data/portfolio";

export default function VisionMission() {
  return (
    <Section id="visi-misi" index="01" label="Arah belajar" title="Visi & misi">
      <div className="grid gap-10 md:grid-cols-2">
        <p className="border-l-2 border-accent pl-6 font-display text-2xl font-medium leading-snug text-paper sm:text-[1.75rem]">
          {visionMission.vision}
        </p>

        <ol className="flex flex-col divide-y divide-line border-y border-line">
          {visionMission.missions.map((m, i) => (
            <li key={i} className="flex gap-4 py-4">
              <span className="index-num text-sm">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-body text-sm leading-relaxed text-paper-dim">{m}</span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
