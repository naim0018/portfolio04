import { useState, useEffect, useMemo } from "react";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
} from "lucide-react";
import useGetPortfolioData from "@/hooks/useGetPortfolioData";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(100);

  const id = "69a720da8da6013078976fb6";
  const { profile } = useGetPortfolioData({ id });
  const { name, shortDescription, longDescription } = profile;

  const phrases = useMemo(
    () =>
      shortDescription
        ? [shortDescription]
        : [
            "Senior Full-Stack Developer",
            "Open to US & UK Opportunities",
            "7+ Years Experience",
            "Passion for Scalable Architecture",
          ],
    [shortDescription],
  );

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        if (displayText.length === currentPhrase.length) {
          setIsDeleting(true);
          setTypeSpeed(2000); // Pause at end
        } else {
          setTypeSpeed(100);
        }
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev: number) => (prev + 1) % phrases.length);
          setTypeSpeed(500);
        } else {
          setTypeSpeed(50);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, typeSpeed, phrases]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="blob-1 absolute top-1/4 left-1/4 w-[500px] h-[500px] opacity-20 blur-3xl"></div>
        <div className="blob-2 absolute bottom-1/4 right-1/4 w-[400px] h-[400px] opacity-15 blur-3xl"></div>
        <div className="blob-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 w-full text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          {/* Greeting */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="w-8 h-[2px] bg-primary-500"></span>
            <span className="text-primary-400 font-mono text-sm md:text-base tracking-widest uppercase">
              Hello, I'm
            </span>
            <span className="w-8 h-[2px] bg-primary-500"></span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 tracking-tight"
          >
            <span className="text-white uppercase">
              {name ?? "Alex Mitchell"}
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-300 mb-8 h-10 flex items-center justify-center"
          >
            <span className="font-mono min-h-[1.5em]">{displayText}</span>
            <span className="typewriter-cursor"></span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
          >
            {longDescription || (
              <>
                Building digital experiences that make a difference. With 7+
                years of experience building scalable applications for startups
                and enterprises across the US and UK.
              </>
            )}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-5 mb-12"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              View My Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="#"
              className="p-2 text-gray-500 hover:text-primary-400 transition-all hover:-translate-y-1 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-2 text-gray-500 hover:text-primary-400 transition-all hover:-translate-y-1 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-2 text-gray-500 hover:text-primary-400 transition-all hover:-translate-y-1 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-10 border-t border-white/5 max-w-5xl mx-auto"
        >
          {[
            { label: "Years Experience", value: "7" },
            { label: "Projects Completed", value: "50" },
            { label: "Happy Clients", value: "30" },
            { label: "Awards Won", value: "12" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform">
                {stat.value}+
              </div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-500 hover:text-primary-400 transition-colors"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
