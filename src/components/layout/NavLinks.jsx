// src/components/NavLinks.jsx
import { Link } from 'react-scroll';

const links = [
  { to: 'hero', label: 'Accueil', icon: '🏠' },
  { to: 'about', label: 'À propos', icon: '👨‍💼' },
  { to: 'experience', label: 'Expérience', icon: '💼' },
  { to: 'services', label: 'Services', icon: '⚡' },
  { to: 'projects', label: 'Projets', icon: '🚀' },
  { to: 'achievements', label: 'Réalisations', icon: '🏆' },
  { to: 'contact', label: 'Contact', icon: '📧' },
];

export default function NavLinks({ onClick = () => {}, mobile = false }) {
  if (mobile) {
    return (
      <>
        {links.map(({ to, label, icon }) => (
          <Link
            key={to}
            to={to}
            smooth={true}
            duration={500}
            offset={-100}
            spy={true}
            activeClass="active-link"
            onClick={onClick}
            className="group flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:shadow-elegant cursor-pointer"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">
              {icon}
            </span>
            <span className="font-medium text-gray-800 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {label}
            </span>
            <div className="ml-auto w-2 h-2 rounded-full bg-transparent group-hover:bg-primary-500 transition-colors"></div>
          </Link>
        ))}
      </>
    );
  }

  return (
    <>
      {links.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          smooth={true}
          duration={500}
          offset={-100}
          spy={true}
          activeClass="active-link-desktop"
          onClick={onClick}
          className="relative cursor-pointer px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/20 dark:hover:bg-dark-800/20 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 group"
        >
          <span className="relative z-10">{label}</span>

          {/* Indicateur actif amélioré */}
          <span className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></span>

          {/* Point d'accent */}
          <span className="absolute top-1/2 left-1 w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </Link>
      ))}
    </>
  );
}
