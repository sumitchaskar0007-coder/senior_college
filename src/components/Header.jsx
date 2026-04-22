import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* 🔒 Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },

    { name: "Departments", path: "/departments" },
    { name: "Admissions", path: "/admissions" },
    { name: "Facilities", path: "/facilities" },
    { name: "Student Corner", path: "/student-corner" },
    { name: "IQAC", path: "/iqac" },
    { name: "NAAC", path: "/naac" },
    { name: "NIRF", path: "/nirf" },
    { name: "Research", path: "/research" },
    { name: "Alumni", path: "/alumni" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur"
          }`}
      >
        {/* TOP BAR */}
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          {/* LOGO */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/images/logo/jadhavar_logo.png"
              alt="College Logo"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* COLLEGE NAME */}
          <div className="flex-1">
            <h1 className="text-lg md:text-2xl font-bold text-[#0a2a66] leading-tight">
              Dr. Sudhakarrao Jadhavar Arts, Commerce & Science College
            </h1>
            <p className="hidden sm:block text-sm text-gray-600">
              NAAC Accredited | Affiliated to Savitribai Phule Pune University
            </p>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:block bg-[#0a2a66]">
          <ul className="flex justify-center">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block px-4 py-3 text-sm font-medium transition ${location.pathname === link.path
                    ? "bg-[#143f8f] text-white"
                    : "text-white/90 hover:bg-[#143f8f]"
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.header>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-white shadow-xl lg:hidden"
          >
            <div className="p-5 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-md text-sm font-medium ${location.pathname === link.path
                    ? "bg-[#0a2a66] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
