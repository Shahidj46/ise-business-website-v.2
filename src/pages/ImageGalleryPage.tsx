import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { motion } from "motion/react";

export default function ImageGalleryPage() {
  const images = [
    { id: 1, title: "Exterior view of Lakeview", image: "https://images.unsplash.com/photo-1600585154340-be6191dae10c?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "Modern Hallway", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "Luxury Bedroom", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800" },
    { id: 4, title: "Corporate Plaza exterior", image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=80&w=800" },
    { id: 5, title: "Minimalist Lounge", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" },
    { id: 6, title: "Skyline view from Penthouse", image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Image Gallery Banner */}
      <div className="relative h-[450px] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
          alt="Studio view" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-end px-12 md:px-24 pb-20">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-5xl md:text-7xl font-display font-bold uppercase tracking-tight"
          >
            IMAGE GALLERY
          </motion.h1>
        </div>
      </div>

      {/* Image Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            {images.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-md">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white text-sm font-bold uppercase tracking-widest">View Image</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-500 text-sm font-medium">{item.title}</p>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-24 flex items-center justify-center gap-2">
            <button className="w-10 h-10 border border-gray-300 flex items-center justify-center text-sm hover:border-[#003B73] hover:text-[#003B73] transition-colors">1</button>
            <button className="w-10 h-10 border border-gray-300 flex items-center justify-center text-sm hover:border-[#003B73] hover:text-[#003B73] transition-colors text-gray-500">2</button>
            <button className="px-4 h-10 border border-gray-300 flex items-center justify-center text-sm hover:border-[#003B73] hover:text-[#003B73] transition-colors text-gray-500">Next »</button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
