import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import NavLinks from './NavLinks';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">Tidjani.</div>

        <nav className="hidden md:flex items-center space-x-6" aria-label="Navigation principale">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 pt-2 flex flex-col gap-3"
          aria-label="Navigation mobile"
        >
          <NavLinks onClick={closeMenu} />
        </nav>
      )}
    </header>
  );
}
