import { Quote } from "lucide-react";
import Section from "./Section";
import { testimonials } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Section id="testimoni" index="07" label="Kata mereka" title="Testimoni">
      <div ref={ref} className="grid gap-5 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <blockquote
            key={t.name}
            className={`reveal flex flex-col gap-4 rounded-2xl border border-line bg-panel/40 p-6 ${
              inView ? "reveal-visible" : ""
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <Quote className="text-accent/40" size={22} />
            <p className="font-display text-lg italic leading-relaxed text-paper">{t.quote}</p>
            <footer className="mt-1 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 font-display text-xs font-bold text-accent">
                {initialsOf(t.name)}
              </span>
              <span className="font-body text-sm text-paper-dim">
                <span className="font-semibold text-paper">{t.name}</span> — {t.role}
              </span>
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}