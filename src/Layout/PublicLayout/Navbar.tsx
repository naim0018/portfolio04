import React, { useState, useEffect } from "react";

import { useTheme } from "next-themes";
import { Sun, Moon, Download, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section highlighting logic
      const sections = ["hero", "about", "experience", "skills", "projects", "testimonials", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Testimonials", href: "#testimonials", id: "testimonials" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  if (!mounted) return null;

  return (
    <>
      <nav
        id="navbar"
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          isScrolled
            ? "bg-dark-100/80 backdrop-blur-lg border-b border-white/5 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#hero" className="relative text-xl md:text-2xl font-bold group">
              <span className="gradient-text">A</span>
              <span className="text-white group-hover:text-primary-400 transition-colors">M</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-accent-400"></span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                    activeSection === link.id
                      ? "text-primary-400 bg-white/5"
                      : "text-gray-400 hover:text-white"
                  )}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-400 rounded-full"></span>
                  )}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2.5 rounded-xl bg-white/5 text-gray-400 hover:text-primary-400 transition-all hover:scale-110 active:scale-90 border border-white/5"
                title="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-[18px] h-[18px]" />
                ) : (
                  <Moon className="w-[18px] h-[18px]" />
                )}
              </button>
              <a
                href="#"
                className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl bg-primary-500 text-white hover:bg-primary-600 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary-500/25"
              >
                <Download className="w-4 h-4" /> Resume
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-white/5 text-gray-400 border border-white/5"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-80 bg-dark-100 shadow-2xl transition-transform duration-300 ease-in-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="pt-24 px-8">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl text-lg font-medium transition-colors",
                    activeSection === link.id
                      ? "text-primary-400 bg-white/5"
                      : "text-gray-400 hover:text-white"
                  )}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#"
              className="flex items-center justify-center gap-2 mt-6 px-6 py-3 rounded-xl bg-primary-500 text-white font-medium"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
