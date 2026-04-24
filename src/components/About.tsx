import { motion } from "motion/react";
import { Play } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-gray-400 uppercase tracking-[0.4em] font-bold text-[13px] mb-6">ABOUT US</p>
            <h2 className="text-[#003B73] text-4xl md:text-5xl font-display font-bold mb-10 leading-[1.2] uppercase tracking-tight">
              REDEFINING YOUR <br />
              STANDARD OF LIVING
            </h2>
            <div className="space-y-8 text-gray-700 font-normal leading-relaxed text-[15px] max-w-xl">
              <p>
                Edison Group was founded in 2009 with the aim to enhance aspects of life 
                for people by providing powerful brands, reliable products and a wide range of services. 
                It ventured into the real estate sector in 2015 with its "dream team" dedicated to merge value 
                and innovation in the evolving real estate sector of Bangladesh. Through considerable focus on 
                design, structural dimension, and feasibility in the sense of space and resource 
                conservation; as well as environmental soundness; we deliver you optimum support in 
                residential and commercial accommodation.
              </p>
              <p>
                Conjoining the expertise of different fields to develop and bring in the quintessence 
                of contemporary lifestyle, we provide distinguished services and strictly maintain 
                project handover deadlines. We assure you to be your most reliable developer in Dhaka 
                in terms of integrity and credibility.
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12"
            >
              <button className="px-10 py-3.5 border border-[#003B73]/30 text-[#003B73] font-bold text-[14px] hover:bg-[#003B73] hover:text-white transition-all rounded-sm">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-sm overflow-hidden shadow-xl group cursor-pointer aspect-video">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200"
                alt="Development Project Showcase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Text Overlay */}
              <div className="absolute inset-0 bg-black/5 flex flex-col items-center justify-center text-center p-6">
                <div className="text-white drop-shadow-2xl">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-2">
                    The Biggest Developer
                  </h3>
                  <p className="text-xl md:text-2xl font-display font-medium opacity-90">
                    in Bashundhara R/A
                  </p>
                </div>
                
                {/* Red Play Button */}
                <div className="mt-10 relative flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#F41E1E] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(244,30,30,0.5)] z-10 hover:bg-red-700 transition-colors">
                    <Play className="text-white fill-white ml-1.5" size={32} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Logo on image top-right */}
            <div className="absolute top-8 right-8 flex flex-col items-end gap-0">
               <div className="flex items-center gap-2">
                  <span className="text-white font-display font-bold text-lg tracking-tight">EDISON</span>
               </div>
               <span className="text-white text-[10px] uppercase font-bold tracking-[0.2em] opacity-80">REAL ESTATE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

