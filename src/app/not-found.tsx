import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Səhifə Tapılmadı (404) — Çöhrə Estetik Klinikası",
  description: "Axtardığınız səhifə mövcud deyil. Ana səhifəyə qayıdın.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4"
      aria-labelledby="not-found-heading"
    >
      <p className="text-6xl font-black text-primary mb-4" aria-hidden="true">
        404
      </p>
      <h1
        id="not-found-heading"
        className="text-2xl font-bold text-black/80 mb-2"
      >
        Səhifə tapılmadı
      </h1>
      <p className="text-text mb-6 max-w-md">
        Axtardığınız səhifə mövcud deyil və ya köçürülmüş ola bilər.
      </p>
      <Link
        href="/"
        className="bg-primary text-white rounded-[48px] px-6 py-2.5 font-medium hover:bg-primary/90 transition-colors"
      >
        Ana Səhifəyə Qayıt
      </Link>
    </main>
  );
}
