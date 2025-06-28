const Footer = () => {
  return (
    <footer className="bg-[#1E1B4B] text-slate-300 py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-purple-400 mb-4">
          📬 Contact Me
        </h2>
        <p className="mb-4 text-slate-400">
          Have questions or want to discuss this project? Feel free to reach out!
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm font-medium">
          <a
            href="mailto:your@email.com"
            className="hover:text-cyan-400 transition duration-200"
            target="_blank" rel="noopener noreferrer"
          >
            📧 your@email.com
          </a>
          <a
            href="https://github.com/yourgithub"
            className="hover:text-white transition duration-200"
            target="_blank" rel="noopener noreferrer"
          >
            🐙 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yourlinkedin"
            className="hover:text-pink-400 transition duration-200"
            target="_blank" rel="noopener noreferrer"
          >
            💼 LinkedIn
          </a>
        </div>

        <p className="text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Hamza Mushtaq. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
