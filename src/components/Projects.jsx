// src/sections/ProjectsTimeline.jsx
import { motion } from "framer-motion";
import { Building2, Handshake, BadgeCheck, BookUser } from "lucide-react";

const projects = [
  {
    title: "Centre de formation à Kabalaye",
    period: "2023 - 2024",
    description:
      "Pilotage complet d’un projet immobilier de formation : planification, exécution, livraison.",
    badge: "BTP",
    icon: Building2,
  },
  {
    title: "Consulting ONG Humanitaire",
    period: "2022",
    description:
      "Coordination terrain, logistique et formation auprès d’une ONG internationale.",
    badge: "ONG",
    icon: Handshake,
  },
  {
    title: "Import & Distribution Solaire",
    period: "2021 - 2022",
    description:
      "Mise en place d’une chaîne logistique Chine - Afrique et commercialisation locale.",
    badge: "Import/Export",
    icon: BadgeCheck,
  },
  {
    title: "Formation Locale",
    period: "2020 - 2021",
    description:
      "Création de programmes, encadrement des formateurs et partenariats publics.",
    badge: "Formation",
    icon: BookUser,
  },
];

const ProjectsTimeline = () => {
  return (
    <section id="projects" className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white py-24 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-2 px-4 py-1 text-sm bg-emerald-100 dark:bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 rounded-full font-medium">
            Mes Réalisations
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Timeline de Projets
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
            Une progression cohérente entre construction, humanitaire et formation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-emerald-200 dark:border-emerald-500/30 ml-4">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-16 pl-8"
              >
                {/* Step circle + icon */}
                <div className="absolute -left-[30px] top-1">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center shadow-md">
                    <Icon className="text-white w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white dark:bg-white/5 dark:backdrop-blur-md border border-gray-200 dark:border-white/10 p-6 rounded-xl shadow-md transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{project.period}</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{project.description}</p>
                  <span className="inline-block mt-4 px-3 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-600/20 text-emerald-600 dark:text-emerald-400 uppercase tracking-wide font-medium">
                    {project.badge}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsTimeline;
