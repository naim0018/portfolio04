import React from "react";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-100 py-12 md:py-20 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#hero" className="text-2xl font-bold group inline-block mb-6">
              <span className="gradient-text">A</span>
              <span className="text-white group-hover:text-primary-400 transition-colors">M</span>
            </a>
            <p className="text-gray-400 max-w-md leading-relaxed mb-8">
              Crafting high-quality digital experiences with passion and precision. Senior Full-Stack Developer specializing in modern web ecosystems.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-primary-400 transition-all hover:-translate-y-1">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-primary-400 transition-all hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-primary-400 transition-all hover:-translate-y-1">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:alex@alexmitchell.dev" className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-primary-400 transition-all hover:-translate-y-1">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#hero" className="text-gray-400 hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">About</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-primary-400 transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">Projects</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">San Francisco, CA</li>
              <li className="text-gray-400">alex@alexmitchell.dev</li>
              <li className="text-gray-400">+1 (555) 000-0000</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} Alex Mitchell. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-primary-400 transition-all hover:-translate-y-1 md:absolute md:right-8 md:bottom-20"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
