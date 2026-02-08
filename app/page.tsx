import Hero from "@/components/sections/Hero";
import Specialties from "@/components/sections/Specialties";
import Methodology from "@/components/sections/Methodology";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Specialties />
      <Methodology />
      <Footer />
    </main>
  );
}
