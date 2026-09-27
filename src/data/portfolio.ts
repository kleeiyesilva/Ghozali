// =========================================================================
// Semua isi (teks) website ada di file ini. Ganti sesuai data kamu sendiri —
// komponen di folder src/components tidak perlu diubah sama sekali.
// =========================================================================

export const profile = {
  name: "Muhammad Ghozali Firdaus",
  initials: "MGF",
  photo: "/experience/Foto.jpg",
  tagline: "Siswa yang tertarik pada manajemen ekonomi, marketing, dan administrasi",
  school: "SMAS Al - Amanah Tangerang",
  grade: "Kelas XII",
  location: "Tangerang, Indonesia",
  intro:
    "Merintis usaha kecil sendiri, aktif di kepanitiaan sekolah, dan belajar marketing & administrasi lewat pengalaman langsung.",
};

export const visionMission = {
  vision:
    "Menjadi pribadi yang mampu mengelola usaha dan mengambil keputusan ekonomi dengan bijak, sekaligus peduli terhadap orang di sekitarnya.",
  missions: [
    "Mendalami dasar-dasar manajemen, pemasaran, dan administrasi melalui pengalaman nyata, bukan sekadar teori di kelas.",
    "Melatih jiwa wirausaha lewat usaha mandiri dan kerja sama dengan berbagai pihak.",
    "Aktif berorganisasi dan berkolaborasi dalam kepanitiaan untuk melatih tanggung jawab dan kerja tim.",
    "Menjaga keseimbangan antara akademik, kegiatan usaha, dan istirahat yang cukup.",
  ],
};

export type HardSkill = { name: string; level: number; note: string };
export const hardSkills: HardSkill[] = [
  { name: "Manajemen usaha dasar", level: 75, note: "Perencanaan, pencatatan keuangan sederhana" },
  { name: "Pemasaran (marketing)", level: 70, note: "Promosi produk, komunikasi ke pelanggan" },
  { name: "Administrasi", level: 72, note: "Pengelolaan data & dokumen kegiatan" },
  { name: "Microsoft Excel & Google Sheets", level: 88, note: "Rumus, pivot table" },
  { name: "Public speaking terstruktur", level: 70, note: "Presentasi & debat" },
  { name: "Desain visual (Figma)", level: 82, note: "Poster, UI sederhana" },
  { name: "Bahasa Inggris", level: 75, note: "Percakapan & tulisan" },
  { name: "Bahasa Spanyol (dasar)", level: 30, note: "Perkenalan, menanyakan kabar" },
  { name: "Bahasa Jepang (dasar)", level: 25, note: "Perkenalan dasar" },
];

export type SoftSkill = { name: string; description: string };
export const softSkills: SoftSkill[] = [
  {
    name: "Kepemimpinan kolaboratif",
    description: "Terbiasa memimpin tanpa mengambil alih — memberi ruang setiap anggota tim untuk berkontribusi.",
  },
  {
    name: "Manajemen waktu",
    description: "Menyeimbangkan akademik, organisasi, dan kompetisi dengan perencanaan mingguan yang konsisten.",
  },
  {
    name: "Adaptasi & rasa ingin tahu",
    description: "Cepat menyesuaikan diri pada topik atau lingkungan baru, dan senang bertanya lebih dalam.",
  },
  {
    name: "Komunikasi empatik",
    description: "Mendengarkan dulu sebelum menanggapi, terutama saat menyelesaikan konflik dalam kelompok.",
  },
];

export type JourneyStep = { year: string; title: string; description: string };
export const journey: JourneyStep[] = [
  {
    year: "2023",
    title: "Awal ketertarikan pada data",
    description:
      "Mengikuti kelas coding dasar di luar sekolah dan menyadari bahwa angka bisa bercerita jika disusun dengan benar.",
  },
  {
    year: "2024",
    title: "Masuk organisasi sekolah",
    description:
      "Bergabung dengan OSIS sebagai staf divisi Riset & Data, mulai belajar menyusun laporan kegiatan berbasis survei.",
  },
  {
    year: "2024",
    title: "Kompetisi pertama",
    description:
      "Mengikuti Olimpiade Sains Kebumian tingkat kota dan lolos ke seleksi provinsi — pengalaman pertama berkompetisi serius.",
  },
  {
    year: "2025",
    title: "Proyek mandiri",
    description:
      "Membangun dasbor sederhana untuk memvisualisasikan data kehadiran ekstrakurikuler sekolah bersama dua teman satu tim.",
  },
  {
    year: "2026",
    title: "Fokus saat ini",
    description:
      "Mempersiapkan portofolio untuk pendaftaran jalur prestasi ke perguruan tinggi, sambil tetap aktif membimbing adik kelas.",
  },
];

