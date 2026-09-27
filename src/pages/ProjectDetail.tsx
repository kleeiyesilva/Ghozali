import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { projects } from "../data/portfolio";

function ImageGallery({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="flex aspect-[16/9] w-full flex-col items-center justify-center gap-2 border border-dashed border-line bg-panel p-6 text-center">
        <p className="max-w-sm font-body text-sm leading-relaxed text-paper-dim">
          Foto/tangkapan layar belum ditambahkan. Taruh file di{" "}
          <code>public/projects/</code> lalu isi nama filenya di <code>portfolio.ts</code>.
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

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (index === -1) {
    return <Navigate to="/" replace />;
  }

  const item = projects[index];
  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <div className="min-h-screen px-6 py-16 sm:px-10 md:px-16 lg:px-24">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/#karya"
          className="inline-flex items-center gap-2 font-body text-sm text-paper-dim transition-colors hover:text-paper"
        >
          ← Kembali ke Karya
        </Link>

        <p className="mt-8 font-body text-sm uppercase tracking-[0.15em] text-paper-dim">
          {item.year}
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl md:text-5xl">
          {item.title}
        </h1>

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
          {item.tags.map((tag) => (
            <li key={tag} className="font-body text-xs text-paper-dim">
              #{tag.toLowerCase().replace(/\s+/g, "")}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <ImageGallery images={item.images} alt={item.title} />
        </div>

        <p className="mt-10 font-display text-xl font-medium leading-relaxed text-paper sm:text-2xl">
          {item.story}
        </p>

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-8 inline-flex w-fit"
          >
            Lihat karya asli →
          </a>
        )}

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          {prev ? (
            <Link
              to={`/karya/${prev.slug}`}
              className="font-body text-sm text-paper-dim transition-colors hover:text-paper"
            >
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={`/karya/${next.slug}`}
              className="font-body text-sm text-paper-dim transition-colors hover:text-paper"
            >
              {next.title} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  );
}
