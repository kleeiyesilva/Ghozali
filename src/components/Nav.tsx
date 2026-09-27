import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";

const links = [
  { id: "beranda", label: "Beranda" },
  { id: "visi-misi", label: "Visi & misi" },
  { id: "hard-skill", label: "Hard skill" },
  { id: "soft-skill", label: "Soft skill" },
  { id: "pengalaman", label: "Pengalaman" },
  { id: "karya", label: "Karya" },
  { id: "sertifikat", label: "Sertifikat" },
  { id: "testimoni", label: "Testimoni" },
  { id: "kontak", label: "Kontak" },
];

export default function Nav() {
  const [active, setActive] = useState("beranda");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-line bg-ink px-6 py-4 md:hidden">
        <a href="#beranda" className="font-display text-lg font-bold text-paper">
          {profile.initials}
        </a>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Buka menu navigasi"
          className="flex flex-col gap-1.5 p-2"
        >
          <span className="h-px w-6 bg-paper" />
          <span className="h-px w-6 bg-paper" />
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 top-[57px] z-30 flex flex-col gap-1 bg-ink px-6 py-8 md:hidden">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className={`border-b border-line py-4 font-display text-xl font-semibold ${
                active === l.id ? "text-accent" : "text-paper"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      {/* Desktop left sidebar */}
      <nav
        aria-label="Navigasi utama"
        className="fixed left-0 top-0 z-40 hidden h-full w-24 flex-col justify-between border-r border-line px-4 py-10 md:flex lg:w-28"
      >
        <a href="#beranda" className="font-display text-xl font-bold text-paper">
          {profile.initials}
        </a>
        <ul className="flex flex-col gap-5">
          {links.slice(1).map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="group flex items-center gap-2.5"
                aria-current={active === l.id ? "true" : undefined}
              >
                <span
                  className={`h-px w-3 transition-all duration-300 ${
                    active === l.id ? "w-5 bg-accent" : "bg-line group-hover:bg-paper-dim"
                  }`}
                />
                <span
                  className={`text-[11px] leading-tight transition-colors ${
                    active === l.id ? "text-paper" : "text-paper-dim group-hover:text-paper"
                  }`}
                >
                  {l.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="font-body text-[10px] leading-relaxed text-paper-dim">
          {profile.location}
        </p>
      </nav>
    </>
  );
}