export type Experience = {
  slug: string;
  role: string;
  subtitle?: string;
  org: string;
  period: string;
  summary: string;
  story: string;
  bullets: { label: string; text: string }[];
  images: string[];
  days?: { label: string; text: string; images: string[] }[];
};
export const experiences: Experience[] = [
   {
    slug: "entrepreneur-2021-2024",
    role: "Entrepreneur",
    subtitle: "Usaha F&B untuk Mendanai Ekspedisi Sekolah",
    org: "Program Kewirausahaan Sekolah",
    period: "2021 — 2024",
    summary: "Menjalankan usaha F&B bermodal dari sekolah untuk mendanai ekspedisi ke Jawa Barat, Jawa Tengah, hingga Malaysia & Thailand.",
    story:
      "Sekolah kasih modal ke kami, dan kami sendiri yang menentukan mau jualan makanan dan minuman apa. Keuntungan dari jualan disetor lagi ke sekolah, dan dipakai buat mendanai ekspedisi kami sendiri. Ini bukan usaha pribadi biasa — ini perjalanan tiga fase yang dimulai dari kelas 7, dan setiap fase punya cerita perjuangannya masing-masing.",
    bullets: [
      { label: "Peran", text: "Menjalankan usaha F&B bermodal sekolah, dari menentukan produk sampai berjualan langsung." },
      { label: "Operasional", text: "Mengelola penjualan, target omzet, dan penyetoran keuntungan ke sekolah untuk didanakan ke ekspedisi." },
      { label: "Pengembangan Diri", text: "Melatih pengambilan keputusan, konsistensi, dan tanggung jawab finansial dalam tim." },
    ],
    images: [],
    days: [
      {
        label: "Kelas 7 — Modal awal & Ekspedisi Jawa Barat",
        text: "Semua ini dimulai waktu saya masih kelas 7. Sekolah kasih modal ke kami, dan kami sendiri yang menentukan mau jualan makanan dan minuman apa. Uang hasil jualan nantinya disetor lagi ke sekolah, dan keuntungannya dipakai buat mendanai ekspedisi kami keliling Jawa Barat. Waktu itu masih era COVID, jadi jualan nggak semudah kelihatannya — tapi kami terus mencoba dan berusaha mengumpulkan uang sedikit demi sedikit. Alhamdulillah berhasil, dan kami akhirnya bisa keliling sambil belajar langsung di Jawa Barat.",
        images: [],
      },
      {
        label: "Kelas 8 — Ekspedisi Jawa Tengah",
        text: "Di kelas 8, kami coba lagi — kali ini targetnya mengumpulkan dana buat ekspedisi ke Jawa Tengah. Berkat pengalaman sebelumnya, jualan kali ini terasa lebih gampang, pendapatan juga mulai lebih lancar. Kami berhasil berangkat ke Jawa Tengah dengan uang hasil usaha sendiri.",
        images: [],
      },
      {
        label: "Fase lanjutan — Danai ekspedisi ke Malaysia & Thailand",
        text: "Fase berikutnya jauh lebih melelahkan. Kami jualan sampai di luar jam sekolah, bahkan di hari libur, mengejar target omzet Rp150.000 per hari. Karena masih terasa berat, kami memutuskan menambah sumber penghasilan lain dari usaha F&B ini juga. Usaha keras itu akhirnya terbayar — kami berhasil mengumpulkan cukup uang untuk terbang ke Thailand dan Malaysia. Dari pengalaman ini, kami selalu berhasil mewujudkan mimpi untuk berusaha sendiri dan memakai hasilnya untuk cita-cita yang sudah lama kami kejar.",
        images: [],
      },
    ],
  },
 
     {
    slug: "ekspedisi-malaysia-thailand-2023",
    role: "Peserta Ekspedisi",
    subtitle: "Entrepreneurship Education Journey 2023 — Malaysia & Thailand",
    org: "Ekspedisi Luar Negeri",
    period: "26 — 29 November 2023",
    summary: "Ekspedisi kelas 9 ke Malaysia dan Thailand, didanai dari hasil usaha F&B yang harus kejar target Rp150.000 per hari.",
    story:
      "Ekspedisi kali ini nggak gampang. Buat nutupin kekurangan dana, saya dan tim harus kejar target jualan F&B Rp150.000 sehari selama tiga sampai empat bulan. Awalnya kami sempat menargetkan Vietnam, tapi akhirnya memutuskan buka rute baru untuk ekspedisi kelas 9 ini: Malaysia dan Thailand, dengan tajuk \"Entrepreneurship Education Journey — Be Different The Positive Way\".",
    bullets: [
      { label: "Eksplorasi Budaya", text: "Mengunjungi landmark budaya dan religi di Melaka, Negeri Sembilan, dan Hat Yai." },
      { label: "Interaksi Lintas Negara", text: "Bertemu dan berinteraksi dengan siswa serta masyarakat lokal di Malaysia dan Thailand." },
      { label: "Pengembangan Diri", text: "Melatih kegigihan lewat kerja keras menggalang dana, serta adaptasi dan wawasan global selama perjalanan." },
    ],
    images: [],
    days: [
      {
        label: "Menggalang dana — kejar target Rp150.000 sehari",
        text: "Selama tiga sampai empat bulan, kami berjuang dengan segala cara buat kejar target jualan F&B Rp150.000 per hari, demi menutup kekurangan dana ekspedisi ini. Nggak gampang, apalagi setelah kami memutuskan ganti tujuan dari rencana awal ke Vietnam, menjadi Malaysia dan Thailand — rute yang belum pernah dicoba angkatan sebelumnya untuk ekspedisi kelas 9. Alhamdulillah, kerja keras itu terbayar dan kami berhasil mengumpulkan dana yang dibutuhkan.",
        images: [],
      },
      {
        label: "Berangkat & Melaka",
        text: "Perjalanan dimulai dari bandara, berangkat bareng rombongan sekolah menuju Malaysia. Sampai di Melaka, kami keliling Red Square yang ikonik dengan bangunan-bangunan tua peninggalan Belanda, mampir ke reruntuhan Gereja St. Paul dengan batu nisan kuno peninggalan VOC, dan masuk ke museum sejarah yang menampilkan patung lilin delegasi pedagang dari berbagai negara — termasuk kisah Hang Tuah dan Hang Jebat, dua tokoh legendaris dalam sejarah Melayu.",
        images: [
          "/experience/malaysia-thailand-leg2-01.jpg",
          "/experience/malaysia-thailand-leg2-02.jpg",
          "/experience/malaysia-thailand-leg2-03.jpg",
          "/experience/malaysia-thailand-leg2-04.jpg",
        ],
      },
      {
        label: "Negeri Sembilan — Masjid Terapung & kunjungan sekolah",
        text: "Lanjut ke Negeri Sembilan, kami mampir ke sebuah masjid terapung yang arsitekturnya cantik banget, apalagi pas dilihat waktu matahari mulai terbenam. Kami juga sempat menghadiri pertemuan formal dengan pihak sekolah setempat, sekaligus berinteraksi langsung dengan siswa-siswa dari sekolah Islam di sana — pengalaman yang bikin kami belajar banyak soal sistem pendidikan di Malaysia.",
        images: [
          "/experience/malaysia-thailand-leg3-01.jpg",
          "/experience/malaysia-thailand-leg3-02.jpg",
          "/experience/malaysia-thailand-leg3-03.jpg",
        ],
      },
      {
        label: "Thailand — Hat Yai & Songkhla",
        text: "Dari Malaysia, kami lanjut ke Thailand, ke kawasan Hat Yai. Kami mampir ke Chang Puak Camp buat naik gajah, lalu ke Masjid Al-Hidayah dan menikmati pemandangan kota dari ketinggian. Kebetulan kami berada di daerah yang mayoritas penduduknya muslim, jadi sempat mampir juga ke Masjid Besar Songkhla yang megah dan Kantor Komite Islam Songkhla. Sebelum benar-benar pulang, kami mampir lagi sebentar ke Malaysia buat beli oleh-oleh, terutama coklat.",
        images: [
          "/experience/malaysia-thailand-leg4-01.jpg",
          "/experience/malaysia-thailand-leg4-02.jpg",
          "/experience/malaysia-thailand-leg4-03.jpg",
          "/experience/malaysia-thailand-leg4-04.jpg",
          "/experience/malaysia-thailand-leg4-05.jpg",
          "/experience/malaysia-thailand-leg4-06.jpg",
        ],
      },
    ],
  },
 
 



  {
    slug: "leadership-2025",
    role: "Panitia",
    subtitle: "Pelatihan Kepemimpinan Sekolah",
    org: "Leadership SMPS Al-Amanah",
    period: "2025",
    summary: "Membantu koordinasi acara pelatihan kepemimpinan sekolah.",
    story:
      "Saya jadi bagian dari tim panitia yang menyiapkan kegiatan pelatihan kepemimpinan untuk siswa SMPS Al-Amanah. Tugas saya ada di sisi koordinasi acara \u2014 memastikan rundown berjalan sesuai jadwal \u2014 dan mendampingi peserta selama kegiatan berlangsung. Dari sini saya belajar bahwa kepemimpinan yang baik itu sering kali soal kerja tim di balik layar, bukan cuma yang tampil di depan.",
    bullets: [
      { label: "Koordinasi Acara", text: "Membantu perencanaan dan pelaksanaan kegiatan pelatihan kepemimpinan sekolah." },
      { label: "Pendampingan Peserta", text: "Mendampingi peserta selama rangkaian acara berlangsung." },
      { label: "Pengembangan Diri", text: "Melatih kerja tim dan tanggung jawab dalam kepanitiaan." },
    ],
    images: [],
  },
  {
    slug: "panitia-english-camp-2025",
    role: "Panitia",
    subtitle: "English Camp",
    org: "English Camp Sekolah",
    period: "2025",
    summary: "Membantu menjalankan kegiatan English Camp untuk siswa.",
    story:
      "Saya ikut jadi panitia English Camp \u2014 kegiatan intensif berbahasa Inggris di luar kelas biasa. Peran saya membantu jalannya rangkaian aktivitas, dari games berbahasa Inggris sampai sesi latihan percakapan santai antar peserta. Kegiatan ini juga jadi kesempatan buat saya sendiri melatih kepercayaan diri berbahasa Inggris di depan banyak orang.",
    bullets: [
      { label: "Pelaksanaan Acara", text: "Membantu menjalankan rangkaian aktivitas English Camp dari awal sampai akhir." },
      { label: "Fasilitasi Peserta", text: "Mendampingi peserta dalam sesi permainan dan latihan percakapan bahasa Inggris." },
      { label: "Pengembangan Diri", text: "Melatih kepercayaan diri berbahasa Inggris dan kemampuan fasilitasi kegiatan." },
    ],
    images: [],
  },
  {
    slug: "manasik-haji-2025",
    role: "Panitia Kerja Sama Sekolah",
    subtitle: "Event Manasik Haji",
    org: "SDIS Al-Amanah",
    period: "2025",
    summary: "Kolaborasi dengan pihak sekolah menjalankan event manasik haji untuk siswa SD.",
        story:
      "Awalnya saya dan tim sama sekali belum tahu akan dilibatkan di bagian apa. Sampai akhirnya yayasan punya satu ide: menempatkan kami sebagai tim yang menghandel snack untuk event manasik haji. Kabar itu datang tiba-tiba, dan jujur cukup mengejutkan — bukan cuma karena ini pengalaman pertama saya terjun langsung di sebuah event, tapi karena skalanya jauh lebih besar dari apa pun yang pernah saya kerjakan sebelumnya.",
    bullets: [
      { label: "Kolaborasi", text: "Bekerja sama dengan pihak sekolah menjalankan event manasik haji untuk siswa SD." },
      { label: "Persiapan Teknis", text: "Membantu persiapan perlengkapan dan pelaksanaan acara di lapangan." },
      { label: "Pengembangan Diri", text: "Melatih koordinasi acara dan kerja sama lintas tim." },
    ],
    images: [],
    days: [
      {
        label: "Hari 1 — Tugas dari yayasan & belanja ke Tanah Abang",
        text: "Sehari setelah kabar itu turun, kami langsung bergerak ke Stasiun Tangerang, ditemani Pak Adji Dharmo sebagai guru pendamping. Tujuannya jelas: berburu pernak-pernik dan bingkisan yang nuansanya mirip oleh-oleh umroh, karena memang begitu konsepnya — mengajak anak-anak SD merasakan sedikit gambaran ibadah haji di Tanah Suci, lewat simulasi yang dibuat sehidup mungkin. Keberangkatan sempat molor dari rencana, tapi akhirnya kami tiba juga di Tanah Abang. Di sana kami berkeliling mencari kurma, kismis, dan air zam-zam lengkap dengan botolnya, sementara urusan packaging sudah kami pesan lebih dulu secara online supaya tidak keteteran. Coklat juga sekalian kami borong di pasar yang sama. Sebelum pulang, kami sempatkan jalan sebentar sambil mencari tempat makan, menutup hari yang cukup melelahkan tapi memuaskan.",
        images: [
          "/experience/Manasik haji 4.jpeg",
          "/experience/Manasik haji 2.jpeg",
          "/experience/Manasik haji 6.jpeg",
        ],
      },
      {
        label: "Hari 2 — Packaging & belanja tambahan",
        text: "Keesokan harinya, seluruh barang yang sudah dibeli langsung kami kemas satu per satu. Tapi begitu dihitung ulang, ternyata jumlahnya masih kurang sedikit dari yang diminta yayasan. Tanpa banyak drama, kami putuskan balik lagi ke Tanah Abang untuk menutup kekurangan itu. Dan alhamdulillah, akhirnya semua permintaan berhasil terpenuhi tepat waktu.",
        images: [
          "/experience/manasik haji 1.jpeg",
          "/experience/Manasik haji 3.jpeg",
          "/experience/Manasik haji 5.jpeg",
          "/experience/Manasik haji 7.jpeg",
        ],
      },
      {
        label: "Hari 3 — Hari pelaksanaan event",
        text: "Di hari event manasik haji berlangsung, selain ikut memastikan acara berjalan lancar, kami juga membuka lapak kecil menjual snack yang sudah kami siapkan dari dua hari sebelumnya — hasil kerja keras yang akhirnya membuahkan sedikit pundi-pundi tambahan di penghujung acara.",
        images: [

        ],
      },
    ],
 
  },
   
  {
    slug: "ekspedisi-jepang-2025",
    role: "Peserta Ekspedisi",
    subtitle: "Kansai e no Hajimete no Tabi — Singapura & Jepang",
    org: "Sekolah Al-Amanah",
    period: "Oktober 2025",
    summary: "Ikut program ekspedisi \"Menapaki Inovasi di Negeri Sakura\" ke Singapura dan Jepang bersama 5 teman dan 3 pendamping.",
    story:
      "Berangkat dari Bandara Soekarno-Hatta pagi hari bersama lima teman dan tiga pendamping, saya ikut program ekspedisi sekolah “Kansai e no Hajimete no Tabi — Menapaki Inovasi di Negeri Sakura” ke Singapura dan Jepang. Perjalanan ini penuh kejutan sejak hari pertama — mulai dari drama di imigrasi Singapura sampai momen-momen paling berkesan menjelajah kawasan Kansai, Jepang.",
    bullets: [
      { label: "Eksplorasi Budaya", text: "Mengunjungi landmark budaya dan religi di Singapura serta kawasan Kansai (Kobe, Kyoto, Nara, Osaka), Jepang." },
      { label: "Kunjungan Edukatif", text: "Belajar langsung dari kunjungan ke Kyoto University, museum seni, dan observation deck Umeda Sky Building." },
      { label: "Pengembangan Diri", text: "Melatih kesabaran, adaptasi lintas negara, dan kerja sama tim selama perjalanan panjang." },
    ],
    images: [],
        days: [
      {
        label: "Hari 1 — Berangkat & transit Singapura",
        text: "Pagi itu saya berangkat dari Bandara Soekarno-Hatta bareng lima teman dan tiga pendamping, masih setengah ngantuk tapi udah excited banget karena ini ekspedisi luar negeri yang udah lama ditunggu. Begitu mendarat di Singapura, semua rasa excited itu langsung berubah jadi bingung — saya dicegat dan ditahan di imigrasi tanpa penjelasan yang jelas kenapa. Berjam-jam nunggu tanpa tahu apa yang terjadi itu jujur bikin panik dan capek secara mental, apalagi lihat teman-teman dan pendamping juga sama-sama bingung. Baru sore hari akhirnya saya dilepas juga. Karena udah kadung capek dan Singapura memang cuma transit doang, kami mutusin buat nggak buang-buang waktu dan jalan-jalan sebentar sebelum balik ke bandara. Hal kecil yang paling nempel di ingatan justru air kerannya — ternyata bisa langsung diminum, sesuatu yang jarang banget bisa dilakuin di Indonesia. Kami juga sempat makan nasi goreng dan keliling Merlion Park, ngeliat patung ikonik itu dari dekat sambil foto-foto. Nggak jauh dari situ, kami mampir ke sebuah masjid yang ternyata diizinkan khusus oleh pemerintah Singapura untuk mengumandangkan azan — hal yang bikin saya sadar betapa berartinya kebebasan beribadah itu. Sebelum balik, sempat juga beli beberapa cemilan dan pernak-pernik kecil buat oleh-oleh. Malamnya kami balik ke bandara dan tidur di sana karena penerbangan berikutnya baru besok pagi.",
        images: [
          "/experience/ekspedisi-jepang-hari1-01.jpg",
          "/experience/Foto-Jepang-kedatangan3.jpg",
           "/experience/ekspedisi-jepang-hari6-04.jpg",
          "/experience/ekspedisi-jepang-hari6-05.jpg",
        ],
      },
      {
        label: "Hari 2 — Perjalanan ke Kansai & tiba di Jepang",
        text: "Dibangunkan pagi-pagi buta di bandara, badan masih pegal karena tidur nggak nyenyak semalam, tapi semangat langsung naik lagi begitu inget tujuan berikutnya adalah Jepang. Setelah lewat proses imigrasi yang untungnya jauh lebih lancar dari yang di Singapura, kami lanjut penerbangan ke Kansai Airport yang makan waktu cukup lama juga. Begitu mendarat, hal pertama yang saya sadari adalah betapa rapi dan bersihnya bandara ini. Saya ditemani salah satu pendamping laki-laki, Pak Said, buat beli kartu akses kereta yang katanya bisa dipakai ke mana aja selama di Jepang. Setelah urusan itu selesai, kami langsung menuju penginapan buat istirahat, sambil ngebayangin serunya hari-hari berikutnya yang bakal dihabiskan keliling Kobe, Kyoto, Nara, sampai Osaka.",
        images: [
          "/experience/Foto-Jepang-kedatangan2.jpg",
          "/experience/Foto-Jepang-kedatangan1.jpg",
          
        ],
      },
      {
        label: "Hari 3 — Kobe",
        text: "Hari ini kami mulai dengan mengunjungi Kobe. Kami mampir ke Masjid Kobe yang arsitekturnya khas banget dengan dua menara kembarnya, lalu jalan-jalan santai di sekitar kawasan pelabuhan sambil menikmati suasana kotanya. Salah satu momen serunya adalah foto bareng di depan tanda ikonik “BE KOBE” di tepi pelabuhan — spot foto yang emang jadi favorit wisatawan di sana.",
        images: [
          "/experience/ekspedisi-jepang-hari3-01.jpg",
          "/experience/ekspedisi-jepang-hari3-02.jpg",
          "/experience/ekspedisi-jepang-hari3-03.jpg",
        ],
      },
      {
        label: "Hari 4 — Arashiyama Bamboo Grove & Kyoto University",
        text: "Dari Kobe kami lanjut ke Arashiyama Bamboo Grove. Begitu masuk ke jalan setapaknya, saya langsung kagum sama pohon-pohon bambu yang tinggi menjulang di kanan-kiri jalan — suasananya adem dan tenang meskipun ramai pengunjung. Di tengah keramaian itu kami sempat berhenti buat makan ramen halal, rasanya jadi lebih spesial karena dinikmati di tengah suasana yang begitu khas Jepang. Setelah puas di Arashiyama, kami lanjut ke Kyoto University. Ini kunjungan pertama saya ke sana, dan momen itu jadi salah satu yang paling berkesan di seluruh perjalanan — cuacanya bagus banget, langit cerah dan udaranya sejuk. Ngelihat gedung-gedung kampusnya yang megah, termasuk menara jam ikoniknya, bikin saya mikir soal masa depan dan cita-cita pendidikan sendiri.",
        images: [
          "/experience/ekspedisi-jepang-hari4-01.jpg",
          "/experience/ekspedisi-jepang-hari4-04.jpg",
          "/experience/ekspedisi-jepang-hari4-05.jpg",
          "/experience/ekspedisi-jepang-hari2-01.jpg",
          "/experience/ekspedisi-jepang-hari5-03.jpg ",
          "/experience/ekspedisi-jepang-hari6-01.jpg",
          "/experience/ekspedisi-jepang-hari6-02.jpg",
          "/experience/ekspedisi-jepang-hari6-03.jpg",
        ],
      },
      {
        label: "Hari 5 — Nara & malam di Dotonbori",
        text: "Hari ini kami habiskan di Nara, salah satu kota yang paling saya tunggu-tunggu karena udah sering dengar soal rusa-rusanya yang berkeliaran bebas. Sebelum ke situ, kami mampir dulu ke tempat mainan tradisional di kawasan Nara — semacam museum kecil yang isinya mainan-mainan khas Jepang zaman dulu, sempat coba mainin salah satu permainan papan tradisionalnya juga, unik banget cara kerjanya yang serba manual tapi kreatif. Setelah itu baru kami jalan-jalan keliling Nara Park. Rusa-rusanya beneran jalan bebas di antara pengunjung, beberapa bahkan mendekat sendiri kalau lihat ada makanan. Malam harinya, kami mampir ke kawasan Dotonbori di Osaka — jalanan yang penuh lampu neon dan papan reklame raksasa, ramai banget sama wisatawan. Di sana kami makan ramen halal lagi sambil menikmati suasana malam kota yang hidup banget.",
        images: [
          "/experience/ekspedisi-jepang-hari5-01.jpg",
          "/experience/ekspedisi-jepang-hari4-06.jpg",
          "/experience/ekspedisi-jepang-hari5-02.jpg",
          "/experience/ekspedisi-jepang-hari5-04.jpg",
          "/experience/ekspedisi-jepang-hari5-05.jpg",
          "/experience/ekspedisi-jepang-hari5-06.jpg",
        ],
      },
      {
        label: "Hari 6 — Hari terakhir di Osaka",
        text: "Hari terakhir ini jadi salah satu yang paling padat sekaligus paling berkesan. Kami mulai dengan naik ke puncak Umeda Sky Building — dari atas, seluruh kota Osaka kelihatan terbentang luas, sungai dan gedung-gedungnya terlihat kecil dari ketinggian itu. Setelah puas menikmati pemandangan, kami lanjut ke Koji Kinutani Tenku Art Museum, tempat yang bikin saya takjub karena karya seni 3D-nya kelihatan begitu nyata. Sebelum ke Osaka Castle, kami sempat berkeliling kawasan bisnis kota sambil foto-foto. Sampai di Osaka Castle, salah satu momen paling seru hari itu adalah naik kapal kecil menyusuri area bawah kastilnya — merasakan sensasi mengelilingi tembok-tembok kastil dari sudut pandang air. Karena ini hari terakhir, kami berkeliling dan foto-foto sepuasnya di depan kastilnya yang megah. Sebelum benar-benar menutup perjalanan, kami mampir ke Masjid Istiqlal Osaka — suasananya nyaman dan tenang banget, jadi tempat yang pas buat merenung sejenak sebelum perjalanan panjang pulang ke Indonesia.",
        images: [
          "/experience/ekspedisi-jepang-hari6-06.jpg",
          "/experience/ekspedisi-jepang-hari6-07.jpg",
          "/experience/ekspedisi-jepang-hari6-08.jpg",
          "/experience/ekspedisi-jepang-hari6-09.jpg",
          "/experience/ekspedisi-jepang-hari4-02.jpg",
          "/experience/ekspedisi-jepang-hari4-03.jpg",
          "/experience/ekspedisi-jepang-hari4-07.jpg",
          "/experience/ekspedisi-jepang-hari2-02.jpg",
          "/experience/ekspedisi-jepang-hari1-03.jpg",
          "/experience/ekspedisi-jepang-hari1-02.jpg",
        ],
      },
    ],
 
  },
 
  {
    slug: "homestay-babakan-solokan-2025",
    role: "Panitia Homestay",
    subtitle: "Desa Babakan Solokan",
    org: "Program Homestay",
    period: "2025",
    summary: "Menjadi panitia program homestay di Desa Babakan Solokan.",
    story:
      "Waktu itu kami lagi asyik ngobrolin soal ekspedisi, eh tiba-tiba yayasan minta kami bantu handle kepanitiaan program homestay untuk anak-anak SD di Desa Babakan Solokan — desa yang dipilih supaya anak-anak bisa merasakan langsung tinggal di lingkungan yang asri dan hidup bersama keluarga warga setempat.",
    bullets: [
      { label: "Koordinasi Lapangan", text: "Membantu koordinasi penempatan peserta ke rumah-rumah warga desa." },
      { label: "Kerja Sama Masyarakat", text: "Menjalin komunikasi dengan warga desa selama program berlangsung." },
      { label: "Pengembangan Diri", text: "Melatih kepekaan sosial dan kemampuan koordinasi lapangan." },
    ],
    images: [],
    days: [
      {
        label: "Hari 1 — Tugas mendadak & perjalanan ke Bandung",
        text: "Kami berlima langsung diminta terjun ke lapangan, meski perannya sederhana — menyiapkan dan menuntun anak-anak layaknya seorang pemandu. Perjalanan dari Tangerang ke Bandung lumayan panjang dan cukup jauh, tapi justru di situlah saya menikmati setiap kilometernya, ngobrol santai sama tim sambil ngebayangin serunya kegiatan yang bakal dijalanin.",
        images: [
          "/experience/Kampung Baksol 1.jpg",
          "/experience/Kampung Baksol 2.jpeg",
          "/experience/Kampung Baksol 3.jpg",
          "/experience/Kampung Baksol 4.jpg",
        ],
      },
      {
        label: "Hari 2 — Tiba di desa & mendampingi anak-anak",
        text: "Sampai di lokasi, medannya cukup ekstrem karena desanya berada di perbukitan — tapi itu justru yang bikin pengalamannya terasa lebih hidup. Anak-anak yang awalnya masih canggung, pelan-pelan mulai bisa beradaptasi dan membiasakan diri dengan lingkungan baru. Selama di sana kami juga sempat kenal dengan orang-orang hebat, terutama para sesepuh desa yang banyak mengajarkan hal baru ke kami. Tugas kami sederhana tapi penting: menjaga dan memberikan yang terbaik untuk anak-anak selama program berlangsung.",
        images: [
          "/experience/Kampung Baksol 5.jpeg",
          "/experience/Kampung Baksol 6.jpg",
          "/experience/Kampung Baksol 7.jpeg",
          "/experience/Kampung baksol.jpg",
        ],
      },
    ],
  },
  {
    slug: "magang-programmer-kecil-2026",
    role: "Magang Marketing & Administrasi",
    subtitle: "Program Belajar Programmer Kecil",
    org: "Programmer Kecil, Semarang Tembalang",
    period: "2026 (4 bulan)",
    summary: "Membantu promosi program dan mengelola data pendaftaran peserta selama 4 bulan.",
    story:
      "Selama empat bulan, saya magang di Programmer Kecil, Semarang Tembalang, membantu dari dua sisi sekaligus: marketing dan administrasi. Di sisi marketing, saya bantu mempromosikan program ke calon peserta baru. Di sisi administrasi, saya mengelola data pendaftaran dan dokumen peserta supaya semuanya rapi dan gampang ditelusuri. Pengalaman ini yang paling langsung menghubungkan saya dengan dunia kerja nyata di bidang marketing dan administrasi.",
    bullets: [
      { label: "Marketing", text: "Membantu promosi program ke calon peserta baru." },
      { label: "Administrasi", text: "Mengelola data pendaftaran dan dokumen peserta program." },
      { label: "Pengembangan Diri", text: "Melatih komunikasi profesional dan ketelitian administratif." },
    ],
    images: [],
  },
];



