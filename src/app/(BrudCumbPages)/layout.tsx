import PageBanner from "@/components/shared/PageBanner";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="pt-5 md:pt-7">
      <PageBanner />
      {children}
    </div>
  );
}
