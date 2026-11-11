import React from "react";
import { Camera, CheckCircle, XCircle } from "lucide-react";
import { PHOTO_GUIDE_STEPS } from "../data/padiData";

const PhotoGuideSection = () => {
  return (
    <section
      id="panduan"
      className="py-10 sm:py-14 bg-slate-50 border-t border-slate-200/70"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600">
            Panduan Pemotretan Daun
          </span>
          <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
            Cara Pengambilan Gambar Daun Padi yang Benar
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Agar sistem kecerdasan buatan HaloPadi dapat mengenali tekstur bercak dengan akurat, ikuti panduan singkat pengambilan foto berikut.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {PHOTO_GUIDE_STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-2xs space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Langkah {item.step}
                </span>
                <Camera className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 pt-1">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-xs sm:text-sm font-bold text-emerald-950">
                Disarankan Saat Memotret
              </p>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Gunakan foto asli berformat JPG atau PNG dengan permukaan helai daun terlihat jelas, pencahayaan pagi/sore yang merata, dan posisi kamera stabil.
              </p>
            </div>
          </div>

          <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-4 flex items-start gap-3">
            <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-xs sm:text-sm font-bold text-rose-950">
                Hindari Saat Memotret
              </p>
              <p className="text-xs text-rose-800 leading-relaxed">
                Hindari memotret dari jarak terlalu jauh, gambar buram (out of focus), tertutup bayangan gelap, atau mengunggah berkas dokumen selain gambar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGuideSection;