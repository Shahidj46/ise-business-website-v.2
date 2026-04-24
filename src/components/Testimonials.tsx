import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "../constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-24 bg-gray-50 text-luxury-black overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-gold uppercase tracking-[0.3em] font-medium text-xs mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8 text-luxury-black">
              What Our <span className="serif-italic font-normal italic text-gold">Elite Clients</span> <br /> Are Saying
            </h2>
            <div className="flex gap-4 mt-12">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-luxury-black/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all text-luxury-black"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-luxury-black/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all text-luxury-black"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="relative min-h-[300px] flex items-center">
            <Quote className="absolute -top-10 -right-10 text-gold/10 w-40 h-40" />
            
            <div className="relative w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-2xl md:text-3xl font-display font-light leading-relaxed mb-10 italic text-gray-700">
                    "{TESTIMONIALS[current].content}"
                  </p>
                  <div>
                    <h4 className="text-xl font-bold text-[#003B73]">{TESTIMONIALS[current].name}</h4>
                    <p className="text-gray-500 uppercase tracking-widest text-xs mt-1">
                      {TESTIMONIALS[current].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
