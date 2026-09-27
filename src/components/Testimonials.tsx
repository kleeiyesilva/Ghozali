import Section from "./Section";
import { testimonials } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

export default function Testimonials() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Section id="testimoni" index="07" label="Kata mereka" title="Testimoni">
      <div ref={ref} className="grid gap-8 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <blockquote
            key={t.name}
            className={`reveal border-l-2 border-accent pl-6 ${inView ? "reveal-visible" : ""}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <p className="font-display text-lg italic leading-relaxed text-paper">
              “{t.quote}”
            </p>
            <footer className="mt-4 font-body text-sm text-paper-dim">
              <span className="font-semibold text-paper">{t.name}</span> — {t.role}
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
