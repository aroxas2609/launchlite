import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pb-[calc(5.25rem+env(safe-area-inset-bottom))] md:pb-0">
        {children}
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
