import { useState, useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutModal from "@/components/AboutModal";
import TeamSection from "@/components/TeamSection";
import ValuesModal from "@/components/ValuesModal";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CareersSection from "@/components/CareersSection";

export default function Home() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [valuesOpen, setValuesOpen] = useState(false);

  const teamRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    switch (section) {
      case "about":
        setAboutOpen(true);
        break;
      case "team":
        teamRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "values":
        setValuesOpen(true);
        break;
      case "projects":
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavClick={scrollToSection} />

      <main>
        <Hero
          onLearnMore={() => setAboutOpen(true)}
          onContact={() => scrollToSection("contact")}
        />

        <div ref={teamRef}>
          <TeamSection />
        </div>

        <div ref={projectsRef}>
          <ProjectsSection />
        </div>

        <div ref={contactRef}>
          <ContactSection />
        </div>

        <CareersSection />
      </main>

      <Footer />

      <AboutModal open={aboutOpen} onOpenChange={setAboutOpen} />
      <ValuesModal open={valuesOpen} onOpenChange={setValuesOpen} />
    </div>
  );
}
