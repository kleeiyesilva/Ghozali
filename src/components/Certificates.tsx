import { Award } from "lucide-react";
import Section from "./Section";
import { certificates } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

export default function Certificates() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Section id="sertifikat" index="06" label="Bukti & pengakuan" title="Sertifikat & penghargaan">
      <div ref={ref} className="grid gap-5 sm:grid-cols-2">
        {certificates.map((c, i) => (
          <div
            key={c.title}
            className={`reveal group flex flex-col gap-3 rounded-2xl border border-line bg-panel/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-panel hover:shadow-lg ${
              inView ? "reveal-visible" : ""
            }`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
              <Award className="text-accent" size={18} />
            </span>
            <p className="font-display text-base font-semibold text-paper">{c.title}</p>
            <p className="font-body text-sm text-paper-dim">{c.issuer}</p>
            <div className="mt-1 flex items-center justify-between">
              <span className="font-body text-xs text-paper-dim">{c.year}</span>
              {c.credentialUrl && (
                <a
                  href={c.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-body text-xs font-medium text-accent hover:underline"
                >
                  Lihat sertifikat →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}