import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { motion } from "motion/react";

export default function LandownerPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Landowner Banner */}
      <div className="relative h-[450px] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000" 
          alt="Landowner Partnership" 
          className="w-full h-full object-cover grayscale opacity-80"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center px-12 md:px-24">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-5xl md:text-7xl font-display font-bold uppercase tracking-tight"
          >
            LANDOWNER
          </motion.h1>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-[#003B73] text-4xl font-display font-bold uppercase tracking-tight mb-8">
                LANDOWNERS
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
                <p>
                  ISE Group is a leading Bangladeshi conglomerate, established in 2009 to enhance its customer's lives through reliable products and services. It ventured into the real estate sector of Bangladesh in 2015.
                </p>
                <p className="font-bold text-luxury-black">Why choose ISE Real Estate?</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Exemplary track record of timely delivery</li>
                    <li>Superior structural integrity and design</li>
                    <li>Highly transparent partnership model</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                alt="Architecture" 
                className="w-full h-[400px] object-cover rounded-sm shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-bold text-luxury-black mb-12 uppercase tracking-widest text-[#003B73]"
          >
            MEET THE PROFESSIONALS
          </motion.h3>
          
          <form className="space-y-12">
            {/* Land Information */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-luxury-black border-b border-gray-200 pb-2">Land Information</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <input type="text" placeholder="Locality" className="h-12 border border-gray-300 px-4 focus:border-gold outline-none text-sm" />
                <input type="text" placeholder="Address*" className="h-12 border border-gray-300 px-4 focus:border-gold outline-none text-sm" required />
                <input type="text" placeholder="Size Of The Land In Kathas*" className="h-12 border border-gray-300 px-4 focus:border-gold outline-none text-sm" required />
                <input type="text" placeholder="Width Of The Road In Front (In Feet)*" className="h-12 border border-gray-300 px-4 focus:border-gold outline-none text-sm" required />
                <select className="h-12 border border-gray-300 px-4 focus:border-gold outline-none text-sm bg-white">
                  <option value="">Select Category</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                </select>
                <input type="text" placeholder="Facing*" className="h-12 border border-gray-300 px-4 focus:border-gold outline-none text-sm" required />
                <select className="h-12 border border-gray-300 px-4 focus:border-gold outline-none text-sm bg-white">
                  <option value="">Attractive Features (If Any)</option>
                  <option value="corner">Corner Plot</option>
                  <option value="lakeview">Lake View</option>
                  <option value="parkfacing">Park Facing</option>
                </select>
              </div>
            </div>

            {/* Landowners Information */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-luxury-black border-b border-gray-200 pb-2">Landowners Information</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <input type="text" placeholder="Name Of The Landowner*" className="h-12 border border-gray-300 px-4 focus:border-gold outline-none text-sm" required />
                <input type="email" placeholder="Email ID*" className="h-12 border border-gray-300 px-4 focus:border-gold outline-none text-sm" required />
                <input type="tel" placeholder="Contact Number*" className="h-12 border border-gray-300 px-4 focus:border-gold outline-none text-sm" required />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-48 h-12 border border-[#4CAF50] text-[#4CAF50] font-bold uppercase tracking-widest text-sm hover:bg-[#4CAF50] hover:text-white transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
