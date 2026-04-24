import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-luxury-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gold flex items-center justify-center rounded-full text-white font-bold text-xl">
                ISE
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-lg tracking-tight">INNOVATIVE</span>
                <span className="text-[10px] tracking-[0.2em] font-medium uppercase text-gray-500">
                  Structural Engineering
                </span>
              </div>
            </div>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              Redefining the standards of structural engineering and premium real estate in Bangladesh since 2011.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-all text-gray-400"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold mb-8 uppercase tracking-widest text-gold text-sm">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Projects", "Gallery", "Career", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "")}`} className="text-gray-400 hover:text-white transition-colors font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-lg font-display font-bold mb-8 uppercase tracking-widest text-gold text-sm">Services</h4>
            <ul className="space-y-4">
              {["Structural Consultancy", "Real Estate Development", "Project Management", "Architectural Design", "Soil Investigation"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Map / Newsletter */}
          <div>
            <h4 className="text-lg font-display font-bold mb-8 uppercase tracking-widest text-gold text-sm">Our Location</h4>
            <div className="rounded-2xl overflow-hidden h-40 bg-white/5 grayscale hover:grayscale-0 transition-all cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=400" 
                alt="Map Background"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-xs font-bold uppercase tracking-widest bg-gold px-4 py-2 rounded-full">Gulshan, Dhaka</span>
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-4 text-center">Open 9:00 AM - 6:00 PM (Sat - Thu)</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-light">
            © 2024 Innovative Structural Engineering. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-gold font-bold text-xs uppercase tracking-widest hover:text-white transition-colors"
          >
            Back to top
            <div className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
