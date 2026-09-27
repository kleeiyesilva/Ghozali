import { ImagePlus } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-24 sm:px-10 md:pl-28 md:pr-16 md:pt-0 lg:pl-36"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.7fr]">
        <div className="mx-auto max-w-2xl md:mx-0">
          <p className="rise-in font-body text-sm uppercase tracking-[0.15em] text-paper-dim">
            {profile.school} · {profile.grade}
          </p>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-paper sm:text-5xl md:text-6xl lg:text-[4rem]">
            Halo, saya {profile.name}
          </h1>
          <span className="draw-underline mt-4 block h-[3px] w-20 bg-accent" />

          <p
            className="rise-in mt-6 max-w-lg font-body text-xl leading-relaxed text-paper-dim"
            style={{ animationDelay: "0.15s" }}
          >
            {profile.tagline}
          </p>

          <p
            className="rise-in mt-4 max-w-md font-body text-base leading-relaxed text-paper-dim"
            style={{ animationDelay: "0.25s" }}
          >
            {profile.intro}
          </p>

          <div className="rise-in mt-9 flex flex-wrap gap-4" style={{ animationDelay: "0.4s" }}>
            <a href="#pengalaman" className="btn-primary">
              Lihat pengalaman saya
            </a>
            <a href="#kontak" className="btn-secondary">
              Hubungi saya
            </a>
          </div>
        </div>

        {/* Foto profil */}
        <div className="rise-in mx-auto w-full max-w-xs" style={{ animationDelay: "0.2s" }}>
          {profile.photo ? (
            <img
              src={profile.photo}
              alt={profile.name}
              className="aspect-[4/5] w-full rounded-3xl border border-line object-cover"
            />
          ) : (
            <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-line bg-panel p-6 text-center">
              <ImagePlus className="text-paper-dim" size={28} />
              <p className="font-body text-xs leading-relaxed text-paper-dim">
                Taruh foto kamu di <code>public/profile.jpg</code>, lalu isi{" "}
                <code>photo: "/profile.jpg"</code> di <code>portfolio.ts</code>.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
