import Hero from "@/components/sections/Hero";
import Specialties from "@/components/sections/Specialties";
import Methodology from "@/components/sections/Methodology";
import AboutBrief from "@/components/AboutBrief"
import Footer from "@/components/Footer";
// A simple footer component

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />

      {/* Spacer for rhythm */}

      {/* About Brief */}

      {/* <AboutBrief /> */}

      <Specialties />
      <Methodology />
      <Footer />
    </main>
  );
}