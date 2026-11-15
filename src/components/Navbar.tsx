import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { AnnouncementBar } from './AnnouncementBar';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
    : 'bg-[#F7F0E3]/95 backdrop-blur-md text-[#1A1208] border-[#1A1208]/10 shadow-[0_2px_14px_rgba(26,18,8,0.05)]';

  const linkActiveColor = isTransparent
    ? 'text-white font-medium after:w-full'
    : 'text-[#D4541A] font-medium after:w-full';

  const linkBaseColor = isTransparent
    ? 'text-cream/90 hover:text-white'
    : 'text-[#1A1208]/80 hover:text-[#D4541A]';

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Persistent Announcement Bar: SEASON 01 WAITLIST OPEN — 247 SPOTS CLAIMED */}
      <AnnouncementBar />

      <div className={`transition-all duration-300 border-b ${navBg}`}>
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
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#D4541A] after:transition-all after:duration-300 ${
                    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Burnt Orange Waitlist Button & Mobile Toggle */}
          <div className="flex items-center justify-end space-x-2 sm:space-x-4 shrink-0">
            <Link
              to="/early-access"
              className="inline-flex items-center justify-center px-3.5 py-1.5 sm:px-5 sm:py-2.5 bg-[#D4541A] hover:bg-[#BA4512] text-[#F7F0E3] text-[10px] sm:text-xs font-medium uppercase tracking-[0.16em] sm:tracking-[0.18em] rounded-sm transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="hidden sm:inline mr-1">Join </span>Waitlist
            </Link>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-1.5 rounded-sm transition-colors ${
                isTransparent ? 'text-cream hover:text-white' : 'text-[#1A1208] hover:text-[#D4541A]'
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
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F0E3] text-[#1A1208] border-b border-[#1A1208]/15 px-6 py-8 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-[0.2em] py-2 border-b border-[#1A1208]/10 flex justify-between items-center ${
                  location.pathname === link.path ? 'text-[#D4541A] font-semibold' : 'text-[#1A1208]/80'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-[#C8A96E] text-xs">→</span>
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/early-access"
                className="w-full inline-flex items-center justify-center py-3.5 bg-[#D4541A] text-[#F7F0E3] text-xs uppercase tracking-[0.2em] font-medium rounded-sm shadow-md"
              >
                Join Waitlist
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
