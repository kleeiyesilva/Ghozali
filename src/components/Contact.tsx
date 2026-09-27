import { Phone, AtSign, Link2, ArrowUpRight } from "lucide-react";
import { contact, profile } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import ContactForm from "./ContactForm";

const rows = [
  {
    label: "Telepon",
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s|-/g, "")}`,
    icon: Phone,
  },
  {
    label: "Instagram",
    value: contact.instagram,
    href: `https://instagram.com/${contact.instagram.replace("@", "")}`,
    icon: AtSign,
  },
  { label: "LinkedIn", value: contact.linkedin, href: `https://${contact.linkedin}`, icon: Link2 },
];

export default function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id="kontak"
      className="relative overflow-hidden border-t border-line px-6 py-24 sm:px-10 md:pl-28 md:pr-16 lg:pl-36"
    >
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-4xl reveal md:mx-0 ${inView ? "reveal-visible" : ""}`}
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
            <span className="index-num text-xs">08</span>
          </span>
          <span className="h-px max-w-16 flex-1 bg-line" />
          <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-paper-dim">
            Mari terhubung
          </span>
        </div>
        <h2 className="mb-10 font-display text-4xl font-bold leading-tight tracking-tight text-paper sm:text-5xl">
          Terbuka untuk kolaborasi & peluang baru
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-6 font-body text-sm leading-relaxed text-paper-dim">
              Punya pertanyaan, tawaran kolaborasi, atau mau ngobrol soal salah satu pengalaman
              di atas? Isi form di samping, atau hubungi lewat kontak berikut.
            </p>
            <div className="flex flex-col gap-3">
              {rows.map((r) => {
                const Icon = r.icon;
                return (
                  <a
                    key={r.label}
                    href={r.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-line bg-panel/40 px-5 py-4 transition-all duration-300 hover:border-accent/30 hover:bg-panel"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10">
                        <Icon className="text-accent" size={16} />
                      </span>
                      <span className="flex flex-col">
                        <span className="font-body text-[11px] uppercase tracking-[0.1em] text-paper-dim">
                          {r.label}
                        </span>
                        <span className="font-body text-sm text-paper">{r.value}</span>
                      </span>
                    </span>
                    <ArrowUpRight
                      className="text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      size={18}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-panel/40 p-6">
            <ContactForm />
          </div>
        </div>

        <p className="mt-16 font-body text-xs text-paper-dim">
          © {new Date().getFullYear()} {profile.name}. Dibuat dengan React &amp; Vite.
        </p>
      </div>
    </section>
  );
}