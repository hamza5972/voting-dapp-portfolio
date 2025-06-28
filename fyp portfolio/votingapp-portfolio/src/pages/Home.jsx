import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans">

      {/* Hero Section with slide-in on load */}
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/hero-bg.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-60 min-h-screen flex flex-col justify-center items-center px-4 text-center">

          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-purple-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Decentralized Voting System
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg md:text-xl text-slate-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            A transparent, tamper-proof voting platform built on Ethereum, featuring a mobile app for secure vote casting and an admin dashboard to manage campaigns.
          </motion.p>

          <motion.a
            href="#about"
            className="mt-10 inline-block px-6 py-3 bg-purple-600 text-white text-sm font-medium rounded-full shadow-lg hover:bg-cyan-400 transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Learn More
          </motion.a>
        </div>
      </section>

      {/* About Section with scroll animation */}
      <motion.section
        id="about"
        className="px-6 py-16 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-purple-500 mb-4 border-b border-purple-400 inline-block pb-1">
          About This Project
        </h2>
        <p className="text-slate-300 leading-loose mb-4">
          This decentralized voting system was created as part of my Final Year Project to bring security and trust to digital elections.
        </p>
        <p className="text-slate-400 leading-loose mb-4">
          It includes a <span className="text-cyan-400 font-medium">React Native mobile app</span> for voters to cast blockchain-verified votes, and a <span className="text-pink-400 font-medium">React.js admin dashboard</span> to create and manage election campaigns. Blockchain ensures immutability, and OTP via Twilio ensures voter identity.
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-2 mt-4">
          <li>🔐 Immutable votes stored on Ethereum</li>
          <li>📱 Mobile-first voting with MetaMask integration</li>
          <li>🛠️ Admin can manage campaigns, candidates, and see live stats</li>
          <li>🔒 Secure OTP verification via Twilio</li>
        </ul>
      </motion.section>
    </div>
  );
};

export default Home;