// src/components/Footer.jsx
import { Facebook, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const navLinks = [
  { to: 'hero', label: 'Accueil' },
  { to: 'about', label: 'À propos' },
  { to: 'services', label: 'Services' },
  { to: 'projects', label: 'Projets' },
  { to: 'contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-gray-400 py-16 dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        {/* Colonne 1 : Logo + citation */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Tidjani.</h3>
          <p className="text-sm leading-relaxed">
            “L’impact durable commence par des solutions locales.”
          </p>
          <p className="text-xs text-gray-500 mt-4">
            &copy; {new Date().getFullYear()} Tous droits réservés.
          </p>
        </div>

        {/* Colonne 2 : Navigation rapide */}
        <div>
          <h4 className="text-white font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  activeClass="text-white"
                  className="cursor-pointer hover:text-white transition"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 3 : Contact + réseaux sociaux */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:tidjani@example.com">tidjani@example.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +235 65 00 00 00
            </li>
          </ul>
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-white transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
