import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Manifest from "@/components/Manifest";
import Contact from "@/components/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Manifest />
        <Contact />
      </main>
    </div>
  );
}
