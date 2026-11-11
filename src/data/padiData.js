import blbImg from "../assets/blb.webp";
import brownSpotImg from "../assets/brownspot.jpg";
import leafBlastImg from "../assets/blast.jpg";
import healthyImg from "../assets/healthy.jpg";

export const FEATURES_DATA = [
  {
    id: 1,
    title: "Deteksi Tercepat",
    desc: "Proses pemindaian citra daun padi berlangsung secara instan dalam hitungan milidetik setelah foto diunggah.",
    iconName: "Zap"
  },
  {
    id: 2,
    title: "Akurasi Tinggi",
    desc: "Didukung model kecerdasan buatan yang terlatih mengenali pola bercak penyakit daun dengan tingkat ketepatan tinggi.",
    iconName: "CheckCircle2"
  },
  {
    id: 3,
    title: "Responsif di Semua Perangkat",
    desc: "Tampilan ringan dan otomatis menyesuaikan ukuran layar ponsel pintar petani di sawah maupun layar laptop.",
    iconName: "Smartphone"
  },
  {
    id: 4,
    title: "Mudah Digunakan",
    desc: "Antarmuka dirancang sederhana tanpa istilah rumit sehingga dapat langsung digunakan oleh petani dan penyuluh.",
    iconName: "Sparkles"
  },
  {
    id: 5,
    title: "Klasifikasi 4 Kelas",
    desc: "Mampu membedakan Hawar Daun Bakteri, Bercak Cokelat, Blas Daun, serta kondisi Daun Padi Sehat secara objektif.",
    iconName: "Layers"
  },
  {
    id: 6,
    title: "Rekomendasi Penanganan",
    desc: "Menyajikan langkah pengendalian OPT yang tepat sasaran meliputi bahan aktif, sanitasi, dan pemupukan berimbang.",
    iconName: "ShieldCheck"
  }
];

export const DISEASES_DATA = [
  {
    id: "Bacterial_Leaf_Blight",
    name: "Hawar Daun Bakteri (BLB)",
    shortTag: "BLB / Kresek",
    latin: "Xanthomonas oryzae pv. oryzae",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    accentColor: "border-amber-500",
    image: blbImg,
    symptoms: "Lesi garis basah keabu-abuan pada tepi atau ujung helai daun yang meluas membujur menjadi kuning pucat hingga mengering.",
    causes: "Infeksi bakteri melalui luka gesekan daun atau pori air (hidatoda), terutama saat curah hujan tinggi dan pemupukan Nitrogen berlebih.",
    treatment: [
      "Aplikasi bakterisida berbahan aktif tembaga hidroksida atau seng tiazol.",
      "Pengaturan pengairan berselang (intermittent irrigation) agar lahan tidak tergenang terus-menerus.",
      "Pengurangan dosis pupuk Nitrogen berlebih serta penambahan unsur Kalium."
    ]
  },
  {
    id: "Brown_Spot",
    name: "Bercak Cokelat (Brown Spot)",
    shortTag: "Brown Spot",
    latin: "Bipolaris oryzae",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
    accentColor: "border-orange-500",
    image: brownSpotImg,
    symptoms: "Bercak-bercak kecil berbentuk oval menyerupai biji wijen dengan bagian tengah cokelat tua dan dikelilingi cincin kuning (yellow halo).",
    causes: "Infeksi jamur patogen yang berkembang pesat pada tanah sawah yang kekurangan unsur hara Kalium (K) dan Silika (Si).",
    treatment: [
      "Aplikasi fungisida berbahan aktif difenokonazol atau karbendazim.",
      "Perbaikan sanitasi lingkungan dan kelancaran drainase petak sawah.",
      "Pemupukan berimbang dengan penambahan unsur Kalium (K) dan Silika (Si)."
    ]
  },
  {
    id: "Leaf_Blast",
    name: "Blas Daun (Leaf Blast)",
    shortTag: "Leaf Blast",
    latin: "Pyricularia oryzae",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
    accentColor: "border-rose-500",
    image: leafBlastImg,
    symptoms: "Bercak spesifik berbentuk belah ketupat (meruncing di kedua ujung) dengan bagian pusat berwarna abu-abu keputihan dan tepi cokelat tua.",
    causes: "Spora jamur yang terbawa angin dan menginfeksi daun pada kondisi kelembapan udara tinggi serta jarak tanam yang terlalu rapat.",
    treatment: [
      "Aplikasi fungisida sistemik berbahan aktif trisiklazol, azoksistrobin, atau isoprotiolan.",
      "Sanitasi jerami sisa panen yang terinfeksi agar tidak menjadi sumber inokulum.",
      "Penerapan sistem tanam jajar legowo untuk memperbaiki sirkulasi udara antar-rumpun."
    ]
  },
  {
    id: "Healthy",
    name: "Daun Padi Sehat (Healthy)",
    shortTag: "Sehat",
    latin: "Oryza sativa L.",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    accentColor: "border-emerald-500",
    image: healthyImg,
    symptoms: "Helaian daun tampak hijau segar merata dari pangkal hingga ujung, permukaan daun utuh, dan bebas dari bercak nekrosis.",
    causes: "Kecukupan nutrisi hara makro dan mikro, sirkulasi air yang baik, serta pengendalian lingkungan sawah yang terjaga.",
    treatment: [
      "Pemeliharaan rutin tanaman dan pengawasan berkala di area persawahan.",
      "Pemupukan NPK berimbang sesuai fase pertumbuhan vegetatif maupun generatif.",
      "Sanitasi gulma di pematang sawah agar tidak menjadi inang patogen."
    ]
  }
];

