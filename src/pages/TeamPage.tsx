import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { motion } from "motion/react";

export default function TeamPage() {

  const managementTeam = [
    {
      name: "Engr. Pran Gopal",
      role: "Chief Executive Officer (CEO)",
      image: "/ceo.jpeg",
    },
    {
      name: "Engr. Md. Shah Alam",
      role: "Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Engr. Md. Mostafizur Rahman",
      role: "Director",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    }
  ];

  const financeTeam = [
    {
      name: "Sathi Rahman",
      role: "Accounts & Finance Officer",
      image: "/sathi.jpeg",
    },
    {
      name: "Ms. Nusrat Jahan",
      role: "Accounts Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Mr. Rakib Hasan",
      role: "Finance Executive",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Banner */}
      <div className="relative h-[450px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=2000"
          alt="Team Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center px-12 md:px-24">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-5xl md:text-7xl font-display font-bold uppercase"
          >
            TEAM
          </motion.h1>
        </div>
      </div>

      {/* Management Team */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-[#003B73] text-3xl font-bold border-b-2 border-[#003B73] inline-block pb-2">
              MANAGEMENT TEAM
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {managementTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden shadow-lg mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#003B73]">
                  {member.name}
                </h3>
                <p className="text-gray-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Finance Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-[#003B73] text-3xl font-bold border-b-2 border-[#003B73] inline-block pb-2">
              FINANCE TEAM
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {financeTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden shadow-lg mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#003B73]">
                  {member.name}
                </h3>
                <p className="text-gray-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}