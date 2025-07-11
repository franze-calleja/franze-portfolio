import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
// import Education from "@/components/Education";
import Experience from "@/components/Experience";
// import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div
      className="min-h-screen transition-colors duration-1000 ease-in-out bg-neutral-900"
      //   style={{
      //     background: `linear-gradient(
      //   to bottom right,
      //    #161E2F,
      //    #242F49,
      //    #384358,
      //    #B51A2B,
      //    #541A21
      // )`,
      //   }}
    >
      <NavBar />
      <main className="pt-5 px-5">
        <Hero />
        <AboutMe />
        <TechStack />
        <Skills />
        <Projects />
        <Experience />
        {/* <Education /> */}

        {/* <Footer /> */}
      </main>
      <Contact />
    </div>
  );
}
