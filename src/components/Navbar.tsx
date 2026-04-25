import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router-dom";


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about", dropdown: ["Our Team", "Privacy Policy"] },
    { name: "Projects", href: "/#projects", dropdown: ["Ongoing", "Upcoming", "Handed Over", "Ready"] },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/#gallery", dropdown: ["Newsletter", "Image Gallery", "Video Gallery"] },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/#contact" },
    { name: "Landowner", href: "/landowner" },
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith("/#") || href === "/") {
      const id = href === "/" ? "home" : href.split("#")[1];
      if (window.location.pathname === "/") {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/80 shadow-xl py-2" : "bg-black/40 backdrop-blur-sm py-3"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => handleLinkClick("/")} 
          className="flex items-center group cursor-pointer shrink-0"
        >
         <img 
            src="/logo.jpg"
            alt="ISE Logo"
            className="h-16 w-auto object-contain group-hover:scale-105 transition-transform"
          />
        </button>

        {/* Desktop Links - Centered */}
        <div className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
            >
              <button
                onClick={() => handleLinkClick(link.href)}
                className="text-[18px] font-medium hover:text-gold transition-colors flex items-center gap-1 text-white"
              >
                {link.name}
                {link.dropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`} />}
              </button>

              {/* Enhanced Dropdown */}
              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-56 pt-6"
                    >
                      <div className="bg-black/90 backdrop-blur-xl shadow-2xl relative">
                        {/* Specific Design: Thick White Top Bar */}
                        <div className="w-16 h-1 bg-white absolute top-0 left-6" />
                        
                        <div className="flex flex-col py-2">
                          {link.dropdown.map((item, idx) => {
                            const isProjectDropdown = link.name === "Projects" && ["Ongoing", "Upcoming", "Handed Over", "Ready"].includes(item);
                            const isTeamLink = link.name === "About" && item === "Our Team";
                            const isPrivacyLink = link.name === "About" && item === "Privacy Policy";
                            const isNewsletter = link.name === "Gallery" && item === "Newsletter";
                            const isImageGallery = link.name === "Gallery" && item === "Image Gallery";
                            const isVideoGallery = link.name === "Gallery" && item === "Video Gallery";
                            
                            const dropdownHref = isProjectDropdown 
                              ? `/projects/${item.toLowerCase().replace(" ", "-")}`
                              : isTeamLink
                                ? "/team"
                                : isPrivacyLink
                                  ? "/privacy-policy"
                                  : isNewsletter
                                    ? "/gallery/newsletter"
                                    : isImageGallery
                                      ? "/gallery/images"
                                      : isVideoGallery
                                        ? "/gallery/videos"
                                        : `#${item.toLowerCase().replace(" ", "-")}`;

                            return (
                              <div key={item}>
                                {isProjectDropdown || isTeamLink || isPrivacyLink || isNewsletter || isImageGallery || isVideoGallery ? (
                                  <Link
                                    to={dropdownHref}
                                    className="block px-8 py-4 text-white text-[14px] font-medium hover:bg-white/10 hover:text-gold transition-all"
                                  >
                                    {item}
                                  </Link>
                                ) : (
                                  <a
                                    href={dropdownHref}
                                    className="block px-8 py-4 text-white text-[14px] font-medium hover:bg-white/10 hover:text-gold transition-all"
                                  >
                                    {item}
                                  </a>
                                )}
                                {idx < link.dropdown.length - 1 && (
                                  <div className="mx-8 h-[1px] bg-white/10" />
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Call Button - Boxed on right */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:16760"
            className="flex items-center gap-3 px-5 py-2 hover:bg-gold/10 transition-all border rounded-sm border-white text-white"
          >
            <Phone size={18} />
            <span className="text-sm font-bold tracking-widest">16760</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 transition-colors text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl py-8 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-lg font-display font-medium text-luxury-black hover:text-gold transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <a
                href="tel:+880123456789"
                className="flex items-center gap-2 px-8 py-3 bg-gold text-white rounded-full font-bold w-full justify-center"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
