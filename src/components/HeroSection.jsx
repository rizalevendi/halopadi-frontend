import React from "react";
import { Sparkles, ScanLine, BookOpen, ShieldCheck, Activity, CheckCircle2 } from "lucide-react";
import sawahImg from "../assets/sawah.jpg";

const HeroSection = () => {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-white pt-8 pb-12 sm:py-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-[11px] sm:text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Solusi Cerdas Perlindungan Tanaman Padi
            </div>

            <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-snug sm:leading-tight">
              Deteksi Penyakit Daun Padi dengan{" "}
              <span className="text-emerald-600">Kekuatan AI</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              Web ini membantu Anda mendeteksi penyakit daun padi secara akurat dan cepat. Lindungi hasil panen Anda dengan teknologi kecerdasan buatan terkini untuk mengenali gejala penyakit sejak dini dan mendapatkan rekomendasi penanganan yang tepat.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
              <a
                href="#deteksi"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
              >
                <ScanLine className="w-4 h-4" />
                Mulai Deteksi Daun
              </a>
              <a
                href="#penyakit"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs sm:text-sm font-medium transition-all"
              >
                <BookOpen className="w-4 h-4 text-emerald-600" />
                Kenali 4 Kondisi Daun
              </a>
            </div>

            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 pt-3 border-t border-slate-100">
              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200/70 shadow-2xs">
                <p className="text-sm sm:text-base font-bold text-emerald-600">4 Kelas</p>
                <p className="text-[11px] text-slate-500">Kondisi Daun Padi</p>
              </div>
              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200/70 shadow-2xs">
                <p className="text-sm sm:text-base font-bold text-emerald-600">Real-Time</p>
                <p className="text-[11px] text-slate-500">Analisis Cepat AI</p>
              </div>
              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200/70 shadow-2xs">
                <p className="text-sm sm:text-base font-bold text-emerald-600">Panduan OPT</p>
                <p className="text-[11px] text-slate-500">Solusi Penanganan</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-4 sm:p-5 space-y-3.5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold text-slate-800">
                    Pratinjau Diagnosis Cerdas
                  </span>
                </div>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700">
                  HaloPadi AI
                </span>
              </div>

{/* MENGGANTI GAMBAR DARI INTERNET DENGAN GAMBAR LOKAL ANDA */}
<div className="relative rounded-xl overflow-hidden h-40 sm:h-44 bg-slate-100">
                <img
                  src={sawahImg} 
                  alt="Hamparan Daun Padi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex items-end p-3">
                  <div className="text-white">
                    <p className="text-[10px] uppercase tracking-wider text-emerald-300 font-semibold">
                      Pemindaian Visual Daun
                    </p>
                    <p className="text-xs sm:text-sm font-bold">
                      Identifikasi Bercak & Kesehatan Tanaman
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs bg-slate-50 px-3 py-2 rounded-lg border border-slate-200/60">
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <Activity className="w-3.5 h-3.5 text-emerald-600" />
                    Deteksi Penyakit Dini
                  </span>
                  <span className="font-semibold text-slate-800">Otomatis</span>
                </div>
                <div className="flex items-center justify-between text-xs bg-slate-50 px-3 py-2 rounded-lg border border-slate-200/60">
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Rekomendasi Pengendalian
                  </span>
                  <span className="font-semibold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Tersedia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;