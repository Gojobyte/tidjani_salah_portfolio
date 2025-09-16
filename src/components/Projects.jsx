import { motion } from "framer-motion";
import { Building2, Handshake, BadgeCheck, BookUser, Users, Lightbulb, TrendingUp, Calendar } from "lucide-react";

const projects = [
  {
    title: "Centre de formation à Kabalaye",
    period: "2023 - 2024",
    description: "Pilotage complet d'un projet immobilier de formation : planification, exécution, livraison.",
    details: [
      "Gestion de projet de A à Z",
      "Formation de 200+ participants",
      "Infrastructure moderne équipée"
    ],
    badge: "BTP",
    icon: Building2,
    color: "from-blue-500 to-indigo-600",
    status: "Livré avec succès",
    impact: "Hub de formation régional",
    budget: "2.5M FCFA",
    team: "15 personnes"
  },
  {
    title: "Consulting ONG Humanitaire",
    period: "2022",
    description: "Coordination terrain, logistique et formation auprès d'une ONG internationale.",
    details: [
      "Missions multi-pays",
      "Formation équipes locales",
      "Optimisation logistique"
    ],
    badge: "ONG",
    icon: Handshake,
    color: "from-green-500 to-emerald-600",
    status: "Mission accomplie",
    impact: "Communautés renforcées",
    budget: "800K FCFA",
    team: "8 personnes"
  },
  {
    title: "Import & Distribution Solaire",
    period: "2021 - 2022",
    description: "Mise en place d'une chaîne logistique Chine - Afrique et commercialisation locale.",
    details: [
      "Réseau commercial établi",
      "500+ systèmes installés",
      "Partenariats durables"
    ],
    badge: "Import/Export",
    icon: BadgeCheck,
    color: "from-orange-500 to-red-600",
    status: "Réseau actif",
    impact: "Énergie verte accessible",
    budget: "5M FCFA",
    team: "12 personnes"
  },
  {
    title: "Formation Locale",
    period: "2020 - 2021",
    description: "Création de programmes, encadrement des formateurs et partenariats publics.",
    details: [
      "Programmes certifiants",
      "Formation de formateurs",
      "Partenariats institutionnels"
    ],
    badge: "Formation",
    icon: BookUser,
    color: "from-purple-500 to-pink-600",
    status: "Programme déployé",
    impact: "Capacités locales renforcées",
    budget: "1.2M FCFA",
    team: "6 personnes"
  },
];

const ProjectsTimeline = () => {
  return (
    <section id="projects" className="bg-light-50 dark:bg-dark-950 text-gray-900 dark:text-white py-24 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header Premium */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 px-6 py-2 text-sm bg-gradient-to-r from-primary-500/10 to-secondary-500/10 text-primary-600 dark:text-primary-400 rounded-full font-semibold border border-primary-200 dark:border-primary-800">
            Mes Réalisations
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 bg-clip-text text-transparent">
            Timeline de Projets
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Une progression cohérente entre construction, humanitaire et formation. Chaque projet témoigne d'un engagement vers l'excellence et l'impact social.
          </p>
        </motion.div>

        {/* Timeline Premium */}
        <div className="relative">
          {/* Ligne principale avec gradient animé */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 via-secondary-400 to-primary-400 rounded-full opacity-60"></div>
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-secondary-300 to-primary-300 rounded-full animate-pulse opacity-30"></div>

          <div className="space-y-12">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Point sur la timeline avec animation */}
                  <div className="absolute left-0 flex items-center">
                    <div className="relative">
                      {/* Cercle principal */}
                      <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center shadow-premium z-10 relative group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      {/* Effet de pulsation */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-full animate-ping opacity-20 group-hover:opacity-40`}></div>
                    </div>
                  </div>

                  {/* Carte de contenu premium */}
                  <div className="ml-24 group-hover:ml-26 transition-all duration-300">
                    <div className="relative bg-white/95 dark:bg-dark-800/95 backdrop-blur-sm rounded-2xl p-8 shadow-premium hover:shadow-glow transition-all duration-500 border border-light-200/50 dark:border-dark-700/50 overflow-hidden">

                      {/* Background gradient au hover */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                      {/* Header avec status et période */}
                      <div className="relative z-10 flex items-start justify-between mb-6">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <Calendar className="w-5 h-5 text-primary-600" />
                            <span className="text-sm font-bold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-3 py-1.5 rounded-full">
                              {project.period}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {project.title}
                          </h3>
                        </div>

                        <div className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                          project.status.includes('succès') || project.status.includes('accomplie')
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                            : project.status.includes('actif') || project.status.includes('déployé')
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                            : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                        }`}>
                          {project.status}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="relative z-10 text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                        {project.description}
                      </p>

                      {/* Détails et métriques */}
                      <div className="relative z-10 grid md:grid-cols-2 gap-6 mb-6">
                        {/* Points clés */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <Lightbulb className="w-4 h-4 text-secondary-600" />
                            Points clés
                          </h4>
                          <div className="space-y-2">
                            {project.details.map((detail, i) => (
                              <div key={i} className="flex items-center gap-3">
                                <div className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full flex-shrink-0`}></div>
                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Métriques */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-secondary-600" />
                            Métriques
                          </h4>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600 dark:text-gray-400">Budget</span>
                              <span className="text-sm font-semibold text-gray-900 dark:text-white">{project.budget}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600 dark:text-gray-400">Équipe</span>
                              <span className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                {project.team}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Impact footer */}
                      <div className="relative z-10 pt-4 border-t border-gray-100 dark:border-dark-700">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-secondary-600" />
                            <span className="text-sm font-medium text-secondary-600 dark:text-secondary-400">
                              Impact: {project.impact}
                            </span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${project.badge === 'BTP' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : project.badge === 'ONG' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : project.badge === 'Import/Export' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'}`}>
                            {project.badge}
                          </span>
                        </div>
                      </div>

                      {/* Indicateur de progression visuel */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Finish marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: projects.length * 0.15 }}
            viewport={{ once: true }}
            className="relative mt-12 flex justify-center"
          >
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-2xl text-base font-bold shadow-premium">
              <span className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5" />
                Projets en Évolution Continue
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsTimeline;
