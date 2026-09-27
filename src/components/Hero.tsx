import { ImagePlus, ArrowDown } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Hero() {
  const [firstName, ...restName] = profile.name.split(" ");
  const lastName = restName.join(" ");

  return (
    <section
      id="beranda"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24 sm:px-10 md:pl-28 md:pr-16 md:pt-0 lg:pl-36"
    >
      {/* blob dekoratif */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-10 hidden h-64 w-64 rounded-full bg-accent/5 blur-3xl md:block" />

      {/* nama raksasa transparan di background, khas hero portofolio */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[16rem] font-bold uppercase leading-none text-paper/[0.025] md:block lg:text-[20rem]"
      >
        {lastName || firstName}
      </span>

      <div className="relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.7fr]">
        <div className="mx-auto max-w-2xl md:mx-0">
          <p className="rise-in font-body text-sm uppercase tracking-[0.15em] text-paper-dim">
            {profile.school} · {profile.grade}
          </p>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-paper sm:text-5xl md:text-6xl lg:text-[4rem]">
            Halo, saya {firstName} <span className="text-accent">{lastName}</span>
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
        <div className="rise-in relative mx-auto w-full max-w-xs" style={{ animationDelay: "0.2s" }}>
          {/* blok warna solid di belakang foto, bukan cuma garis outline */}
          <div className="absolute -right-5 -top-5 -z-10 aspect-[4/5] w-full rounded-3xl bg-accent/90 sm:-right-7 sm:-top-7" />

          {profile.photo ? (
            <img
              src={profile.photo}
              alt={profile.name}
              className="photo-tilt aspect-[4/5] w-full rounded-3xl border border-line object-cover shadow-2xl"
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

          {/* badge status */}
          <div className="absolute -bottom-5 left-1/2 flex w-max -translate-x-1/2 items-center gap-2 rounded-full border border-line bg-panel px-4 py-2 shadow-lg">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            <p className="font-body text-xs font-semibold text-paper">Siap berkolaborasi</p>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#visi-misi"
        className="group absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        aria-label="Scroll ke bawah"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.2em] text-paper-dim transition-colors group-hover:text-paper">
          Scroll
        </span>
        <ArrowDown className="animate-bounce text-paper-dim transition-colors group-hover:text-accent" size={16} />
      </a>
    </section>
  );
}