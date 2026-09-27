import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { experiences, type Experience } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

function ImageGallery({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="flex aspect-[16/9] w-full flex-col items-center justify-center gap-2 border border-dashed border-line bg-panel p-6 text-center">
        <p className="max-w-sm font-body text-sm leading-relaxed text-paper-dim">
          Foto belum ditambahkan. Taruh file di <code>public/experience/</code> lalu isi
          nama filenya di <code>portfolio.ts</code>.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="aspect-[16/9] w-full overflow-hidden bg-panel">
        <img src={images[index]} alt={alt} className="h-full w-full object-cover" />
      </div>
      {images.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Lihat foto ${i + 1}`}
              className={`h-[3px] transition-all duration-300 ${
                i === index ? "w-8 bg-accent" : "w-3 bg-line hover:bg-paper-dim"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function FallbackGallery({ images, alt }: { images: string[]; alt: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal mt-10 ${inView ? "reveal-visible" : ""}`}>
      <ImageGallery images={images} alt={alt} />
    </div>
  );
}

type Day = NonNullable<Experience["days"]>[number];

function DaySection({ day, index }: { day: Day; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.08);

  return (
    <div ref={ref} className={`reveal ${inView ? "reveal-visible" : ""}`}>
      <div className="flex items-baseline gap-3">
        <span className="index-num text-sm">{String(index + 1).padStart(2, "0")}</span>
        <span className="h-px flex-1 max-w-10 bg-line" />
        <span className="font-body text-xs uppercase tracking-[0.15em] text-paper-dim">
          {day.label.replace(/^Hari \d+\s*—\s*/, "")}
        </span>
      </div>

      <div className="panel mt-4 p-6">
        <p className="font-display text-base font-semibold text-accent">{day.label}</p>
        <p className="mt-3 font-body text-base leading-relaxed text-paper-dim">{day.text}</p>
      </div>

      {day.images.length > 0 && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {day.images.map((src: string, j: number) => (
            <img
              key={j}
              src={src}
              alt={`${day.label} — foto ${j + 1}`}
              className="aspect-[4/3] w-full border border-line object-cover transition-transform duration-500 hover:scale-[1.02]"
              loading="lazy"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ExperienceDetail() {
  const { slug } = useParams();
  const index = experiences.findIndex((e) => e.slug === slug);
  const { ref: introRef, inView: introInView } = useInView<HTMLDivElement>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (index === -1) {
    return <Navigate to="/" replace />;
  }

  const item = experiences[index];
  const prev = experiences[index - 1];
  const next = experiences[index + 1];

  return (
    <div className="min-h-screen px-6 py-16 sm:px-10 md:px-16 lg:px-24">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/#pengalaman"
          className="inline-flex items-center gap-2 font-body text-sm text-paper-dim transition-colors hover:text-paper"
        >
          ← Kembali ke Pengalaman
        </Link>

        <div ref={introRef} className={`reveal mt-8 ${introInView ? "reveal-visible" : ""}`}>
          <p className="font-body text-sm uppercase tracking-[0.15em] text-paper-dim">
            {item.org} · {item.period}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl md:text-5xl">
            {item.role}
          </h1>
          {item.subtitle && (
            <p className="mt-2 font-display text-lg font-medium text-accent">{item.subtitle}</p>
          )}

          <p className="mt-8 font-display text-xl font-medium leading-relaxed text-paper sm:text-2xl">
            {item.story}
          </p>
        </div>

        {/* Kalau data punya breakdown per hari, tampilkan foto berurutan sambil di-scroll */}
        {item.days && item.days.length > 0 ? (
          <div className="mt-14 space-y-16">
            {item.days.map((day, i) => (
              <DaySection key={i} day={day} index={i} />
            ))}
          </div>
        ) : (
          <FallbackGallery images={item.images} alt={item.role} />
        )}

        <div className="mt-14 border-t border-line pt-8">
          <p className="mb-5 font-body text-xs uppercase tracking-[0.15em] text-paper-dim">
            Peran & tanggung jawab
          </p>
          <ul className="space-y-4">
            {item.bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span className="index-num text-sm">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-body text-sm leading-relaxed text-paper-dim">
                  <strong className="font-semibold text-paper">{b.label}:</strong> {b.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          {prev ? (
            <Link
              to={`/pengalaman/${prev.slug}`}
              className="font-body text-sm text-paper-dim transition-colors hover:text-paper"
            >
              ← {prev.role}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={`/pengalaman/${next.slug}`}
              className="font-body text-sm text-paper-dim transition-colors hover:text-paper"
            >
              {next.role} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  );
}