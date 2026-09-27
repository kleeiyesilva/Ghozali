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
      className="relative border-t border-line px-6 py-20 sm:px-10 md:pl-28 md:pr-16 lg:pl-36"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-4xl reveal md:mx-0 ${inView ? "reveal-visible" : ""}`}
      >
        <div className="mb-6 flex items-baseline gap-3">
          <span className="index-num text-sm">{index}</span>
          <span className="h-px flex-1 max-w-16 bg-line" />
          <span className="font-body text-xs uppercase tracking-[0.15em] text-paper-dim">
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
