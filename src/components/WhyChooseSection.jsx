import React from "react";
import {
  Zap,
  CheckCircle2,
  Smartphone,
  Sparkles,
  Layers,
  ShieldCheck
} from "lucide-react";
import { FEATURES_DATA } from "../data/padiData";

const iconMap = {
  Zap: Zap,
  CheckCircle2: CheckCircle2,
  Smartphone: Smartphone,
  Sparkles: Sparkles,
  Layers: Layers,
  ShieldCheck: ShieldCheck
};

const WhyChooseSection = () => {
  return (
    <section id="keunggulan" className="py-10 sm:py-14 bg-slate-50 border-y border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600">
            Mengapa Pilih HaloPadi?
          </span>
          <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
            Fitur Canggih yang Dirancang Mudah untuk Petani
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Sistem deteksi penyakit daun padi berbasis kecerdasan buatan yang membantu petani mengidentifikasi masalah tanaman lebih awal dengan akurasi tinggi. Dirancang untuk memudahkan petani dalam mengidentifikasi penyakit tanaman padi dengan teknologi AI terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES_DATA.map((item) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 hover:border-emerald-300 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {item.id}. {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;