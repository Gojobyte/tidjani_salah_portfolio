import { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import { Toaster } from 'react-hot-toast';


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
    <div className="bg-light-50 dark:bg-dark-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-body">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="relative overflow-hidden">
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: '12px',
              fontFamily: 'Inter, system-ui, sans-serif'
            }
          }}
        />
        <Hero />
        <About />
        <Experience />
        <Services />
        <Projects />
        <Achievements />
        <Contact />
        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  );
}
