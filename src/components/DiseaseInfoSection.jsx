import React, { useState } from "react";
import { AlertCircle, CheckCircle2, ShieldAlert, ArrowRight } from "lucide-react";
import { DISEASES_DATA } from "../data/padiData";

const DiseaseInfoSection = () => {
  const [selectedId, setSelectedId] = useState(DISEASES_DATA[0].id);
  const activeDisease =
    DISEASES_DATA.find((d) => d.id === selectedId) || DISEASES_DATA[0];

  return (
    <section id="penyakit" className="py-10 sm:py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600">
            Ensiklopedia Tanaman Padi
          </span>
          <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
            Mengenal 4 Kondisi Daun Padi & Penanganannya
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Kenali perbedaan gejala visual antara Hawar Daun Bakteri (BLB), Bercak Cokelat (Brown Spot), Blas Daun (Leaf Blast), dan Daun Sehat beserta langkah pengendaliannya.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {DISEASES_DATA.map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`text-left p-3 sm:p-3.5 rounded-xl border transition-all ${
                  isSelected
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                    : "bg-slate-50 hover:bg-slate-100/80 text-slate-800 border-slate-200"
                }`}
              >
                <span
                  className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-md mb-1.5 ${
                    isSelected
                      ? "bg-emerald-700 text-emerald-100"
                      : item.badgeColor
                  }`}
                >
                  {item.shortTag}
                </span>
                <p className="text-xs sm:text-sm font-bold line-clamp-1">
                  {item.name}
                </p>
                <p
                  className={`text-[11px] italic truncate ${
                    isSelected ? "text-emerald-100" : "text-slate-500"
                  }`}
                >
                  {item.latin}
                </p>
              </button>
            );
          })}
        </div>

        <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
            <div className="lg:col-span-5 space-y-3">
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-white h-48 sm:h-56">
                <img
                  src={activeDisease.image}
                  alt={activeDisease.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200/80">
                <p className="text-[11px] font-semibold text-slate-500 uppercase">
                  Penyebab Utama
                </p>
                <p className="text-xs text-slate-700 mt-0.5 leading-relaxed">
                  {activeDisease.causes}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <span
                  className={`inline-block text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${activeDisease.badgeColor}`}
                >
                  {activeDisease.shortTag}
                </span>
                <h3 className="text-base sm:text-xl font-bold text-slate-900 mt-1.5">
                  {activeDisease.name}
                </h3>
                <p className="text-xs italic text-slate-500">
                  Patogen / Status: {activeDisease.latin}
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  Gejala Visual pada Helaian Daun
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeDisease.symptoms}
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <ShieldAlert className="w-4 h-4 text-emerald-600 shrink-0" />
                  Rekomendasi Penanganan & Pengendalian
                </div>
                <ul className="space-y-1.5">
                  {activeDisease.treatment.map((step, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-1">
                <a
                  href="#deteksi"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700"
                >
                  Cek apakah daun padi Anda mengalami kondisi ini
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiseaseInfoSection;