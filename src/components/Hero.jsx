import Section from './ui/Section';
import Container from './ui/Container';
import Button from './ui/Button';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Award, TrendingUp, Users } from 'lucide-react';
import heroImg from '../assets/photo2.jpeg';

export default function Hero() {
  const achievements = [
    { value: '2.5B', label: 'FCFA de CA', icon: TrendingUp },
    { value: '25+', label: 'Années d\'expérience', icon: Award },
    { value: '5', label: 'Entreprises créées', icon: MapPin },
  ];

  return (
    <Section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-950 dark:via-dark-900 dark:to-dark-800"></div>

      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <Container className="relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Contenu principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Badge premium */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full border border-primary-200/50 dark:border-primary-700/50"
            >
              <span className="text-sm font-medium bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                🚀 Entrepreneur • Formateur • Leader Afrique
              </span>
            </motion.div>

            {/* Titre principal avec effet shimmer */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-none"
              >
                <span className="block bg-gradient-to-r from-gray-900 via-primary-600 to-secondary-600 dark:from-white dark:via-primary-400 dark:to-secondary-400 bg-clip-text text-transparent">
                  Tidjani
                </span>
                <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  SALAH
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium"
              >
                Ingénieur • Entrepreneur • Formateur
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl"
            >
              <strong className="text-primary-600 dark:text-primary-400">25 années d'expérience</strong> en entrepreneuriat et conseil stratégique.
              Diplômé de la <strong>Sorbonne</strong> et intervenant sur le terrain en Afrique,
              j'accompagne les dirigeants avec un impact concret : <strong className="text-accent-600">2,5 milliards FCFA</strong> de CA généré.
            </motion.p>

            {/* Citation premium */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="relative p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl border border-primary-200/50 dark:border-primary-700/30"
            >
              <div className="absolute top-2 left-4 text-4xl text-primary-300 dark:text-primary-600">"</div>
              <p className="italic text-gray-700 dark:text-gray-300 ml-6">
                Agir localement, penser stratégiquement, bâtir durablement.
              </p>
              <cite className="block text-right text-sm text-primary-600 dark:text-primary-400 font-medium mt-2">
                — Tidjani Salah
              </cite>
            </motion.blockquote>

            {/* Boutons d'action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start w-full sm:w-auto"
            >
              {/* Bouton principal - Découvrir mes projets */}
              <motion.a
                href="#services"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                role="button"
                aria-label="Découvrir mes services professionnels"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Découvrir mes services
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </span>
              </motion.a>

              {/* Bouton secondaire - Collaborons ensemble */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-semibold text-gray-800 dark:text-white bg-white dark:bg-dark-800 border-2 border-gray-300 dark:border-dark-600 rounded-2xl shadow-lg hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300"
                role="button"
                aria-label="Me contacter pour collaborer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Collaborons ensemble
                </span>
              </motion.a>

              {/* Bouton tertiaire - Télécharger CV */}
              <motion.a
                href="/cv_tidjani_salah.pdf"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-semibold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300"
                role="button"
                aria-label="Télécharger mon CV en PDF"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Télécharger CV
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Section image et stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Photo principale avec effet premium */}
            <div className="relative">
              {/* Cercles décoratifs */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full blur-2xl opacity-20 animate-pulse-slow"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-full blur-xl opacity-30"></div>

              {/* Photo */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-dark-900">
                    <img
                      src={heroImg}
                      alt="Tidjani Salah - Entrepreneur et expert en développement pour l'Afrique"
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>

              {/* Badge flottant */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-dark-900 rounded-2xl shadow-premium p-4 border border-primary-200 dark:border-primary-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Disponible</span>
                </div>
              </div>
            </div>

            {/* Stats flottantes */}
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 space-y-4 hidden lg:block">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                  className="bg-white/95 dark:bg-dark-900/95 backdrop-blur-sm rounded-xl p-4 shadow-elegant border border-white/70 dark:border-dark-700/70"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <achievement.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-900 dark:text-white">
                        {achievement.value}
                      </div>
                      <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                        {achievement.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-sm font-medium">Découvrir</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
