import { Link } from "react-router-dom";
import Section from "./Section";
import { experiences, type Experience } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

function ExperienceRow({ item, index }: { item: Experience; index: number }) {
  const { ref, inView } = useInView<HTMLLIElement>();

  return (
    <li ref={ref} className={`reveal ${inView ? "reveal-visible" : ""}`}>
      <Link
        to={`/pengalaman/${item.slug}`}
        className="link-row group flex flex-col gap-2 border-b border-line py-6 pl-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
      >
        <div className="flex gap-4 sm:items-baseline">
          <span className="index-num text-sm">{String(index + 1).padStart(2, "0")}</span>
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
          <span className="arrow font-display text-lg text-accent">→</span>
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
      <p className="mb-2 font-body text-sm text-paper-dim">
        Klik salah satu untuk baca ceritanya lebih lengkap.
      </p>
      <ul className="border-t border-line">
        {experiences.map((e, i) => (
          <ExperienceRow key={e.slug} item={e} index={i} />
        ))}
      </ul>
    </Section>
  );
}