export type Project = {
  slug: string;
  title: string;
  description: string;
  story: string;
  year: string;
  tags: string[];
  link?: string;
  images: string[];
};
export const projects: Project[] = [
  {
    slug: "dasbor-kehadiran-ekstrakurikuler",
    title: "Dasbor Kehadiran Ekstrakurikuler",
    description:
      "Dasbor interaktif untuk memantau tingkat kehadiran 12 ekstrakurikuler sekolah per bulan, dipakai pembina OSIS untuk evaluasi program.",
    story:
      "Bareng dua teman satu tim, saya bikin dasbor sederhana buat bantu pembina OSIS memantau kehadiran 12 ekstrakurikuler tiap bulan. Sebelumnya data kehadiran cuma dicatat manual di kertas dan susah dibaca polanya. Kami kumpulkan datanya, olah pakai spreadsheet, terus divisualisasikan biar gampang dibaca sekali lihat — pembina jadi bisa langsung tahu ekskul mana yang butuh perhatian lebih.",
    year: "2025",
    tags: ["Python", "Data Visualisasi", "Google Sheets API"],
    link: "https://github.com/",
    images: [],
  },
  {
    slug: "poster-kampanye-hemat-energi",
    title: "Poster Kampanye Hemat Energi",
    description:
      "Rangkaian poster digital untuk kampanye hemat energi tingkat sekolah, dipasang di mading dan akun Instagram OSIS.",
    story:
      "Saya diminta bikin rangkaian poster buat kampanye hemat energi di sekolah. Tantangannya bikin pesan yang penting tapi sering diabaikan ini jadi menarik dilihat anak-anak sekolah — jadi saya pakai visual yang simpel dan warna yang eye-catching. Posternya dipasang di mading dan disebar lewat akun Instagram OSIS, responnya cukup bagus dari siswa lain.",
    year: "2025",
    tags: ["Desain Grafis", "Figma", "Kampanye Sosial"],
    images: [],
  },
  {
    slug: "kalkulator-nilai-rapor",
    title: "Kalkulator Nilai Rapor Sederhana",
    description:
      "Aplikasi web kecil untuk menghitung rata-rata nilai per semester berdasarkan bobot mata pelajaran, dipakai teman sekelas.",
    story:
      "Ini proyek iseng yang berujung kepakai beneran. Saya sering lihat teman sekelas bingung ngitung estimasi nilai rapor manual, jadi saya bikin kalkulator kecil berbasis web yang tinggal masukin nilai tiap mapel dan bobotnya, langsung keluar rata-ratanya. Simpel, tapi ternyata banyak yang pakai pas mendekati pembagian rapor.",
    year: "2024",
    tags: ["HTML/CSS", "JavaScript"],
    link: "https://github.com/",
    images: [],
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
};
// CONTOH/PLACEHOLDER — ganti dengan sertifikat asli kamu
export const certificates: Certificate[] = [
  {
    title: "Sertifikat Pelatihan Kepemimpinan",
    issuer: "Leadership SMPS Al-Amanah",
    year: "2024",
  },
  {
    title: "Sertifikat Program Belajar",
    issuer: "Programmer Kecil, Semarang Tembalang",
    year: "2026",
  },
  {
    title: "Piagam Kepanitiaan",
    issuer: "SDIS Al-Amanah",
    year: "2025",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};
// CONTOH/PLACEHOLDER — ganti dengan testimoni asli dari guru/rekan/mitra kerja kamu
export const testimonials: Testimonial[] = [
  {
    quote:
      "Ghozali punya inisiatif tinggi dan konsisten menjalankan tanggung jawabnya di setiap kegiatan yang dia ikuti.",
    name: "Nama Pembina",
    role: "Pembina Kegiatan Leadership",
  },
  {
    quote:
      "Komunikasinya jelas dan gampang diajak kerja sama, terutama soal koordinasi jadwal dan administrasi.",
    name: "Nama Mitra Kerja",
    role: "Mitra Kerja Sama Sekolah",
  },
];

export const contact = {
  email: "muhammadghozalifirdaus2008@gmail.com",
  phone: "+62 812-3456-7890",
  instagram: "@ghonzales7i",
  linkedin: "linkedin.com/in/muhammad-ghozali-firdaus-9048073a4",
};
 