import { Play, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion } from "motion/react";

export default function VideoSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16">
          <p className="text-gray-400 uppercase tracking-[0.4em] font-bold text-[13px] mb-6">TESTIMONIAL</p>
          <h2 className="text-[#003B73] text-4xl md:text-5xl font-display font-bold leading-tight uppercase tracking-tight">
            WHAT CUSTOMERS <br />
            SAY ABOUT US
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1600607687940-477a63bd50be?auto=format&fit=crop&q=80&w=1200"
                alt="Customer Testimonial Video"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl z-10">
                  <Play className="text-[#003B73] fill-[#003B73] ml-1" size={24} />
                </div>
              </div>

              {/* Text Overlays on Image */}
              <div className="absolute bottom-8 left-0 right-0 text-center px-6">
                <p className="text-white text-xs uppercase tracking-[0.2em] font-bold mb-2 drop-shadow-md">
                  OUR JOURNEY WITH
                </p>
                <p className="text-white text-sm font-bold mb-4 drop-shadow-md">
                  ISE HAS BEEN SMOOTH AND PLEASANT
                </p>
                <div className="flex flex-col items-center gap-1">
                  <p className="text-gold text-[10px] font-bold uppercase tracking-widest">
                    APARTMENT OWNER
                  </p>
                  <div className="w-20 h-px bg-white/30" />
                  <p className="text-white text-[10px] font-bold tracking-tighter">ISE ADELIA</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative pr-12"
          >
            <Quote className="absolute -top-10 -left-6 text-[#003B73]/5 w-24 h-24 -z-10" />
            
            <h3 className="text-[#003B73] text-2xl md:text-3xl font-display font-bold mb-8 leading-tight">
              Cherished Moments from Our Homeowner
            </h3>
            
            <p className="text-gray-600 text-[15px] leading-relaxed mb-10">
              Hear from ISE Adelia homeowners as they share their stories about their homes. 
              Their experiences inspire us to keep providing the best for everyone we serve.
            </p>

            <div className="mb-12">
              <h4 className="text-luxury-black font-bold text-lg mb-1">Farzana Khalid</h4>
              <p className="text-gray-400 text-sm font-medium">Apartment Owner</p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-6 mt-auto">
              <button className="text-gray-400 hover:text-[#003B73] transition-colors">
                <ChevronLeft size={28} strokeWidth={1.5} />
              </button>
              <button className="text-gray-400 hover:text-[#003B73] transition-colors">
                <ChevronRight size={28} strokeWidth={1.5} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

