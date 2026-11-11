import React, { useState } from "react";
import { Sprout, Menu, X, ScanLine } from "lucide-react";
// 1. Impor gambar di bagian atas
import logoImg from "../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "#beranda" },
    { name: "Keunggulan", href: "#keunggulan" },
    { name: "Info Penyakit", href: "#penyakit" },
    { name: "Panduan Foto", href: "#panduan" },
    { name: "Teknologi", href: "#teknologi" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* BAGIAN LOGO */}
          <a href="#beranda" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center overflow-hidden bg-emerald-50 border border-emerald-200 shadow-sm">
              {/* 2. Panggil variabel logoImg dengan kurung kurawal */}
              <img 
                src={logoImg} 
                alt="Logo HaloPadi" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* 
              Catatan letak gambar:
              - Jika file logo Anda bernama 'logo-halopadi.png' dan ditaruh di dalam folder 'public/', 
                cukup gunakan src="/logo-halopadi.png".
              - Jika menggunakan import dari src/assets, ganti src dengan variabel gambar (misal: src={logoImage}).
            */}

            <div>
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900">
                Halo<span className="text-emerald-600">Padi</span>
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                AI Pertanian
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="#deteksi"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
            >
              <ScanLine className="w-3.5 h-3.5" />
              Mulai Deteksi
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#deteksi"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold shadow-sm"
            >
              <ScanLine className="w-3.5 h-3.5" />
              Mulai Deteksi Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;