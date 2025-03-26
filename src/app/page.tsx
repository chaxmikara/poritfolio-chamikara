import Image from "next/image";
import { AboutSection } from "@/components/about-section";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HeroSection } from "@/components/hero-section";
import { GallerySection } from "@/components/gallery-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { FooterSection } from "@/components/footer-section";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
      <main className="flex flex-col w-full">
        {/* Hero Section with animated background */}
        <BackgroundBeamsWithCollision className="min-h-[90vh]">
          <HeroSection />
        </BackgroundBeamsWithCollision>

        {/* About Section without background beams */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Gallery Section */}
        <section id="gallery" className="py-8 md:py-16 w-full">
          <GallerySection />
        </section>

        {/* Footer with Contact Section */}
        <FooterSection />
      </main>
    </div>
  );
}
