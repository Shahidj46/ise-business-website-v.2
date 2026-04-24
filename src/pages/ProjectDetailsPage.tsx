import { useParams, Link } from "react-router-dom";
import { MapPin, Download, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { PROJECTS } from "../constants";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function ProjectDetailsPage() {
  const { status, projectId } = useParams<{ status: string; projectId: string }>();
  const project = PROJECTS.find((p) => p.id === parseInt(projectId || "0"));
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/" className="text-gold hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const relatedProjects = PROJECTS.filter(p => p.status === project.status && p.id !== project.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-24">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-gray-400 mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Projects</Link>
          <span className="text-[10px]">▶</span>
          <Link to={`/projects/${status}`} className="hover:text-gold transition-colors capitalize">{status?.replace("-", " ")}</Link>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side: Gallery */}
          <div className="space-y-6">
            <div className="relative aspect-[4/3] bg-gray-100 rounded-sm overflow-hidden group">
              <img 
                src={project.thumbnails?.[activeImage] || project.image} 
                alt={project.name} 
                className="w-full h-full object-cover transition-transform duration-700 active:scale-110"
              />
              <button 
                onClick={() => setActiveImage((prev) => (prev > 0 ? prev - 1 : (project.thumbnails?.length || 1) - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setActiveImage((prev) => (prev < (project.thumbnails?.length || 1) - 1 ? prev + 1 : 0))}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-2">
              {project.thumbnails?.map((thumb, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-24 aspect-[4/3] rounded-sm overflow-hidden border-2 transition-all shrink-0 ${activeImage === idx ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"}`}
                >
                  <img src={thumb} className="w-full h-full object-cover" alt={`Thumb ${idx}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Info */}
          <div className="flex flex-col">
            <div className="mb-2 text-gold font-bold text-xs uppercase tracking-[0.3em] flex items-center gap-2">
               Projects <span className="text-[10px]">▶</span> {project.status}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-luxury-black mb-2 uppercase leading-tight">
              {project.name}
            </h1>
            <p className="text-gray-500 font-display font-medium text-lg md:text-xl mb-10 tracking-wide uppercase opacity-70">
              {project.subtitle}
            </p>

            <div className="flex items-start gap-3 text-gray-600 mb-12 py-6 border-y border-gray-100">
              <MapPin size={20} className="text-gold mt-1 shrink-0" />
              <span className="text-sm md:text-base font-medium">{project.location}</span>
            </div>

            <div className="space-y-6">
               <h3 className="text-gold font-bold text-sm uppercase tracking-widest border-b border-gold/20 pb-2 inline-block">Overview</h3>
               <p className="text-gray-600 leading-relaxed text-lg">
                 {project.description}
               </p>
            </div>
          </div>
        </div>

        {/* Specification & Progress */}
        <div className="mt-24 grid lg:grid-cols-2 gap-16 items-start">
          <div className="bg-gray-50 p-10 md:p-16 rounded-sm border border-gray-100">
            <h2 className="text-2xl font-display font-bold text-luxury-black mb-10 uppercase tracking-widest border-l-4 border-gold pl-4">Specification</h2>
            <div className="space-y-5">
              {project.specifications && Object.entries(project.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="text-xs uppercase tracking-widest font-bold text-gray-500">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className="text-sm font-bold text-luxury-black text-right">{value}</span>
                </div>
              ))}
            </div>
            <button className="mt-12 w-full md:w-auto px-10 py-4 border border-luxury-black text-luxury-black font-bold text-xs uppercase tracking-widest hover:bg-luxury-black hover:text-white transition-all flex items-center justify-center gap-3">
              <Download size={18} />
              Download Brochure
            </button>
          </div>

          <div className="bg-gray-50 p-10 md:p-16 rounded-sm border border-gray-100 h-full flex flex-col justify-center">
            <h2 className="text-2xl font-display font-bold text-luxury-black mb-16 uppercase tracking-widest text-center">Project Progress</h2>
            <div className="relative pt-1">
              <div className="flex mb-10 items-center justify-between text-xs font-bold uppercase tracking-tighter">
                <div className="text-gray-500">Project <br/> Start</div>
                <div className="text-gray-500 text-right">Successfully <br/> Completed</div>
              </div>
              <div className="relative h-1 mb-4 flex rounded bg-gray-200">
                <div 
                  style={{ width: `${project.progress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gold transition-all duration-1000 relative"
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-gold rounded-full border-4 border-white shadow-lg flex items-center justify-center text-[10px]">
                    {project.progress}%
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-[10px] font-bold text-gray-400 mt-4">
                <span>0%</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Location/Map */}
        <div className="mt-24 grid lg:grid-cols-2 gap-0 overflow-hidden rounded-sm border border-gray-100 bg-gray-50">
          <div className="p-16 flex flex-col justify-center">
            <h2 className="text-3xl font-display font-bold text-luxury-black mb-6 uppercase tracking-tighter">Project <br/> Location</h2>
            <p className="text-gray-600 font-medium leading-relaxed">
              Address: {project.location}
            </p>
          </div>
          <div className="h-[400px] bg-gray-200 relative">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
              alt="Map placeholder" 
              className="w-full h-full object-cover opacity-80 grayscale active:grayscale-0 transition-all"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl pulse-animation">
                <MapPin className="text-gold" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <div className="mt-32">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-display font-bold text-luxury-black uppercase tracking-tight">Related Projects</h2>
            <div className="flex gap-2">
              <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedProjects.map((rp) => (
              <Link to={`/projects/${status}/${rp.id}`} key={rp.id} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6 border border-gray-100">
                  <img 
                    src={rp.image} 
                    alt={rp.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {rp.progress === 100 && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="px-8 py-3 bg-white text-luxury-black font-bold text-xs uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        Sold Out
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-display font-bold text-luxury-black group-hover:text-gold transition-colors">{rp.name}</h3>
                <div className="flex items-center gap-2 text-gray-500 text-[10px] uppercase font-bold mt-2">
                  <MapPin size={12} className="text-gold" />
                  {rp.location.split(',')[0]}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
