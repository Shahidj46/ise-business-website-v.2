import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { motion } from "motion/react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Banner Space */}
      <div className="h-32 bg-[#F8F9FA]" />

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[#003B73] text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-12">
              PRIVACY POLICY
            </h1>

            <div className="space-y-12 text-gray-700 leading-relaxed text-[15px]">
              <p>
                The privacy policy explains how Edison Real Estate collects, uses, maintains, and discloses information from users of the website.
              </p>

              <div>
                <h2 className="text-[#003B73] font-bold text-lg mb-4">Personal identification information:</h2>
                <p>
                  We may collect personal information from users in a variety of ways when they visit our site, subscribe to our newsletter, fill out a form, or take part in other activities, services, features, or resources that we offer. This information could include a user's name, email address, mailing address, or phone number. However, users always have the option to visit our site anonymously and refuse to supply personal information. Keep in mind that this may prevent them from being able to participate in certain activities that are available on our site.
                </p>
              </div>

              <div>
                <h2 className="text-[#003B73] font-bold text-lg mb-4">Non-personal identification information:</h2>
                <p>
                  We collect non-personal identification information about users whenever they interact with our site. This information may include the browser name, type of computer, and technical information about the user's connection to the site, such as the operating system and internet service providers utilized.
                </p>
              </div>

              <div>
                <h2 className="text-[#003B73] font-bold text-lg mb-4">Web browser cookies:</h2>
                <p>
                  Our site uses cookies to improve your experience. Cookies are small files that are placed on your computer by websites you visit. They are generally used for record-keeping purposes, and sometimes to track information about you. You can set your browser to refuse cookies or to alert you when cookies are being sent. However, if you do this, some parts of the site may not work properly.
                </p>
              </div>

              <div>
                <h2 className="text-[#003B73] font-bold text-lg mb-4">How we use collected information:</h2>
                <p>
                  We may collect and use your personal information to improve customer service, personalize your experience, improve our site, run promotions, contests, surveys, or other site features, and to send you the information you agreed to receive about topics of interest to you.
                </p>
              </div>

              <div>
                <h2 className="text-[#003B73] font-bold text-lg mb-4">How we protect user's information:</h2>
                <p>
                  We take appropriate measures to protect users' information from unauthorized access, alteration, disclosure, or destruction. However, we cannot guarantee complete security, and we will not be liable in the event of an attack that is difficult to defend against. If data is lost, we will do our best to retrieve it.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
