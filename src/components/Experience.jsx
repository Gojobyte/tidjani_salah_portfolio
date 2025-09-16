import Section from './ui/Section';
import Container from './ui/Container';
import { motion } from 'framer-motion';
import { Calendar, Building2, TrendingUp, Users, Award, MapPin, ExternalLink } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      period: "2024 - Présent",
      role: "Membre Fondateur",
      company: "Institut Supérieur du Sahel",
      location: "Tchad",
      type: "Leadership & Management",
      achievements: [
        "Création et développement de l'institut",
        "Programmes de formation en management",
        "Formation de cadres africains"
      ],
      revenue: null,
      team: "15+",
      status: "En cours",
      color: "from-primary-500 to-secondary-500"
    },
    {
      id: 2,
      period: "2022 - Présent",
      role: "Fondateur & Président",
      company: "Chadia ONG",
      location: "Tchad",
      type: "ONG Nationale",
      achievements: [
        "WASH (eau, assainissement, hygiène)",
        "Projets éducation & santé",
        "Programmes entrepreneuriat",
        "Développement environnemental"
      ],
      revenue: null,
      team: "25+",
      status: "Actif",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      period: "2022",
      role: "Formateur Entrepreneurs",
      company: "AUDA-NEPAD (Union Africaine)",
      location: "Tchad & Niger",
      type: "Formation Internationale",
      achievements: [
        "Formation jeunes entrepreneurs Tchad",
        "2 missions de formation au Niger",
        "Programme Union Africaine",
        "Développement écosystème startup"
      ],
      revenue: null,
      team: "100+ bénéficiaires",
      status: "Mission accomplie",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      period: "2007 - Présent",
      role: "Fondateur & Gérant",
      company: "Alhouda BTP",
      location: "Tchad",
      type: "Société Location Engins BTP",
      achievements: [
        "Location chargeurs, niveleuses, excavateurs",
        "Prêt ECOBANK 2 milliards FCFA remboursé",
        "Expansion régionale continue"
      ],
      revenue: "500M FCFA (1ère année)",
      team: "35+",
      status: "Leader marché",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      period: "2002 - 2020",
      role: "Fondateur & Gérant",
      company: "Rainbow Import-Export",
      location: "Tchad-Chine",
      type: "Commerce International",
      achievements: [
        "Import-export matériel lourd avec Chine",
        "Bennes, niveleuses, pelles excavatrices",
        "Centrales à béton",
        "Réseau distribution Afrique Centrale"
      ],
      revenue: "1B+ FCFA cumulé",
      team: "20+",
      status: "Revendu avec succès",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 6,
      period: "2002 - 2009",
      role: "Fondateur & Gérant",
      company: "ECAT BTP",
      location: "Tchad",
      type: "Entreprise BTP",
      achievements: [
        "Construction bâtiments & routes",
        "Mini-barrages & seuils d'épandage",
        "Entretien routes bitumées",
        "Équipe technique spécialisée"
      ],
      revenue: "2.5B FCFA/an",
      team: "150+",
      status: "Vendu avec plus-value",
      color: "from-indigo-500 to-blue-500"
    },
    {
      id: 7,
      period: "1997 - 2001",
      role: "Chef de Projet",
      company: "Coopération Suisse Tchad",
      location: "Tchad",
      type: "Développement International",
      achievements: [
        "Direction équipe 7 ingénieurs + gestionnaire",
        "Projets haute intensité main-d'œuvre",
        "Réhabilitation pistes rurales",
        "Lutte contre l'érosion"
      ],
      revenue: "Projet multi-millions",
      team: "100+",
      status: "Mission accomplie",
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <Section id="experience" className="bg-gradient-to-br from-gray-50 to-primary-50/30 dark:from-dark-900 dark:to-dark-800">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
            <Award className="w-5 h-5 text-primary-600 mr-2" />
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">Parcours Professionnel</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-gray-900 to-primary-600 dark:from-white dark:to-primary-400 bg-clip-text text-transparent mb-6">
            25+ Années d'Excellence
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            De l'ingénierie aux plus hautes responsabilités entrepreneuriales,
            découvrez un parcours jalonné de <strong className="text-primary-600">réussites tangibles</strong> et
            d'<strong className="text-secondary-600">impact durable</strong> sur le développement africain.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-secondary-300 to-primary-300 dark:from-primary-600 dark:via-secondary-600 dark:to-primary-600 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Point sur la timeline */}
                <div className="absolute left-8 w-4 h-4 transform -translate-x-1/2 hidden md:block">
                  <div className={`w-full h-full rounded-full bg-gradient-to-r ${exp.color} border-4 border-white dark:border-dark-900 shadow-lg`}></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 animate-ping opacity-20"></div>
                </div>

                {/* Carte expérience */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:ml-16' : 'md:mr-16'}`}>
                  <div className="group relative bg-white dark:bg-dark-800 rounded-2xl shadow-elegant hover:shadow-premium transition-all duration-500 border border-gray-100 dark:border-dark-700 overflow-hidden">
                    {/* Gradient header */}
                    <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>

                    <div className="p-6">
                      {/* Header card */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-4 h-4 text-primary-600" />
                            <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                              {exp.period}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                            <Building2 className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                            <MapPin className="w-3 h-3 ml-2" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>

                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.status.includes('cours') || exp.status.includes('Actif') || exp.status.includes('Leader')
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                        }`}>
                          {exp.status}
                        </div>
                      </div>

                      {/* Type */}
                      <div className="inline-flex items-center px-3 py-1 bg-primary-50 dark:bg-primary-900/20 rounded-full mb-4">
                        <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                          {exp.type}
                        </span>
                      </div>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary-600" />
                          Réalisations clés
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Metrics */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-dark-700">
                        {exp.revenue && (
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-semibold text-green-600">
                              {exp.revenue}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {exp.team}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>
                </div>

                {/* Spacer pour l'autre côté */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Vous avez un projet ambitieux ?</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Fort de 25+ années d'expérience et de réussites tangibles,
            je peux vous accompagner dans la réalisation de vos défis stratégiques.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discutons de votre projet
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </Container>
    </Section>
  );
}