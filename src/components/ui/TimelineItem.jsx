import { motion } from 'framer-motion';
import { Calendar, Trophy, Building2, GraduationCap, Globe, Zap, Star, TrendingUp } from 'lucide-react';

export default function TimelineItem() {
  const timelineData = [
    {
      year: "2024",
      title: "Institut Supérieur du Sahel",
      description: "Co-fondateur de l'Institut Supérieur du Sahel, spécialisé dans la formation en management et leadership pour l'Afrique",
      details: ["Programmes certifiants", "Partenariats internationaux", "Formation cadres dirigeants"],
      icon: GraduationCap,
      color: "from-indigo-500 to-blue-600",
      status: "En cours",
      impact: "Nouvelle génération de leaders"
    },
    {
      year: "2022",
      title: "Chadia ONG & Formation NEPAD",
      description: "Création de l'ONG Chadia (secteur WASH) et missions de formation d'entrepreneurs pour l'Union Africaine",
      details: ["ONG sectorielle (eau, santé, éducation)", "Missions Tchad & Niger", "100+ entrepreneurs formés"],
      icon: Globe,
      color: "from-green-500 to-emerald-600",
      status: "Impact continu",
      impact: "Développement communautaire"
    },
    {
      year: "2007",
      title: "Alhouda BTP - Succès Immédiat",
      description: "Création d'Alhouda BTP, société de location d'engins. Réalisation de 500M FCFA de chiffre d'affaires dès la première année",
      details: ["Financement ECOBANK 2 milliards", "Chargeurs, niveleuses, excavateurs", "Expansion régionale réussie"],
      icon: Building2,
      color: "from-orange-500 to-red-600",
      status: "Leader marché",
      impact: "Infrastructure moderne"
    },
    {
      year: "2002",
      title: "ECAT & Rainbow - Empire Industriel",
      description: "Double création entrepreneuriale : ECAT BTP (2,5 milliards FCFA/an) et Rainbow Import-Export avec la Chine",
      details: ["150+ emplois ECAT", "Réseau commercial Chine", "Références institutionnelles"],
      icon: Trophy,
      color: "from-purple-500 to-pink-600",
      status: "Succès majeur",
      impact: "Écosystème BTP transformé"
    },
    {
      year: "1997-2004",
      title: "Formation d'Excellence & 1er Leadership",
      description: "Formation d'ingénieur au Canada, chef de projet à la Coopération Suisse, puis Masters à la Sorbonne et à l'ESTP Paris",
      details: ["Direction équipe 7 ingénieurs", "DESS Stratégie & Finances", "Master Entrepreneuriat - Très Bien"],
      icon: Star,
      color: "from-teal-500 to-green-600",
      status: "Fondations excellentes",
      impact: "Expertise internationale acquise"
    }
  ];

  return (
    <div className="relative">
      {/* Ligne principale avec gradient animé */}
      <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 via-secondary-400 to-primary-400 rounded-full opacity-60"></div>
      <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-secondary-300 to-primary-300 rounded-full animate-pulse opacity-30"></div>

      <div className="space-y-8">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Point sur la timeline avec animation */}
            <div className="absolute left-0 flex items-center">
              <div className="relative">
                {/* Cercle principal */}
                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-elegant z-10 relative group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>

                {/* Effet de pulsation */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full animate-ping opacity-20 group-hover:opacity-40`}></div>
              </div>
            </div>

            {/* Carte de contenu premium */}
            <div className="ml-16 group-hover:ml-18 transition-all duration-300">
              <div className="relative bg-white dark:bg-dark-800 rounded-xl p-6 shadow-elegant hover:shadow-premium transition-all duration-500 border border-gray-100 dark:border-dark-700 overflow-hidden">

                {/* Background gradient au hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Header avec status */}
                <div className="relative z-10 flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-primary-600" />
                      <span className="text-xs font-bold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-2 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.status.includes('cours') || item.status.includes('continu')
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      : item.status.includes('succès') || item.status.includes('Leader')
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                  }`}>
                    {item.status}
                  </div>
                </div>

                {/* Description */}
                <p className="relative z-10 text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed font-medium">
                  {item.description}
                </p>

                {/* Points clés condensés */}
                <div className="relative z-10 space-y-2 mb-4">
                  {item.details.slice(0, 2).map((detail, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${item.color} rounded-full flex-shrink-0`}></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Impact footer */}
                <div className="relative z-10 pt-3 border-t border-gray-100 dark:border-dark-700">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-3 h-3 text-secondary-600" />
                    <span className="text-xs font-medium text-secondary-600 dark:text-secondary-400">
                      {item.impact}
                    </span>
                  </div>
                </div>

                {/* Indicateur de progression visuel */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Finish marker compact */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: timelineData.length * 0.1 }}
        viewport={{ once: true }}
        className="relative mt-6 flex justify-center"
      >
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-elegant">
          <span className="flex items-center gap-2">
            <Star className="w-4 h-4" />
            Parcours en Évolution
          </span>
        </div>
      </motion.div>
    </div>
  );
}
