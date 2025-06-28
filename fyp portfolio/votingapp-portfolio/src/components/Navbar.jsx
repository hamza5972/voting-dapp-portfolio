import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
   <nav className="bg-gradient-to-r from-purple-800 via-indigo-900 to-purple-800 py-5 shadow-md">

      <div className="container mx-auto flex items-center justify-between px-6">
        
        {/* Left: Site Title */}
        <div className="text-purple-400 text-xl font-bold tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Voting DApp
        </div>

        {/* Center: Nav Links */}
        <ul className="flex space-x-12 text-lg font-bold tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          <li>
            <Link
              to="/"
              className={`transition-colors duration-300 hover:text-blue-500 ${
                location.pathname === '/' ? 'text-blue-400' : 'text-gray-300'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className={`transition-colors duration-300 hover:text-blue-500 ${
                location.pathname === '/features' ? 'text-blue-400' : 'text-gray-300'
              }`}
            >
              Features
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
