import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { experiences, type Experience } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

function ExperienceCard({ item, index }: { item: Experience; index: number }) {
  const { ref, inView } = useInView<HTMLLIElement>();

  return (
    <li ref={ref} className={`reveal ${inView ? "reveal-visible" : ""}`}>
      <Link
        to={`/pengalaman/${item.slug}`}
        className="group flex flex-col gap-4 rounded-2xl border border-line bg-panel/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-panel hover:shadow-lg sm:flex-row sm:items-center sm:justify-between sm:gap-6"
      >
        <div className="flex gap-4 sm:items-baseline">
          <span className="index-num shrink-0 text-sm">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <p className="font-display text-lg font-semibold text-paper sm:text-xl">
              {item.role}
            </p>
            <p className="font-body text-sm text-paper-dim">{item.org}</p>
            <p className="mt-1 max-w-md font-body text-sm leading-relaxed text-paper-dim sm:hidden">
              {item.summary}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6 pl-9 sm:pl-0">
          <p className="hidden max-w-xs font-body text-sm leading-relaxed text-paper-dim sm:block">
            {item.summary}
          </p>
          <span className="whitespace-nowrap font-body text-xs text-paper-dim">
            {item.period}
          </span>
          <ArrowUpRight
            className="shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            size={20}
          />
        </div>
      </Link>
    </li>
  );
}

export default function ExperienceIndex() {
  return (
    <Section
      id="pengalaman"
      index="04"
      label="Jejak kegiatan"
      title="Pengalaman profesional"
    >
      <p className="mb-6 font-body text-sm text-paper-dim">
        Klik salah satu untuk baca ceritanya lebih lengkap.
      </p>
      <ul className="flex flex-col gap-4">
        {experiences.map((e, i) => (
          <ExperienceCard key={e.slug} item={e} index={i} />
        ))}
      </ul>
    </Section>
  );
}