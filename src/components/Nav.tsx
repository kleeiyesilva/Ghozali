import { useEffect, useState } from "react";
import {
  Home,
  Compass,
  Wrench,
  Sparkles,
  Briefcase,
  Layers,
  Award,
  MessageSquareQuote,
  Mail,
} from "lucide-react";
import { profile } from "../data/portfolio";

const links = [
  { id: "beranda", label: "Beranda", icon: Home },
  { id: "visi-misi", label: "Visi & misi", icon: Compass },
  { id: "hard-skill", label: "Hard skill", icon: Wrench },
  { id: "soft-skill", label: "Soft skill", icon: Sparkles },
  { id: "pengalaman", label: "Pengalaman", icon: Briefcase },
  { id: "karya", label: "Karya", icon: Layers },
  { id: "sertifikat", label: "Sertifikat", icon: Award },
  { id: "testimoni", label: "Testimoni", icon: MessageSquareQuote },
  { id: "kontak", label: "Kontak", icon: Mail },
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
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-line bg-ink/95 px-6 py-4 backdrop-blur md:hidden">
        <a
          href="#beranda"
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-paper font-display text-sm font-bold text-ink"
        >
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
          {links.map((l) => {
            const Icon = l.icon;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 border-b border-line py-4 font-display text-xl font-semibold ${
                  active === l.id ? "text-accent" : "text-paper"
                }`}
              >
                <Icon size={20} strokeWidth={2} />
                {l.label}
              </a>
            );
          })}
        </div>
      )}

      {/* Desktop left sidebar */}
      <nav
        aria-label="Navigasi utama"
        className="fixed left-0 top-0 z-40 hidden h-full w-24 flex-col justify-between border-r border-line bg-panel/60 px-4 py-8 backdrop-blur-sm md:flex lg:w-28"
      >
        <a
          href="#beranda"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-paper font-display text-sm font-bold text-ink shadow-sm transition-transform hover:scale-105"
        >
          {profile.initials}
        </a>

        <ul className="flex flex-col gap-2">
          {links.slice(1).map((l) => {
            const Icon = l.icon;
            const isActive = active === l.id;
            return (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={isActive ? "true" : undefined}
                  title={l.label}
                  className={`group flex flex-col items-center gap-1.5 rounded-2xl px-2 py-2.5 transition-all duration-300 ${
                    isActive
                      ? "bg-accent shadow-md shadow-accent/30"
                      : "hover:bg-paper/5"
                  }`}
                >
                  <Icon
                    size={17}
                    strokeWidth={2}
                    className={
                      isActive
                        ? "text-white"
                        : "text-paper-dim transition-colors group-hover:text-paper"
                    }
                  />
                  <span
                    className={`text-center text-[9.5px] font-medium leading-tight transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-paper-dim group-hover:text-paper"
                    }`}
                  >
                    {l.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <p className="text-center font-body text-[9px] leading-tight text-paper-dim">
            {profile.location}
          </p>
        </div>
      </nav>
    </>
  );
}