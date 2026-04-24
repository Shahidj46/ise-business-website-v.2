import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { motion } from "motion/react";
import { Play } from "lucide-react";

export default function VideoGalleryPage() {
  const videos = [
    { id: 1, title: "Our Journey with Edison Adelia", image: "https://images.unsplash.com/photo-1600607687940-477a63bd50be?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "The Art of Engineering", image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "Inside Lakeview Residence", image: "https://images.unsplash.com/photo-1600585154340-be6191dae10c?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Video Gallery Banner */}
      <div className="relative h-[450px] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000" 
          alt="Cinematography" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end px-12 md:px-24 pb-20">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-5xl md:text-7xl font-display font-bold uppercase tracking-tight"
          >
            VIDEO GALLERY
          </motion.h1>
        </div>
      </div>

      {/* Video Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {videos.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden rounded-sm shadow-lg">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                      <Play className="text-[#003B73] fill-[#003B73] ml-1" size={20} />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-display font-bold text-luxury-black group-hover:text-[#003B73] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-24 flex items-center justify-center gap-2">
            <button className="w-10 h-10 border border-gray-300 flex items-center justify-center text-sm hover:border-[#003B73] hover:text-[#003B73] transition-colors">1</button>
            <button className="px-4 h-10 border border-gray-300 flex items-center justify-center text-sm hover:border-[#003B73] hover:text-[#003B73] transition-colors text-gray-500">Next »</button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
