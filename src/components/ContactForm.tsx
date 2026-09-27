import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

// GANTI dengan endpoint Formspree kamu sendiri.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/GANTI_DENGAN_ID_FORMSPREE_KAMU";

type Status = "idle" | "sending" | "success" | "error";

function fireConfetti() {
  const colors = ["#ff5a36", "#e04322", "#1a1816", "#faf7f2"];
  const count = 26;

  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    el.className = "confetti-piece";
    el.style.backgroundColor = colors[i % colors.length];

    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
    const distance = 70 + Math.random() * 70;
    el.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    el.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);

    document.body.appendChild(el);
    setTimeout(() => el.remove(), 900);
  }
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        fireConfetti();
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 py-8 text-center">
        <p className="font-display text-lg font-semibold text-paper">Pesan terkirim!</p>
        <p className="font-body text-sm text-paper-dim">
          Terima kasih sudah menghubungi, saya akan balas secepatnya.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block font-body text-xs uppercase tracking-[0.1em] text-paper-dim">
          Nama
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-xl border border-line bg-ink px-4 py-3 font-body text-sm text-paper outline-none transition-colors focus:border-accent"
          placeholder="Nama kamu"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block font-body text-xs uppercase tracking-[0.1em] text-paper-dim">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-line bg-ink px-4 py-3 font-body text-sm text-paper outline-none transition-colors focus:border-accent"
          placeholder="email@kamu.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block font-body text-xs uppercase tracking-[0.1em] text-paper-dim">
          Pesan
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full resize-none rounded-xl border border-line bg-ink px-4 py-3 font-body text-sm text-paper outline-none transition-colors focus:border-accent"
          placeholder="Tulis pesan kamu di sini..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary mt-1 w-fit disabled:opacity-60"
      >
        {status === "sending" ? "Mengirim..." : "Kirim pesan"}
        <Send size={15} />
      </button>

      {status === "error" && (
        <p className="font-body text-sm text-accent">
          Gagal mengirim. Pastikan endpoint Formspree sudah diisi dengan benar, lalu coba lagi.
        </p>
      )}
    </form>
  );
}