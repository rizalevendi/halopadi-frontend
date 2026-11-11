import React from "react";
import logoImage from "../assets/logo.jpg"; // Mengambil gambar logo dari src/assets

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 sm:py-10 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-slate-800">
          <div className="md:col-span-6 space-y-2.5">
            <div className="flex items-center gap-2">
              {/* Bagian Logo dari src/assets */}
              <div className="w-7 h-7 rounded-lg overflow-hidden flex items-center justify-center bg-slate-800 border border-slate-700/80 shadow-xs">
                <img
                  src={logoImage}
                  alt="Logo HaloPadi"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-base font-bold text-white">
                Halo<span className="text-emerald-400">Padi</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Platform deteksi dini penyakit daun padi berbasis kecerdasan buatan untuk membantu petani mengenali gejala penyakit tanaman secara cepat, akurat, dan objektif.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigasi Cepat
            </p>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#beranda" className="hover:text-emerald-400 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-emerald-400 transition-colors">
                  Keunggulan HaloPadi
                </a>
              </li>
              <li>
                <a href="#penyakit" className="hover:text-emerald-400 transition-colors">
                  Info 4 Kondisi Daun
                </a>
              </li>
              <li>
                <a href="#deteksi" className="hover:text-emerald-400 transition-colors">
                  Deteksi Penyakit
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-2">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">
              Kelas Klasifikasi
            </p>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>Hawar Daun Bakteri (BLB)</li>
              <li>Bercak Cokelat (Brown Spot)</li>
              <li>Blas Daun (Leaf Blast)</li>
              <li>Daun Padi Sehat (Healthy)</li>
            </ul>
          </div>
        </div>

        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} HaloPadi. Sistem Cerdas Deteksi Penyakit Daun Padi.</p>
          <p>Didukung Teknologi AI MobileNetV4 & FastAPI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;