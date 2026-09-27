import { contact, profile } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import ContactForm from "./ContactForm";

const rows = [
  { label: "Telepon", value: contact.phone, href: `tel:${contact.phone.replace(/\s|-/g, "")}` },
  {
    label: "Instagram",
    value: contact.instagram,
    href: `https://instagram.com/${contact.instagram.replace("@", "")}`,
  },
  { label: "LinkedIn", value: contact.linkedin, href: `https://${contact.linkedin}` },
];

export default function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id="kontak"
      className="border-t border-line px-6 py-24 sm:px-10 md:pl-28 md:pr-16 lg:pl-36"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-4xl reveal md:mx-0 ${inView ? "reveal-visible" : ""}`}
      >
        <div className="mb-6 flex items-baseline gap-3">
          <span className="index-num text-sm">08</span>
          <span className="h-px max-w-16 flex-1 bg-line" />
          <span className="font-body text-xs uppercase tracking-[0.15em] text-paper-dim">
            Mari terhubung
          </span>
        </div>
        <h2 className="mb-10 font-display text-4xl font-bold leading-tight tracking-tight text-paper sm:text-5xl">
          Terbuka untuk kolaborasi & peluang baru
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-6 font-body text-sm leading-relaxed text-paper-dim">
              Punya pertanyaan, tawaran kolaborasi, atau mau ngobrol soal salah satu pengalaman
              di atas? Isi form di samping, atau hubungi lewat kontak berikut.
            </p>
            <div className="border-t border-line">
              {rows.map((r) => (
                <a
                  key={r.label}
                  href={r.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-row flex items-center justify-between border-b border-line py-4"
                >
                  <span className="font-body text-xs uppercase tracking-[0.1em] text-paper-dim">
                    {r.label}
                  </span>
                  <span className="flex items-center gap-2 font-body text-sm text-paper">
                    {r.value}
                    <span className="arrow text-accent">→</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>

        <p className="mt-16 font-body text-xs text-paper-dim">
          © {new Date().getFullYear()} {profile.name}. Dibuat dengan React &amp; Vite.
        </p>
      </div>
    </section>
  );
}
