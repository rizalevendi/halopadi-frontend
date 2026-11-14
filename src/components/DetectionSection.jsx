import React, { useState, useRef, useEffect } from "react";
import {
  UploadCloud,
  ScanLine,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Clock,
  ShieldCheck,
  FileWarning,
  Sparkles
} from "lucide-react";
import { DISEASES_DATA } from "../data/padiData";

const API_URL = "https://rizalduro123-halopadi-backend.hf.space/predict";
const HEALTH_URL = "https://rizalduro123-halopadi-backend.hf.space/";

const DetectionSection = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [result, setResult] = useState(null);
  const fileInputRef = useRef(null);

  // Bangunkan server Hugging Face di latar belakang saat halaman dibuka
  useEffect(() => {
    fetch(HEALTH_URL, { mode: "no-cors" }).catch(() => {});
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    processSelectedFile(file);
  };

  const processSelectedFile = (file) => {
    setErrorMsg("");
    setResult(null);

    if (!file) return;

    const isImageMime = file.type && file.type.startsWith("image/");
    const isImageExt = /\.(jpe?g|png|webp|heic|heif)$/i.test(file.name || "");

    if (!isImageMime && !isImageExt) {
      setSelectedFile(null);
      setPreviewUrl(null);
      setErrorMsg(
        "Format berkas ditolak! Harap unggah foto daun padi berformat .JPG atau .PNG."
      );
      return;
    }

    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSampleSelect = (disease) => {
    setErrorMsg("");
    setSelectedFile({ name: `${disease.id}.jpg`, isSample: true, sampleData: disease });
    setPreviewUrl(disease.image);
    setResult(null);
  };

  const handleReset = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setResult(null);
    setErrorMsg("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Kompres dan ubah foto kamera HP beresolusi tinggi ke JPEG standar (maks 640px)
  const prepareImageForUpload = (file) => {
    return new Promise((resolve) => {
      const img = new Image();
      const objectUrl = URL.createObjectURL(file);

      img.onload = () => {
        URL.revokeObjectURL(objectUrl);
        const maxSide = 640;
        let { width, height } = img;

        if (width > maxSide || height > maxSide) {
          if (width > height) {
            height = Math.round((height * maxSide) / width);
            width = maxSide;
          } else {
            width = Math.round((width * maxSide) / height);
            height = maxSide;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              resolve(file);
            }
          },
          "image/jpeg",
          0.88
        );
      };

      img.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        resolve(file);
      };

      img.src = objectUrl;
    });
  };

  const runSampleSimulation = (diseaseTarget) => {
    const chosen = diseaseTarget || DISEASES_DATA[0];
    const mainConf = 97.4;
    const rem = +(100 - mainConf).toFixed(2);
    const probabilities = {};

    DISEASES_DATA.forEach((d, idx) => {
      if (d.id === chosen.id) {
        probabilities[d.name] = mainConf;
      } else {
        probabilities[d.name] = +(rem / 3 + (idx === 0 ? 0.02 : -0.01)).toFixed(2);
      }
    });

    return {
      class_key: chosen.id,
      class_name: chosen.name,
      latin_name: chosen.latin,
      status:
        chosen.id === "Healthy" ? "Tanaman Sehat" : "Terdeteksi Gejala Penyakit",
      severity: chosen.id === "Healthy" ? "Aman" : "Perlu Penanganan",
      confidence: mainConf,
      response_time_ms: 142.5,
      description: chosen.symptoms,
      recommendations: chosen.treatment,
      probabilities
    };
  };

  const handleDetect = async () => {
    if (!selectedFile) {
      setErrorMsg("Silakan pilih atau unggah foto daun padi terlebih dahulu.");
      return;
    }

    setIsLoading(true);
    setErrorMsg("");

    try {
      if (selectedFile.isSample) {
        await new Promise((r) => setTimeout(r, 650));
        setResult(runSampleSimulation(selectedFile.sampleData));
        setIsLoading(false);
        return;
      }

      const uploadBlob = await prepareImageForUpload(selectedFile);
      const formData = new FormData();
      formData.append("file", uploadBlob, "leaf_upload.jpg");

      const response = await fetch(API_URL, {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        const rawText = await response.text();
        let detailMsg = `Server merespons status ${response.status}.`;
        try {
          const errJson = JSON.parse(rawText);
          if (errJson.detail) detailMsg = errJson.detail;
        } catch (_) {}
        throw new Error(detailMsg);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setResult(null);
      setErrorMsg(
        `Gagal terhubung ke server AI (${err.message}). Jika server baru saja aktif, tunggu sekitar 10 detik lalu tekan tombol Deteksi lagi.`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="deteksi"
      className="py-10 sm:py-14 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600">
            Klasifikasi Daun Padi Berbasis AI
          </span>
          <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
            Mulai Deteksi Penyakit Daun Padi
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Unggah foto helaian daun padi Anda untuk mengetahui jenis penyakit beserta rekomendasi teknis pengendalian OPT secara instan.
          </p>
        </div>

        {/* Alur 3 Langkah */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-3xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-xl p-2.5 sm:p-3 text-center">
            <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
              Langkah 1
            </span>
            <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
              Upload Citra Daun
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-2.5 sm:p-3 text-center">
            <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
              Langkah 2
            </span>
            <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
              Hasil Diagnosis AI
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-2.5 sm:p-3 text-center">
            <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
              Langkah 3
            </span>
            <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
              Rekomendasi OPT
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Panel Kiri: Upload Citra */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-xs p-4 sm:p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                1. Unggah Citra Daun Padi
              </h3>
              {previewUrl && (
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 hover:text-rose-600"
                >
                  <RefreshCw className="w-3 h-3" /> Reset
                </button>
              )}
            </div>

            <div
              onClick={() => fileInputRef.current?.click()}
              className="cursor-pointer border-2 border-dashed border-slate-300 hover:border-emerald-500 rounded-xl p-4 text-center transition-all bg-slate-50/60 hover:bg-emerald-50/30"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />

              {previewUrl ? (
                <div className="space-y-2.5">
                  <div className="h-44 sm:h-48 w-full rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                    <img
                      src={previewUrl}
                      alt="Pratinjau Daun Padi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[11px] font-medium text-slate-600 truncate">
                    Berkas: {selectedFile?.name}
                  </p>
                </div>
              ) : (
                <div className="py-6 space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <UploadCloud className="w-5 h-5" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    Klik untuk memilih foto daun padi
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Mendukung foto kamera langsung, JPG, atau PNG
                  </p>
                </div>
              )}
            </div>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2 text-rose-800">
                <FileWarning className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed">{errorMsg}</p>
              </div>
            )}

            <button
              onClick={handleDetect}
              disabled={!selectedFile || isLoading}
              className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                !selectedFile || isLoading
                  ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                  : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
              }`}
            >
              <ScanLine className="w-4 h-4" />
              {isLoading ? "Menganalisis Citra Daun..." : "Deteksi Penyakit Sekarang"}
            </button>
          </div>

          {/* Panel Kanan: Hasil Diagnosis & Rekomendasi OPT */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-xs p-4 sm:p-5">
            {!result ? (
              <div className="h-full min-h-[280px] flex flex-col items-center justify-center text-center p-6 space-y-2.5 text-slate-400">
                <Sparkles className="w-8 h-8 text-slate-300" />
                <p className="text-xs sm:text-sm font-semibold text-slate-700">
                  Hasil Diagnosis & Rekomendasi Akan Muncul di Sini
                </p>
                <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
                  Silakan unggah foto helai daun padi di panel sebelah kiri, lalu tekan tombol deteksi untuk melihat hasil klasifikasi beserta langkah pengendalian OPT.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    {result.class_key === "Healthy" ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                    )}
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        2. Hasil Diagnosis AI
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {result.class_name}
                      </h3>
                      <p className="text-[11px] italic text-slate-500">
                        {result.latin_name}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="text-right bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl">
                      <p className="text-[10px] text-emerald-700 font-medium">
                        Tingkat Keyakinan
                      </p>
                      <p className="text-sm sm:text-base font-bold text-emerald-700">
                        {result.confidence}%
                      </p>
                    </div>
                  </div>
                </div>

                {/* Deskripsi Kondisi */}
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">
                      Keterangan Kondisi Daun
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {result.response_time_ms} ms
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {result.description}
                  </p>
                </div>

                {/* Distribusi Probabilitas 4 Kelas */}
                {result.probabilities && (
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-slate-800">
                      Rincian Skor Prediksi 4 Kelas:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {Object.entries(result.probabilities).map(
                        ([label, prob]) => (
                          <div
                            key={label}
                            className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/70 space-y-1"
                          >
                            <div className="flex justify-between text-[11px]">
                              <span className="font-medium text-slate-700 truncate">
                                {label}
                              </span>
                              <span className="font-bold text-slate-900">
                                {prob}%
                              </span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-emerald-600 rounded-full"
                                style={{ width: `${Math.min(prob, 100)}%` }}
                              />
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* Rekomendasi Pengendalian OPT */}
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-950">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    3. Rekomendasi Teknis Pengendalian OPT
                  </div>
                  <ul className="space-y-2">
                    {result.recommendations?.map((step, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-emerald-900 leading-relaxed"
                      >
                        <span className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetectionSection;