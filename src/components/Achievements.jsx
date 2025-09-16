import Section from './ui/Section';
import Container from './ui/Container';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Users, Globe, Award, Building, Star, Target, Zap, Crown } from 'lucide-react';

export default function Achievements() {
  const stats = [
    {
      value: "2.5B+",
      label: "FCFA de Chiffre d'Affaires Cumulé",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-600",
      description: "Revenus générés par mes entreprises"
    },
    {
      value: "5",
      label: "Entreprises Créées & Dirigées",
      icon: Building,
      color: "from-blue-500 to-cyan-600",
      description: "De BTP à l'ONG, un écosystème diversifié"
    },
    {
      value: "500+",
      label: "Emplois Créés Directement",
      icon: Users,
      color: "from-purple-500 to-pink-600",
      description: "Impact social et économique tangible"
    },
    {
      value: "25+",
      label: "Années d'Excellence",
      icon: Crown,
      color: "from-orange-500 to-red-600",
      description: "Expérience et expertise reconnue"
    }
  ];

  const achievements = [
    {
      category: "Excellence Académique",
      icon: Award,
      color: "from-indigo-500 to-blue-600",
      items: [
        {
          title: "Master ESTP Paris - Mention Très Bien",
          description: "École Spéciale des Travaux Publics, formation d'élite en entrepreneuriat",
          year: "2004",
          impact: "Formation prestigieuse"
        },
        {
          title: "DESS Sorbonne & CEFEB - Mention Bien",
          description: "Stratégie et Finances, double diplôme Paris-Marseille",
          year: "2004",
          impact: "Expertise stratégique"
        },
        {
          title: "Ingénieur Génie Civil - Université Moncton",
          description: "Formation internationale au Canada, mention Bien",
          year: "1997",
          impact: "Excellence technique"
        }
      ]
    },
    {
      category: "Succès Entrepreneuriaux",
      icon: Zap,
      color: "from-green-500 to-emerald-600",
      items: [
        {
          title: "ECAT BTP - Leader Marché",
          description: "2,5 milliards FCFA/an, 150+ employés, références majeures",
          year: "2002-2009",
          impact: "Domination sectorielle"
        },
        {
          title: "Alhouda - Financement Exceptionnel",
          description: "Prêt ECOBANK 2 milliards remboursé, 500M FCFA dès l'an 1",
          year: "2007-présent",
          impact: "Confiance bancaire"
        },
        {
          title: "Rainbow - Expansion Internationale",
          description: "Import-Export Chine-Afrique, réseau régional établi",
          year: "2002-2020",
          impact: "Portée continentale"
        }
      ]
    },
    {
      category: "Leadership Institutionnel",
      icon: Globe,
      color: "from-purple-500 to-pink-600",
      items: [
        {
          title: "Coopération Suisse - Chef de Projet",
          description: "Direction équipe de 7 ingénieurs, projets multi-millions",
          year: "1997-2001",
          impact: "Confiance internationale"
        },
        {
          title: "AUDA-NEPAD Union Africaine",
          description: "Formateur entrepreneurs, missions Tchad & Niger",
          year: "2022",
          impact: "Reconnaissance continentale"
        },
        {
          title: "Institut Supérieur du Sahel",
          description: "Co-fondateur, programmes leadership & management",
          year: "2024-présent",
          impact: "Formation nouvelle génération"
        }
      ]
    },
    {
      category: "Impact Social",
      icon: Target,
      color: "from-orange-500 to-red-600",
      items: [
        {
          title: "Chadia ONG - Secteurs Vitaux",
          description: "WASH, éducation, santé, entrepreneuriat, environnement",
          year: "2022-présent",
          impact: "Développement durable"
        },
        {
          title: "Formation Jeunes Entrepreneurs",
          description: "100+ bénéficiaires directs, écosystème startup",
          year: "2022",
          impact: "Transmission expertise"
        },
        {
          title: "Infrastructures Rurales",
          description: "Pistes, mini-barrages, lutte anti-érosion",
          year: "1997-2001",
          impact: "Développement rural"
        }
      ]
    }
  ];

  return (
    <Section id="achievements" className="bg-gradient-to-br from-white to-gray-50 dark:from-dark-900 dark:to-dark-800">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full mb-6">
            <Trophy className="w-5 h-5 text-primary-600 mr-2" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary-700 to-secondary-700 dark:from-primary-300 dark:to-secondary-300 bg-clip-text text-transparent">
              Réalisations & Impact
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-gray-900 to-primary-600 dark:from-white dark:to-primary-400 bg-clip-text text-transparent mb-6">
            Un Parcours d'Excellence
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Au-delà des chiffres, découvrez l'impact réel et durable de
            <strong className="text-primary-600 dark:text-primary-400"> 25 années</strong> d'entrepreneuriat
            et de leadership au service du <strong className="text-secondary-600 dark:text-secondary-400">développement africain</strong>.
          </p>
        </motion.div>

        {/* Stats Premium */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Background gradient animé */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity`}></div>

              <div className="relative bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-elegant hover:shadow-premium transition-all duration-500 border border-gray-100 dark:border-dark-700">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl mb-4 shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>

                <div className="mb-2">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    {stat.label}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.description}
                </p>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-elegant hover:shadow-premium transition-all duration-500 border border-gray-100 dark:border-dark-700 overflow-hidden">
                {/* Header category */}
                <div className={`h-1 bg-gradient-to-r ${category.color}`}></div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl shadow-lg`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: categoryIndex * 0.2 + itemIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="group/item relative p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-700 transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-dark-600"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors">
                            {item.title}
                          </h4>
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-600 px-2 py-1 rounded-full">
                            {item.year}
                          </span>
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                          {item.description}
                        </p>

                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-primary-500" />
                          <span className="text-xs font-medium text-primary-600 dark:text-primary-400">
                            {item.impact}
                          </span>
                        </div>

                        {/* Subtle hover indicator */}
                        <div className={`absolute left-0 top-1/2 w-1 h-0 bg-gradient-to-b ${category.color} rounded-full group-hover/item:h-full transition-all duration-300 transform -translate-y-1/2`}></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
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
          className="text-center mt-16"
        >
          <div className="relative p-8 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 rounded-2xl text-white overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-white rounded-full"></div>
              <div className="absolute top-1/2 right-8 w-12 h-12 border-2 border-white rounded-full"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Construisons Ensemble Votre Succès
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
                25 années d'expertise, des réalisations concrètes, et une vision stratégique
                au service de <strong>votre ambition</strong>. Transformons vos défis en opportunités.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Parlons de votre projet
                  <Trophy className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </motion.a>

                <motion.a
                  href="/cv_tidjani_salah.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📄 CV Complet
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}