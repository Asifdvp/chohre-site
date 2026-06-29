import dynamic from "next/dynamic";
const DynamicFooter = dynamic(() => import("@/components/layouts/Footer"), {
  loading: () => <p>Loading...</p>,
});
import Navbar from "@/components/layouts/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const font = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cohre.az"),
  title: {
    default: "Çöhrə Estetik Klinikası Bakı — Dermatoloq, Botoks, Lazer",
    template: "%s | Çöhrə Estetik Klinikası",
  },
  description:
    "Bakıda lider estetik klinika. Botoks, filler, mezoterapiya, lazer, akne müalicəsi, saç əkimi FUE. 20+ illik təcrübəli dermatoloqlar. Pulsuz konsultasiya — 070 708 61 61",
  keywords: [
    "estetik klinika Bakı",
    "dermatoloq Bakı",
    "botoks Bakı",
    "filler Bakı",
    "lazer epilyasiya Bakı",
    "akne müalicəsi",
    "saç əkimi FUE",
    "mezoterapiya Bakı",
    "Çöhrə Estetik Klinikası",
    "kosmetologiya Bakı",
  ],
  authors: [{ name: "Çöhrə Estetik Klinikası" }],
  creator: "Çöhrə Estetik Klinikası",
  publisher: "Çöhrə Estetik Klinikası",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "az_AZ",
    url: "https://cohre.az",
    siteName: "Çöhrə Estetik Klinikası",
    title: "Çöhrə Estetik Klinikası Bakı — Dermatoloq, Botoks, Lazer",
    description:
      "Bakıda lider estetik klinika. Botoks, filler, mezoterapiya, lazer, akne müalicəsi, saç əkimi FUE. Pulsuz konsultasiya — 070 708 61 61",
    images: [
      {
        url: "/images/mainSection.webp",
        width: 1200,
        height: 630,
        alt: "Çöhrə Estetik Klinikası — Bakı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Çöhrə Estetik Klinikası Bakı — Dermatoloq, Botoks, Lazer",
    description:
      "Bakıda lider estetik klinika. Botoks, filler, mezoterapiya, lazer, akne müalicəsi, saç əkimi FUE. ☎ 070 708 61 61",
    images: ["/images/mainSection.webp"],
  },
  alternates: {
    canonical: "https://cohre.az",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <body className={`${font.className} antialiased pointer-events-auto!`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-9999 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm"
        >
          Əsas məzmuna keç
        </a>
        <Navbar />
        <main
          id="main-content"
          aria-label="Əsas məzmun"
          className="min-h-[calc(85vh-12rem)] md:min-h-[calc(100vh-16rem)]"
        >
          {children}
        </main>
        <DynamicFooter />
      </body>
    </html>
  );
}
