// src/components/NavLinks.jsx
import { Link } from 'react-scroll';

const links = [
  { to: 'hero', label: 'Accueil' },
  { to: 'about', label: 'À propos' },
  { to: 'services', label: 'Services' },
  { to: 'projects', label: 'Projets' },
  { to: 'contact', label: 'Contact' },
];

export default function NavLinks({ onClick = () => {} }) {
  return (
    <>
      {links.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass="active-link"
          onClick={onClick}
          className="relative cursor-pointer text-gray-800 dark:text-gray-100 hover:text-primary transition duration-300 font-medium group"
        >
          {label}
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </>
  );
}
