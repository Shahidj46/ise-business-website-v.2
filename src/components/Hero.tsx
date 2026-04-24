import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LayoutGrid, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { HERO_IMAGES } from "../constants";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const filterLinks = [
    { name: "ONGOING", href: "/projects/ongoing" },
    { name: "HANDED OVER", href: "/projects/handed-over" },
    { name: "UPCOMING", href: "/projects/upcoming" },
    { name: "READY", href: "/projects/ready" },
  ];

  return (
    <section id="home" className="relative h-[650px] w-full flex items-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={HERO_IMAGES[currentSlide]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            alt="Luxury Real Estate"
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Side Dots (Slider Controls) */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
        {HERO_IMAGES.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full border-2 transition-all cursor-pointer ${
              idx === currentSlide ? "bg-white border-white scale-125" : "bg-transparent border-white/50 hover:border-white"
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full h-full flex flex-col justify-end pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white text-6xl md:text-8xl font-display font-bold leading-none mb-4 drop-shadow-lg tracking-tight">
              OASIS OF <br />
              <span className="text-white">COMFORT</span>
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Filter Bar */}
      <div className="absolute bottom-0 left-0 w-full z-20 bg-black/40 backdrop-blur-md border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-start gap-12">
          {/* Explore Projects Button */}
          <Link
            to="/projects/ongoing"
            className="flex items-center gap-3 text-white text-[13px] font-bold tracking-widest group"
          >
            <div className="w-8 h-8 rounded-sm border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <LayoutGrid size={16} />
            </div>
            EXPLORE PROJECTS
          </Link>

          {/* Filters */}
          <div className="hidden md:flex items-center gap-10 border-l border-white/20 pl-12 h-full">
            <div className="flex items-center gap-4 text-white text-[10px] font-bold tracking-widest opacity-70 group cursor-pointer hover:opacity-100 transition-opacity translate-y-[1px]">
              <PlayCircle size={14} className="fill-white" />
            </div>
            {filterLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-white text-[13px] font-bold tracking-[0.15em] hover:text-gold transition-colors"
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


