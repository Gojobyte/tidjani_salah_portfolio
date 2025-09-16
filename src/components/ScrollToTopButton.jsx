 
// src/components/ScrollToTopButton.jsx
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  return visible ? (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.8 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl shadow-premium hover:shadow-glow transition-all duration-300 hover:scale-110"
      aria-label="Retour en haut"
    >
      <ArrowUp className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300" />
    </motion.button>
  ) : null;
}
