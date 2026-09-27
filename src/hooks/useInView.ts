import { useEffect, useRef, useState } from "react";

/**
 * Mengembalikan `ref` yang harus dipasang ke elemen, dan `inView`
 * yang jadi true saat elemen terlihat di layar, dan balik jadi false
 * lagi begitu elemen keluar dari layar (baik discroll ke atas maupun
 * ke bawah) — jadi animasinya bisa main berulang setiap kali elemen
 * masuk/keluar area yang terlihat.
 */
export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}
