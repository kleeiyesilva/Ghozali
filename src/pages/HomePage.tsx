import { useState } from "react";
import Nav from "../components/Nav";
import ScrollProgress from "../components/ScrollProgress";
import IntroSplash from "../components/IntroSplash";
import Hero from "../components/Hero";
import VisionMission from "../components/VisionMission";
import HardSkills from "../components/HardSkills";
import SoftSkills from "../components/SoftSkills";
import ExperienceIndex from "../components/ExperienceIndex";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="relative min-h-screen grain-bg">
      {showIntro && <IntroSplash onDone={() => setShowIntro(false)} />}
      <ScrollProgress />
      <Nav />
      <div className="relative md:ml-24 lg:ml-28">
        <Hero />
        <VisionMission />
        <HardSkills />
        <SoftSkills />
        <ExperienceIndex />
        <Projects />
        <Certificates />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}
