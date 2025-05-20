import { MainScene } from "@/components/three/main-scene/scene";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FullpageLayout } from "@/components/layout/fullpage-layout";

export default function Home() {
  return (
    <>
      <MainScene />
      <FullpageLayout>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </FullpageLayout>
    </>
  );
}
