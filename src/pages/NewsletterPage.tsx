import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { motion } from "motion/react";

export default function NewsletterPage() {
  const newsletters = [
    {
      id: 11,
      date: "15 October 2024",
      title: "Newsletter 11",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 10,
      date: "14 July 2024",
      title: "Newsletter 10",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 9,
      date: "17 April 2024",
      title: "Newsletter 9",
      image: "https://images.unsplash.com/photo-1590644365607-1c5a91bd678d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 8,
      date: "15 January 2024",
      title: "Newsletter 8",
      image: "https://images.unsplash.com/photo-1449156001437-3a1621dfbe2b?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Newsletter Banner */}
      <div className="relative h-[450px] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000" 
          alt="Desk with pen and coffee" 
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
            NEWSLETTER
          </motion.h1>
        </div>
      </div>

      {/* Newsletter Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-x-10 gap-y-20">
            {newsletters.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-8 border border-gray-100 shadow-sm">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-500 text-sm font-medium">{item.date}</p>
                  <h3 className="text-xl font-display font-bold text-luxury-black group-hover:text-[#003B73] transition-colors">
                    {item.title}
                  </h3>
                  <button className="px-8 py-3 border border-luxury-black text-luxury-black font-bold text-xs uppercase tracking-widest hover:bg-luxury-black hover:text-white transition-all mt-4">
                    Download Now
                  </button>
                </div>
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
