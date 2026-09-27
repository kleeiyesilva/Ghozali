import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type SectionProps = {
  id: string;
  index: string;
  label: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, index, label, title, children }: SectionProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id={id}
      className="relative overflow-hidden border-t border-line px-6 py-24 sm:px-10 md:pl-28 md:pr-16 lg:pl-36"
    >
      {/* nomor besar dekoratif di background */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 top-6 select-none font-display text-[9rem] font-bold leading-none text-paper/[0.03] sm:text-[12rem]"
      >
        {index}
      </span>

      <div
        ref={ref}
        className={`relative mx-auto max-w-4xl reveal md:mx-0 ${inView ? "reveal-visible" : ""}`}
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
            <span className="index-num text-xs">{index}</span>
          </span>
          <span className="h-px flex-1 max-w-16 bg-line" />
          <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-paper-dim">
            {label}
          </span>
        </div>
        <h2 className="mb-10 font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}