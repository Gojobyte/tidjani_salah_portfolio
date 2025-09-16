import Section from './ui/Section';
import Container from './ui/Container';
import Button from './ui/Button';
import heroImg from '../assets/photo2.jpeg';

export default function Hero() {
  return (
    <Section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-light dark:bg-dark text-gray-900 dark:text-gray-100 transition-colors duration-300"
    >
      <Container className="max-w-6xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 animate-fade-in">
          
          {/* === Texte à gauche === */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-xs text-primary font-semibold uppercase tracking-widest">
              Leadership • Projets Stratégiques • Afrique
            </p>

            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Tidjani Salah
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Expert en gestion de projets, en stratégie d’entreprise et en entrepreneuriat, j’accompagne les ONG,
              PME et institutions publiques dans la mise en œuvre de solutions durables à fort impact social.
            </p>

            <blockquote className="mt-6 italic text-sm text-gray-500 dark:text-gray-400 border-l-4 pl-4 border-primary">
              “Agir localement, penser stratégiquement, bâtir durablement.” — T. Salah
            </blockquote>

            {/* === Boutons === */}
            <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center md:justify-start gap-4">
              <Button href="#projects" variant="primary">
                Voir mes projets
              </Button>
              <Button href="#contact" variant="outline">
                Me contacter
              </Button>
              <Button href="/cv_tidjani_salah.pdf" variant="ghost" external>
                Voir mon CV
              </Button>
            </div>
          </div>

          {/* === Image à droite === */}
          <div className="flex-1 flex justify-center">
            <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-lg">
              <img
                src={heroImg}
                alt="Tidjani Salah - Entrepreneur et expert en développement pour l'Afrique"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
