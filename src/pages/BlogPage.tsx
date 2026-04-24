import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { motion } from "motion/react";

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      date: "02 March 2023",
      title: "ক্রেতাদের পছন্দের শীর্ষে বসুন্ধরা আবাসিক এলাকা",
      image: "https://images.unsplash.com/photo-1590644365607-1c5a91bd678d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      date: "30 January 2023",
      title: "Edison Desdemona: launching of an iconic residence",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      date: "09 January 2023",
      title: "An Ideal Space",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      date: "02 March 2023",
      title: "ক্রেতাদের পছন্দের শীর্ষে বসুন্ধরা আবাসিক এলাকা",
      image: "https://images.unsplash.com/photo-1590644365607-1c5a91bd678d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      date: "30 January 2023",
      title: "Edison Desdemona: launching of an iconic residence",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      date: "09 January 2023",
      title: "An Ideal Space",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Blog Banner */}
      <div className="relative h-[450px] w-full overflow-hidden bg-[#F2F4F7]">
        {/* Background Sketch (Mockup with opacity) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=2000" 
            alt="Architectural Sketch" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[#003B73] md:text-white text-5xl md:text-7xl font-display font-bold uppercase tracking-tight mb-2 drop-shadow-sm">
                BLOG
            </h1>
            <div className="mt-4">
                <p className="text-[#003B73] text-2xl md:text-4xl font-light">Beginning of</p>
                <p className="text-[#003B73] text-3xl md:text-6xl font-display font-bold">A New Living Standard</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Blog Grid Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-x-10 gap-y-16">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-6">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-500 text-sm">{blog.date}</p>
                  <h3 className="text-xl font-display font-bold text-luxury-black group-hover:text-[#003B73] transition-colors leading-tight min-h-[56px]">
                    {blog.title}
                  </h3>
                  <button className="px-8 py-3 border border-luxury-black text-luxury-black font-bold text-xs uppercase tracking-widest hover:bg-luxury-black hover:text-white transition-all mt-4">
                    Explore
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-24 flex items-center justify-center gap-2">
            <button className="w-10 h-10 border border-gray-300 flex items-center justify-center text-sm hover:border-[#003B73] hover:text-[#003B73] transition-colors">1</button>
            <button className="w-10 h-10 border border-gray-300 flex items-center justify-center text-sm hover:border-[#003B73] hover:text-[#003B73] transition-colors text-gray-500">2</button>
            <button className="w-10 h-10 border border-gray-300 flex items-center justify-center text-sm hover:border-[#003B73] hover:text-[#003B73] transition-colors text-gray-500">3</button>
            <button className="px-4 h-10 border border-gray-300 flex items-center justify-center text-sm hover:border-[#003B73] hover:text-[#003B73] transition-colors text-gray-500">Next »</button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
