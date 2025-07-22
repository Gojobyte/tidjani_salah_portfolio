import { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Restaure le thème à partir du localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  return (
    <div className="bg-light dark:bg-dark text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main >
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
