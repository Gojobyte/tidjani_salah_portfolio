import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import NavLinks from './NavLinks';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation Premium */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 dark:bg-dark-950/95 backdrop-blur-xl shadow-premium border-b border-light-200/20 dark:border-dark-800/20'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo avec effet glassmorphism */}
            <div className={`relative group transition-all duration-300 ${
              isScrolled ? 'transform scale-95' : ''
            }`}>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative px-4 py-2 bg-white/10 dark:bg-dark-900/10 backdrop-blur-sm rounded-xl border border-white/20 dark:border-dark-800/20">
                <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Tidjani
                </span>
              </div>
            </div>

            {/* Navigation Desktop avec design premium */}
            <nav className="hidden md:flex items-center" aria-label="Navigation principale">
              <div className="bg-white/10 dark:bg-dark-900/10 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-dark-800/20 p-1">
                <div className="flex items-center space-x-1">
                  <NavLinks />
                </div>
              </div>
            </nav>

            {/* Contrôles à droite */}
            <div className="flex items-center gap-3">
              <ThemeToggle />

              {/* Bouton mobile premium */}
              <button
                onClick={toggleMenu}
                className={`md:hidden p-3 rounded-xl transition-all duration-300 ${
                  isMenuOpen
                    ? 'bg-primary-500 text-white shadow-glow'
                    : 'bg-white/10 dark:bg-dark-900/10 backdrop-blur-sm border border-white/20 dark:border-dark-800/20 hover:bg-white/20 dark:hover:bg-dark-800/20'
                }`}
                aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-45 opacity-100' : 'rotate-0 opacity-100'}`}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile premium avec animation */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav
            id="mobile-menu"
            className="bg-white/95 dark:bg-dark-950/95 backdrop-blur-xl border-t border-light-200/20 dark:border-dark-800/20"
            aria-label="Navigation mobile"
          >
            <div className="container mx-auto px-6 py-4">
              <div className="space-y-2">
                <NavLinks onClick={closeMenu} mobile />
              </div>
            </div>
          </nav>
        </div>
      </header>

    </>
  );
}
