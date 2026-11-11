import React from "react";
import { Cpu, Code2, Server, Image as ImageIcon } from "lucide-react";
import { TECH_STACK_DATA } from "../data/padiData";

const icons = [Cpu, ImageIcon, Server, Code2];

const TechStackSection = () => {
  return (
    <section
      id="teknologi"
      className="py-10 sm:py-14 bg-white border-t border-slate-200/70"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600">
            Dapur Pacu Sistem
          </span>
          <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
            Teknologi di Balik HaloPadi
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            HaloPadi memadukan arsitektur jaringan saraf tiruan generasi terbaru dengan layanan web modern agar proses diagnosis berjalan cepat dan ringan di berbagai perangkat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TECH_STACK_DATA.map((tech, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={tech.name}
                className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 space-y-2.5"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-emerald-700 uppercase">
                    {tech.role}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                    {tech.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;