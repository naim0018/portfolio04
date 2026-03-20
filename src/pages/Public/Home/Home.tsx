import React, { Suspense, lazy, useEffect } from "react";
import Loading from "@/common/Loading";
import ParticlesBackground from "@/common/ParticlesBackground";
import CustomCursor from "@/common/CustomCursor";

// Lazy load components
const Hero = lazy(() => import("./Components/Hero"));
const About = lazy(() => import("./Components/About"));
const Experience = lazy(() => import("./Components/Experience"));
const Skills = lazy(() => import("./Components/Skills"));
const Projects = lazy(() => import("./Components/Projects"));
const Testimonials = lazy(() => import("./Components/Testimonials"));
const Contact = lazy(() => import("./Components/Contact"));

const Home: React.FC = () => {
  useEffect(() => {
    // Hide default cursor on desktops
    document.documentElement.style.cursor = 'none';
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
      (el as HTMLElement).style.cursor = 'none';
    });
    
    // Add style tag for interactive elements
    const style = document.createElement('style');
    style.innerHTML = `
      a, button, [role="button"], input, select, textarea, [data-cursor="pointer"] {
        cursor: none !important;
      }
      @media (max-width: 1024px) {
        html, body, * {
          cursor: auto !important;
        }
      }
    `;
    document.head.appendChild(style);

    const handleScroll = () => {
      const scrollProgress = document.getElementById("scroll-progress");
      if (scrollProgress) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        scrollProgress.style.transform = `scaleX(${progress / 100})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.head.removeChild(style);
      document.documentElement.style.cursor = 'auto';
    };
  }, []);

  return (
    <main className="relative bg-dark-default overflow-x-hidden min-h-screen">
      <CustomCursor />
      <ParticlesBackground />
      
      {/* Scroll Progress Bar */}
      <div id="scroll-progress"></div>

      <Suspense fallback={<Loading />}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </Suspense>
    </main>
  );
};

export default Home;
