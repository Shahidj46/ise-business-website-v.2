import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LayoutGrid, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { HERO_IMAGES } from "../constants";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ 3 second auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const filterLinks = [
    { name: "ONGOING", href: "/projects/ongoing" },
    { name: "HANDED OVER", href: "/projects/handed-over" },
    { name: "UPCOMING", href: "/projects/upcoming" },
    { name: "READY", href: "/projects/ready" },
  ];

  const HERO_TEXTS = [
    { title: "REDEFINING", highlight: "HAPPINESS" },
    { title: "LUXURY", highlight: "LIVING" },
    { title: "MODERN", highlight: "ARCHITECTURE" },
  ];

  return (
    <section
      id="home"
      className="relative h-[650px] w-full flex items-center overflow-hidden"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img
            key={currentSlide}
            src={HERO_IMAGES[currentSlide]}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            alt="Hero Image"
            className="w-full h-full object-cover brightness-110 contrast-110"
          />
        </AnimatePresence>

        {/* Light overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Side Dots */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
        {HERO_IMAGES.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full border-2 cursor-pointer transition ${
              idx === currentSlide
                ? "bg-white border-white scale-125"
                : "border-white/50 hover:border-white"
            }`}
          />
        ))}
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full h-full flex flex-col justify-end pb-24">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            {/* One line text */}
            <h1 className="text-white text-5xl md:text-6xl font-display font-bold leading-tight mb-4 tracking-tight whitespace-nowrap">
              {HERO_TEXTS[currentSlide].title}{" "}
              <span className="text-white">
                {HERO_TEXTS[currentSlide].highlight}
              </span>
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Filter Bar */}
      <div className="absolute bottom-0 left-0 w-full z-20 bg-black/30 backdrop-blur-md border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center gap-12">
          {/* Explore Button */}
          <Link
            to="/projects/ongoing"
            className="flex items-center gap-3 text-white text-[13px] font-bold tracking-widest group"
          >
            <div className="w-8 h-8 border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition">
              <LayoutGrid size={16} />
            </div>
            EXPLORE PROJECTS
          </Link>

          {/* Filters */}
          <div className="hidden md:flex items-center gap-10 border-l border-white/20 pl-12">
            <PlayCircle size={16} className="text-white opacity-70" />
            {filterLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-white text-[13px] font-bold tracking-widest hover:text-gold transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}