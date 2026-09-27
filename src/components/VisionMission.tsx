import { Compass, CheckCircle2 } from "lucide-react";
import Section from "./Section";
import { visionMission } from "../data/portfolio";

export default function VisionMission() {
  return (
    <Section id="visi-misi" index="01" label="Arah belajar" title="Visi & misi">
      <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:gap-12">
        <div className="panel relative flex flex-col gap-4 rounded-3xl p-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10">
            <Compass className="text-accent" size={20} />
          </span>
          <p className="font-display text-2xl font-medium leading-snug text-paper sm:text-[1.75rem]">
            {visionMission.vision}
          </p>
        </div>

        <ul className="flex flex-col gap-3">
          {visionMission.missions.map((m, i) => (
            <li
              key={i}
              className="group flex items-start gap-4 rounded-2xl border border-line bg-panel/40 p-5 transition-all duration-300 hover:border-accent/40 hover:bg-panel"
            >
              <CheckCircle2
                className="mt-0.5 shrink-0 text-accent/50 transition-colors group-hover:text-accent"
                size={20}
              />
              <span className="font-body text-sm leading-relaxed text-paper-dim transition-colors group-hover:text-paper">
                {m}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}