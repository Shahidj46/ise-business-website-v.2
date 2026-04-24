import { Shield, Clock, Diamond, Settings } from "lucide-react";
import { motion } from "motion/react";

export default function Features() {
  const features = [
    {
      icon: <Settings className="text-gold" size={32} />,
      title: "Engineering Expertise",
      description: "Our structural designs are vetted by international standards, ensuring unmatched safety for generations."
    },
    {
      icon: <Diamond className="text-gold" size={32} />,
      title: "Modern Architecture",
      description: "We don't just build walls; we create aesthetic masterpieces that redefine urban living spaces."
    },
    {
      icon: <Clock className="text-gold" size={32} />,
      title: "On-Time Delivery",
      description: "Respecting your time is our priority. We maintain a flawless record of project completions on schedule."
    },
    {
      icon: <Shield className="text-gold" size={32} />,
      title: "Quality Materials",
      description: "From the best local vendors to global standard alloys, we never compromise on what goes into your building."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left max-w-3xl mb-20">
          <p className="text-gold uppercase tracking-[0.3em] font-medium text-xs mb-4">Why Choose ISE</p>
          <h2 className="text-luxury-black text-4xl md:text-5xl font-display font-bold leading-tight">
            The Pinnacle of <br /> <span className="serif-italic font-normal italic text-gold">Reliability</span> and Design
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group p-8 rounded-2xl hover:bg-luxury-black transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-gold/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-luxury-black group-hover:text-white mb-4 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 group-hover:text-gray-400 font-light leading-relaxed transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
