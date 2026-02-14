import dynamic from "next/dynamic";
const DynamicFooter = dynamic(() => import("@/components/layouts/Footer"), {
  loading: () => <p>Loading...</p>,
});
import Navbar from "@/components/layouts/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const font = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
});

export const metadata = {
  title: "Cohre Estetik",
  description: "Cohre Estetik",
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
    <html lang="en">
      <body className={`${font.className} antialiased pointer-events-auto!`}>
        <Navbar />
        <main className="min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-16rem)]">
          {children}
        </main>
        <DynamicFooter />
      </body>
    </html>
  );
}
