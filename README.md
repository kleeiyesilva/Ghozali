# Portofolio SMA — React + Vite + TypeScript

Website portofolio pelajar SMA dengan tema gelap, minimalis, dan bernuansa "buku catatan akademik".

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:5173

## Build untuk produksi

```bash
npm run build
```

Hasil build ada di folder `dist/`, siap di-deploy ke Vercel, Netlify, GitHub Pages, dsb.

## Mengubah isi konten

Semua teks (nama, sekolah, visi misi, hard skill, soft skill, perjalanan, pengalaman, kontak)
ada di **satu file**: `src/data/portfolio.ts`. Edit file itu saja — komponen di
`src/components/` tidak perlu disentuh.

## Struktur

```
src/
  data/portfolio.ts      <- edit konten di sini
  components/
    Nav.tsx               <- navigasi sidebar (desktop) & menu (mobile)
    Hero.tsx               <- section Beranda
    VisionMission.tsx      <- section Visi & Misi
    Skills.tsx              <- section Keahlian (hard skill + soft skill)
    Journey.tsx             <- section Perjalanan (timeline)
    Experience.tsx          <- section Pengalaman Profesional
    Contact.tsx             <- section Kontak
  App.tsx
  index.css               <- warna, font, dan gaya global (Tailwind v4 theme)
```

## Palet warna

| Token | Hex | Pemakaian |
|---|---|---|
| `ink` | `#0B0E13` | latar belakang utama |
| `panel` | `#12161F` | latar sekunder |
| `paper` | `#ECE7DB` | teks utama |
| `paper-dim` | `#8D93A1` | teks sekunder |
| `gold` | `#C9A24B` | aksen utama |
| `teal` | `#5B9C8F` | aksen sekunder (soft skill) |

Font: **Fraunces** (judul, serif) + **IBM Plex Sans** (isi).
"# Ghozali" 
