import Image from "next/image";
import { AboutSection } from "@/components/about-section";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HeroSection } from "@/components/hero-section";
import { GallerySection } from "@/components/gallery-section";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col">
        {/* Hero Section with animated background */}
        <BackgroundBeamsWithCollision className="min-h-[90vh]">
          <HeroSection />
        </BackgroundBeamsWithCollision>

        {/* About Section without background beams */}
        <AboutSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Gallery Section */}
        <section id="gallery" className="py-8 md:py-16">
          <GallerySection />
        </section>
      </main>

      <footer className="flex gap-[24px] flex-wrap items-center justify-center p-8">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
