import { motion } from "framer-motion";

const Features = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans">

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/hero-features-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />

        <motion.div
          className="relative z-10 max-w-3xl px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-500 tracking-tight">
            Explore the Key Features
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Designed for trust, transparency, and a seamless voting experience.
          </p>
        </motion.div>
      </section>

      {/* Mobile App Section */}
      <motion.section
        className="py-20 px-6 md:px-20 bg-[#1E293B]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-purple-500 mb-4">
              📱 Mobile App Voting Interface
            </h2>
            <p className="text-slate-300">
              Voters can log in, view active campaigns, and cast votes securely via MetaMask and Twilio OTP. Built with React Native for seamless cross-device support.
            </p>
          </div>
          <div className="bg-slate-800 rounded-xl h-80 flex items-center justify-center border border-slate-700">
            <span className="text-slate-500">Upload mobile UI screenshot here</span>
          </div>
        </div>
      </motion.section>

      {/* Admin Dashboard Section */}
      <motion.section
        className="py-20 px-6 md:px-20 bg-[#0F172A]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-800 rounded-xl h-80 flex items-center justify-center border border-slate-700">
            <span className="text-slate-500">Upload admin panel UI screenshot here</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">
              🖥️ Admin Dashboard
            </h2>
            <p className="text-slate-300">
              Admins can create election campaigns, manage candidates, set deadlines, and track votes in real time. Developed in React with secure backend integration.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Blockchain Feature Section */}
      <motion.section
        className="py-20 px-6 md:px-20 bg-[#1E293B]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-pink-400 mb-4">
            🔗 Blockchain-Powered Security
          </h2>
          <p className="text-slate-300">
            Every vote is recorded on the Ethereum blockchain through a Solidity smart contract. No vote can be changed, deleted, or faked — ensuring full transparency.
          </p>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        className="py-20 px-6 text-center bg-[#0F172A]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-purple-500 mb-4">
          Empowering Fair Elections with Technology
        </h3>
        <p className="text-slate-400 max-w-xl mx-auto">
          This decentralized voting system bridges the gap between trust and technology. Built for security. Built for the future.
        </p>
      </motion.section>
    </div>
  );
};

export default Features;
