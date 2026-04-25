// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import WhatsAppButton from "../components/WhatsAppButton";
// import { motion } from "motion/react";
// import { Upload } from "lucide-react";

// export default function CareerPage() {
//   return (
//     <main className="min-h-screen bg-white">
//       <Navbar />
      
//       {/* Career Banner */}
//       <div className="relative h-[450px] w-full overflow-hidden">
//         <img 
//           src="https://images.unsplash.com/photo-1497214532025-9ba49f06429a?auto=format&fit=crop&q=80&w=2000" 
//           alt="Career Growth" 
//           className="w-full h-full object-cover grayscale opacity-80"
//         />
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="absolute inset-0 flex items-center px-12 md:px-24">
//           <motion.h1 
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             className="text-white text-5xl md:text-7xl font-display font-bold uppercase tracking-tight"
//           >
//             CAREER
//           </motion.h1>
//         </div>
//       </div>

//       {/* Why Join Us Section */}
//       <section className="py-24 bg-[#F8F9FA]">
//         <div className="max-w-[1400px] mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="max-w-4xl"
//           >
//             <h2 className="text-[#003B73] text-4xl font-display font-bold uppercase tracking-tight mb-12">
//               WHY JOIN US?
//             </h2>
//             <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
//               <p>
//                 We want to serve the purpose of living a luxurious and comfortable life, offering impeccable housing facilities that connote magnificence, elegance and comfort. We believe, we would not be able to achieve this without a dynamic and collaborative workforce. Hence, we strongly promote a healthy work environment and aim to attract and select a diverse team of individuals; establishing equal opportunity for all, irrespective of race, age, gender, class, ethnicity, disability, location and religion.
//               </p>
//               <p>
//                 Therefore at ISE, you will not only be able to discover a career of your passion, but also be able to collaborate and learn with and from a team of diverse and proficient individuals.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Application Form Section */}
//       <section className="py-24 bg-white">
//         <div className="max-w-[1200px] mx-auto px-6">
//           <div className="flex flex-col lg:flex-row shadow-2xl rounded-sm overflow-hidden border border-gray-100">
//             {/* Left Image Side */}
//             <div className="lg:w-1/2 relative h-[400px] lg:h-auto">
//               <img 
//                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
//                 alt="Workspace" 
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-blue-900/10" />
//             </div>

//             {/* Right Form Side */}
//             <div className="lg:w-1/2 p-10 md:p-16 bg-white">
//               <h3 className="text-2xl font-display font-bold text-luxury-black mb-10 text-center uppercase tracking-widest">
//                 APPLY NOW
//               </h3>
              
//               <form className="space-y-4">
//                 <div>
//                   <input 
//                     type="text" 
//                     placeholder="Full Name *" 
//                     className="w-full h-12 border border-gray-300 px-4 focus:border-gold outline-none text-sm transition-colors"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <input 
//                     type="tel" 
//                     placeholder="Phone Number *" 
//                     className="w-full h-12 border border-gray-300 px-4 focus:border-gold outline-none text-sm transition-colors"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <input 
//                     type="email" 
//                     placeholder="Email Address*" 
//                     className="w-full h-12 border border-gray-300 px-4 focus:border-gold outline-none text-sm transition-colors"
//                     required
//                   />
//                 </div>
//                 <div>
//                     <select className="w-full h-12 border border-gray-300 px-4 focus:border-gold outline-none text-sm bg-white transition-colors">
//                         <option value="">Apply For The Position *</option>
//                         <option value="engineer">Structural Engineer</option>
//                         <option value="architect">Architect</option>
//                         <option value="sales">Sales Executive</option>
//                         <option value="marketing">Marketing Specialist</option>
//                     </select>
//                 </div>
//                 <div className="flex gap-4">
//                   <input 
//                     type="text" 
//                     placeholder="Year Of Experience *" 
//                     className="flex-1 h-12 border border-gray-300 px-4 focus:border-gold outline-none text-sm transition-colors"
//                     required
//                   />
//                   <label className="flex-1 flex items-center justify-center gap-2 h-12 bg-gray-100 border border-transparent hover:border-gold cursor-pointer transition-all">
//                     <Upload size={16} className="text-gray-500" />
//                     <span className="text-sm text-gray-500">Upload your CV</span>
//                     <input type="file" className="hidden" />
//                   </label>
//                 </div>
//                 <button 
//                   type="submit" 
//                   className="w-full h-12 border border-[#4CAF50] text-[#4CAF50] font-bold uppercase tracking-widest text-sm hover:bg-[#4CAF50] hover:text-white transition-all mt-6"
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//       <WhatsAppButton />
//     </main>
//   );
// }

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { motion } from "motion/react";
import { Upload } from "lucide-react";

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* ✅ Career Banner (ONLY this image from public folder) */}
      <div className="relative h-[450px] w-full overflow-hidden">
        <img 
          src="/career.jpg"   // 👈 public folder image
          alt="Career" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center px-12 md:px-24">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-5xl md:text-7xl font-display font-bold uppercase tracking-tight"
          >
            CAREER
          </motion.h1>
        </div>
      </div>

      {/* Why Join Us */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-[#003B73] text-4xl font-display font-bold uppercase tracking-tight mb-12">
              WHY JOIN US?
            </h2>

            <div className="space-y-6 text-gray-700 text-[15px] leading-relaxed">
              <p>
                We want to serve the purpose of living a luxurious and comfortable life, offering impeccable housing facilities that connote magnificence, elegance and comfort.
              </p>
              <p>
                At ISE, you will not only discover a career of your passion, but also collaborate with a team of skilled professionals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row shadow-2xl rounded-sm overflow-hidden border border-gray-100">

            {/* ❌ এই image change হবে না */}
            <div className="lg:w-1/2 relative h-[400px] lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Workspace" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10" />
            </div>

            {/* Form */}
            <div className="lg:w-1/2 p-10 md:p-16 bg-white">
              <h3 className="text-2xl font-display font-bold text-black mb-10 text-center uppercase tracking-widest">
                APPLY NOW
              </h3>
              
              <form className="space-y-4">
                
                <input 
                  type="text" 
                  placeholder="Full Name *" 
                  className="w-full h-12 border px-4 focus:border-gold outline-none text-sm"
                  required
                />

                <input 
                  type="tel" 
                  placeholder="Phone Number *" 
                  className="w-full h-12 border px-4 focus:border-gold outline-none text-sm"
                  required
                />

                <input 
                  type="email" 
                  placeholder="Email Address*" 
                  className="w-full h-12 border px-4 focus:border-gold outline-none text-sm"
                  required
                />

                <select className="w-full h-12 border px-4 focus:border-gold outline-none text-sm">
                  <option>Apply For The Position *</option>
                  <option>Engineer</option>
                  <option>Architect</option>
                  <option>Sales Executive</option>
                </select>

                <div className="flex gap-4">
                  <input 
                    type="text" 
                    placeholder="Experience *" 
                    className="flex-1 h-12 border px-4 focus:border-gold outline-none text-sm"
                  />

                  <label className="flex-1 flex items-center justify-center gap-2 h-12 bg-gray-100 cursor-pointer">
                    <Upload size={16} />
                    Upload CV
                    <input type="file" className="hidden" />
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full h-12 border border-green-500 text-green-500 font-bold hover:bg-green-500 hover:text-white transition"
                >
                  SUBMIT
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}