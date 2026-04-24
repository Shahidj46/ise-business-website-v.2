import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white text-luxury-black overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold uppercase tracking-[0.3em] font-medium text-xs mb-4">Contact Us</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8 text-luxury-black">
              Schedule a <span className="serif-italic font-normal italic text-gold">Structural</span> <br /> Consultation
            </h2>
            <p className="text-gray-600 font-light text-lg mb-12 leading-relaxed">
              Whether you are planning a high-rise residential complex or a sophisticated commercial hub, 
              our expert engineers are ready to bring your vision to life with precision and safety.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                  <Phone size={20} className="text-gold group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">Call Us</h4>
                  <p className="text-xl font-display font-medium text-luxury-black">+880 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                  <Mail size={20} className="text-gold group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">Email Us</h4>
                  <p className="text-xl font-display font-medium text-luxury-black">info@ise-bd.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                  <MapPin size={20} className="text-gold group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">Visit Office</h4>
                  <p className="text-xl font-display font-medium text-luxury-black">Level 8, Crystal Palace, Gulshan 2, Dhaka</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100"
          >
            <h3 className="text-luxury-black text-2xl font-display font-bold mb-8">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl text-luxury-black focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+880"
                    className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl text-luxury-black focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl text-luxury-black focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl text-luxury-black focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-dark text-white font-bold py-5 rounded-xl transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95"
              >
                BOOK A MEETING
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
