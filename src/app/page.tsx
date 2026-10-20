import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import FeaturedWork from "@/components/FeaturedWork";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-between cursor-default">
      <CustomCursor />
      <Navbar />
      <div>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <FeaturedWork />
        <Credentials />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
