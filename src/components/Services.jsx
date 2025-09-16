import Section from './ui/Section';
import Container from './ui/Container';
import { motion } from 'framer-motion';
import {
  Brain,
  Presentation,
  Hammer,
  Users,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Target,
  Zap,
  Globe,
  Award,
  Star,
  Building2,
  Lightbulb
} from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Conseil Stratégique',
    subtitle: 'Vision • Transformation • Excellence',
    description: "Accompagnement stratégique des dirigeants : diagnostic, planification et mise en œuvre de transformations organisationnelles.",
    features: [
      'Diagnostic organisationnel approfondi',
      'Planification stratégique sur 3-5 ans',
      'Optimisation des processus opérationnels',
      'Accompagnement au changement'
    ],
    results: ['95% taux de réussite', '2.5x ROI moyen', '150+ projets'],
    color: 'from-blue-500 to-cyan-600',
    bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
    category: 'Strategy'
  },
  {
    icon: Presentation,
    title: 'Formation & Capacités',
    subtitle: 'Leadership • Innovation • Excellence',
    description: "Formations certifiantes en management et entrepreneuriat, adaptées aux spécificités du contexte africain.",
    features: [
      'Formations certifiantes management',
      'Programmes entrepreneuriat jeunes',
      'Renforcement capacités ONG',
      'Coaching dirigeants'
    ],
    results: ['500+ formés', 'Union Africaine', '85% satisfaction'],
    color: 'from-green-500 to-emerald-600',
    bgGradient: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
    category: 'Education'
  },
  {
    icon: Building2,
    title: 'Infrastructures & BTP',
    subtitle: 'Construction • Innovation • Durabilité',
    description: "Maîtrise d'ouvrage et gestion de projets BTP : infrastructures éducatives, communautaires et travaux publics.",
    features: [
      'Maîtrise d\'ouvrage déléguée',
      'Infrastructures éducatives',
      'Projets communautaires',
      'BTP écologique'
    ],
    results: ['2.5B FCFA CA', '500+ projets', '150 emplois'],
    color: 'from-orange-500 to-red-600',
    bgGradient: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
    category: 'Infrastructure'
  },
  {
    icon: Globe,
    title: 'Développement Communautaire',
    subtitle: 'Impact • Durabilité • Transformation',
    description: "Conception et mise en œuvre de projets de développement : accès à l'eau, santé communautaire et éducation locale.",
    features: [
      'Programmes WASH (eau, assainissement)',
      'Projets santé communautaire',
      'Éducation & formation locale',
      'Environnement & climat'
    ],
    results: ['25+ communautés', 'ONG Chadia', 'Impact durable'],
    color: 'from-purple-500 to-pink-600',
    bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
    category: 'Community'
  }
];

const expertise = [
  { icon: Target, label: "25+ ans d'expérience", value: "Excellence prouvée" },
  { icon: TrendingUp, label: "2.5B FCFA générés", value: "Impact économique" },
  { icon: Users, label: "500+ personnes formées", value: "Transmission réussie" },
  { icon: Award, label: "Références internationales", value: "Reconnaissance" }
];

export default function Services() {
  return (
    <Section id="services" className="relative bg-gradient-to-br from-white via-gray-50 to-secondary-50/30 dark:from-dark-950 dark:via-dark-900 dark:to-dark-800 overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-32 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-secondary-200/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <Container className="relative">
        {/* Header Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full mb-6">
            <Zap className="w-5 h-5 text-primary-600 mr-2" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary-700 to-secondary-700 dark:from-primary-300 dark:to-secondary-300 bg-clip-text text-transparent">
              Services d'Excellence
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8">
            <span className="block bg-gradient-to-r from-gray-900 via-primary-600 to-secondary-600 dark:from-white dark:via-primary-400 dark:to-secondary-400 bg-clip-text text-transparent">
              Expertise au Service
            </span>
            <span className="block text-gray-700 dark:text-gray-300 text-2xl md:text-3xl font-medium mt-2">
              de Votre Transformation
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
            <strong className="text-primary-600 dark:text-primary-400">25 années d'expertise</strong> en conseil stratégique,
            formation et gestion de projets. J'interviens pour
            <strong className="text-secondary-600 dark:text-secondary-400"> transformer vos défis en opportunités</strong>
            avec des méthodes éprouvées et des résultats mesurables.
          </p>

          {/* Expertise metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl mb-3 shadow-lg">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">
                  {item.label}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Premium Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-white dark:bg-dark-800 rounded-3xl p-8 shadow-elegant hover:shadow-premium transition-all duration-500 border border-gray-100 dark:border-dark-700 overflow-hidden h-full">

                {/* Background Gradient */}
                <div className={`absolute inset-0 ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Category Badge */}
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                    {service.category}
                  </span>
                </div>

                {/* Header */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-4 bg-gradient-to-r ${service.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="relative z-10 mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-primary-600" />
                    Services Inclus
                  </h4>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className={`w-4 h-4 text-green-600 flex-shrink-0`} />
                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="relative z-10 mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Star className="w-4 h-4 text-secondary-600" />
                    Résultats Obtenus
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.results.map((result, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 bg-white/90 dark:bg-dark-700/90 text-gray-800 dark:text-gray-200 text-xs font-semibold rounded-full border border-gray-300 dark:border-dark-500 shadow-sm`}
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="relative z-10">
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                  >
                    Discuter de ce service
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 rounded-3xl p-12 text-white text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8 w-24 h-24 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-32 h-32 border-2 border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Transformons Ensemble Votre Vision en Réalité
              </h3>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                <strong>Dirigeants d'entreprise</strong>, <strong>responsables d'ONG</strong>,
                ou <strong>institutions publiques</strong> : mes services vous accompagnent
                pour réussir vos projets stratégiques et maximiser votre impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Démarrons Votre Projet
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="/cv_tidjani_salah.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📄 Voir Mes Références
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