export const PHOTO_GUIDE_STEPS = [
  {
    step: "01",
    title: "Jarak Foto 10–25 cm",
    desc: "Arahkan kamera ponsel secara tegak lurus menghadap permukaan helai daun padi pada jarak sekitar 10 hingga 25 cm."
  },
  {
    step: "02",
    title: "Pencahayaan Alami yang Cukup",
    desc: "Ambil gambar pada pagi atau sore hari dengan cahaya merata, serta hindari bayangan gelap yang menutupi bercak daun."
  },
  {
    step: "03",
    title: "Pastikan Bercak Terlihat Fokus",
    desc: "Ketuk layar ponsel pada bagian daun agar kamera terkunci fokus dan tekstur bercak penyakit terlihat tajam tanpa buram."
  },
  {
    step: "04",
    title: "Satu Helai Daun Utama",
    desc: "Usahakan objek daun yang ingin diperiksa berada tepat di bagian tengah bingkai foto untuk hasil analisis terbaik."
  }
];

export const TECH_STACK_DATA = [
  {
    name: "MobileNetV4-Conv-Small",
    role: "Arsitektur Deep Learning Utama",
    desc: "Menggunakan blok Universal Inverted Bottleneck (UIB) yang mampu membedakan kemiripan visual bercak penyakit daun padi secara presisi dan ringan."
  },
  {
    name: "Digital Image Processing",
    role: "Pemrosesan & Normalisasi Citra",
    desc: "Setiap foto yang diunggah disesuaikan ukurannya secara otomatis ke standar 224x224 piksel dan dinormalisasi agar tahan terhadap variasi cahaya lapangan."
  },
  {
    name: "FastAPI & PyTorch",
    role: "Mesin Inferensi Backend",
    desc: "Layanan peladen berbasis Python asinkron yang memproses gambar secara waktu nyata untuk menghitung skor keyakinan tiap kelas penyakit."
  },
  {
    name: "React.js & Tailwind CSS",
    role: "Antarmuka Web Modern",
    desc: "Menyajikan pengalaman pengguna yang bersih, interaktif, dan responsif ketika diakses melalui peramban ponsel pintar maupun komputer."
  }
];