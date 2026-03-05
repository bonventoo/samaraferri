import Hero from "@/components/sections/Hero";
import Specialties from "@/components/sections/Specialties";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Specialties />
      <Footer />
    </main>
  );
}
