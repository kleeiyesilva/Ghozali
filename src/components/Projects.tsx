import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { projects, type Project } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

function ProjectCard({ item, index }: { item: Project; index: number }) {
  const { ref, inView } = useInView<HTMLLIElement>();

  return (
    <li ref={ref} className={`reveal ${inView ? "reveal-visible" : ""}`}>
      <Link
        to={`/karya/${item.slug}`}
        className="group flex flex-col gap-4 rounded-2xl border border-line bg-panel/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-panel hover:shadow-lg sm:flex-row sm:items-center sm:justify-between sm:gap-6"
      >
        <div className="flex gap-4 sm:items-baseline">
          <span className="index-num shrink-0 text-sm">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <p className="font-display text-lg font-semibold text-paper sm:text-xl">
              {item.title}
            </p>
            <p className="mt-1 max-w-md font-body text-sm leading-relaxed text-paper-dim">
              {item.description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6 pl-9 sm:pl-0">
          <span className="whitespace-nowrap font-body text-xs text-paper-dim">{item.year}</span>
          <ArrowUpRight
            className="shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            size={20}
          />
        </div>
      </Link>
    </li>
  );
}

export default function Projects() {
  return (
    <Section id="karya" index="05" label="Yang pernah saya buat" title="Hasil karya">
      <p className="mb-6 font-body text-sm text-paper-dim">
        Klik salah satu untuk baca ceritanya lebih lengkap.
      </p>
      <ul className="flex flex-col gap-4">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} item={p} index={i} />
        ))}
      </ul>
    </Section>
  );
}