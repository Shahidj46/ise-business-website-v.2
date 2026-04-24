import { motion } from "motion/react";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../constants";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white text-luxury-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="text-gold uppercase tracking-[0.3em] font-medium text-xs mb-4">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-luxury-black">
              Iconic <span className="serif-italic font-normal italic text-gold">Landmarks</span> <br />
              Shaping Our City
            </h2>
          </div>
          <Link 
            to="/projects/ongoing"
            className="px-8 py-3 border border-luxury-black/20 text-luxury-black hover:border-gold hover:text-gold transition-all uppercase tracking-widest text-xs font-bold whitespace-nowrap"
          >
            View All Projects
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.slice(0, 3).map((project, idx) => (
            <Link 
              to={`/projects/${project.status.toLowerCase().replace(" ", "-")}/${project.id}`}
              key={project.id}
              className="group block relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-gray-100 shadow-sm">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-luxury-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 bg-gold text-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 hover:bg-gold-dark shadow-xl">
                      <ArrowRight size={24} />
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-center gap-2 text-gold mb-3">
                    <MapPin size={14} />
                    <span className="text-[10px] uppercase tracking-widest font-bold">{project.location}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-luxury-black group-hover:text-gold transition-colors mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 font-light text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
