import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Collection', path: '/collection' },
    { label: 'Our Craft', path: '/our-craft' },
    { label: 'Accessories', path: '/accessories' },
    { label: 'Journal', path: '/journal' },
  ];

  // Determine navbar background and text color based on scroll & page
  const isTransparent = isHome && !scrolled;
  const navBg = isTransparent
    ? 'bg-transparent text-cream border-transparent'
    : 'bg-[#F5EFE4]/95 backdrop-blur-md text-[#2A2420] border-[#5C3D2E]/10 shadow-[0_2px_12px_rgba(42,36,32,0.03)]';

  const linkActiveColor = isTransparent
    ? 'text-white font-medium after:w-full'
    : 'text-[#5C3D2E] font-medium after:w-full';

  const linkBaseColor = isTransparent
    ? 'text-cream/90 hover:text-white'
    : 'text-[#2A2420]/80 hover:text-[#5C3D2E]';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 border-b ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex-1 flex items-center justify-start min-w-0">
          <BrandLogo variant={isTransparent ? 'light' : 'dark'} size="md" />
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-1 text-xs uppercase tracking-[0.2em] font-medium transition-colors ${
                  isActive ? linkActiveColor : linkBaseColor
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#C8A96E] after:transition-all after:duration-300 ${
                  isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Early Access Button & Mobile Toggle */}
        <div className="flex items-center justify-end space-x-2 sm:space-x-4 shrink-0">
          <Link
            to="/early-access"
            className="inline-flex items-center justify-center px-3 py-1.5 sm:px-5 sm:py-2.5 bg-[#7A9E7E] hover:bg-[#688B6C] text-[#FAF7F0] text-[10px] sm:text-xs font-medium uppercase tracking-[0.14em] sm:tracking-[0.18em] rounded-sm transition-all duration-300 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="hidden sm:inline mr-1">Get </span>Early Access
          </Link>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-1.5 rounded-sm transition-colors ${
              isTransparent ? 'text-cream hover:text-white' : 'text-[#2A2420] hover:text-[#5C3D2E]'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5EFE4] text-[#2A2420] border-b border-[#5C3D2E]/15 px-6 py-8 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-[0.2em] py-2 border-b border-[#5C3D2E]/10 flex justify-between items-center ${
                  location.pathname === link.path ? 'text-[#5C3D2E] font-semibold' : 'text-[#2A2420]/80'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-[#C8A96E] text-xs">→</span>
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/early-access"
                className="w-full inline-flex items-center justify-center py-3.5 bg-[#7A9E7E] text-[#FAF7F0] text-xs uppercase tracking-[0.2em] font-medium rounded-sm shadow-md"
              >
                Get Early Access
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
