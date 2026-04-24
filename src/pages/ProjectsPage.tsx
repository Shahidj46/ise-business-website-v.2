import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronDown, MapPin, LayoutGrid } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { PROJECTS } from "../constants";

export default function ProjectsPage() {
  const { status } = useParams<{ status: string }>();
  const [currentStatus, setCurrentStatus] = useState(status || "Ongoing");
  const [activeType, setActiveType] = useState("Type");
  const [activeLocation, setActiveLocation] = useState("Location");

  useEffect(() => {
    if (status) {
      // Normalize status from URL (e.g. "handed-over" to "Handed Over")
      const normalized = status.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
      setCurrentStatus(normalized);
    }
    window.scrollTo(0, 0);
  }, [status]);

  const filteredProjects = PROJECTS.filter(p => {
    const statusMatch = p.status.toLowerCase().replace(" ", "-") === (status || "ongoing").toLowerCase();
    return statusMatch;
  });

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Page Banner */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          alt="Projects Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gold uppercase tracking-[0.4em] font-bold text-sm mb-4">OUR PORTFOLIO</p>
            <h1 className="text-white text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter">
                {currentStatus} <span className="text-gold">Projects</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="py-12 bg-[#F8F9FA] border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Status Dropdown */}
          <div className="relative group">
            <button className="w-full h-14 bg-white border border-gray-300 px-6 flex items-center justify-between text-gray-700 font-medium hover:border-gold transition-colors">
              {currentStatus}
              <ChevronDown size={18} className="text-gray-400 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
              {["Ongoing", "Upcoming", "Handed Over", "Ready"].map(s => (
                <Link 
                  key={s}
                  to={`/projects/${s.toLowerCase().replace(" ", "-")}`}
                  className="block px-6 py-4 hover:bg-gray-50 hover:text-gold transition-colors border-b border-gray-100 last:border-0"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Type Dropdown */}
          <div className="relative group">
            <button className="w-full h-14 bg-white border border-gray-300 px-6 flex items-center justify-between text-gray-700 font-medium hover:border-gold transition-colors">
              {activeType}
              <ChevronDown size={18} className="text-gray-400 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
              {["Residential", "Commercial", "Mixed-Use"].map(t => (
                <button 
                  key={t}
                  onClick={() => setActiveType(t)}
                  className="w-full text-left px-6 py-4 hover:bg-gray-50 hover:text-gold transition-colors border-b border-gray-100 last:border-0"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Location Dropdown */}
          <div className="relative group">
            <button className="w-full h-14 bg-white border border-gray-300 px-6 flex items-center justify-between text-gray-700 font-medium hover:border-gold transition-colors">
              {activeLocation}
              <ChevronDown size={18} className="text-gray-400 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
              {["Gulshan", "Banani", "Uttara", "Bashundhara", "Dhanmondi"].map(l => (
                <button 
                  key={l}
                  onClick={() => setActiveLocation(l)}
                  className="w-full text-left px-6 py-4 hover:bg-gray-50 hover:text-gold transition-colors border-b border-gray-100 last:border-0"
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProjects.map((project) => (
                <Link 
                  key={project.id} 
                  to={`/projects/${status}/${project.id}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-6 border border-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-500">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-gold px-4 py-1 text-white text-[10px] font-bold uppercase tracking-widest">
                      {project.status}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gold mb-2">
                    <MapPin size={14} />
                    <span className="text-[10px] uppercase tracking-widest font-bold">{project.location}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#003B73] mb-2 group-hover:text-gold transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-500 font-light text-sm line-clamp-2">
                    {project.description}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No projects found for this category.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
