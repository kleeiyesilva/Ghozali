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
            className={`reveal panel flex flex-col gap-2 p-5 ${inView ? "reveal-visible" : ""}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
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
