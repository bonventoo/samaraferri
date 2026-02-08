import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import SmoothScroll from "../components/scroll/SmoothScroll";
import "./globals.css";

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "700"] 
});

export const metadata: Metadata = {
  title: "Samara Bonvento | Fisioterapia",
  description: "Advanced orthopedic rehabilitation and biomechanics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="antialiased bg-clinical-50">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}