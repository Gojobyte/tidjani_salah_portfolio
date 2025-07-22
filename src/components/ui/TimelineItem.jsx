// src/components/ui/Timeline.jsx
import { motion } from 'framer-motion';
import { ArrowRightCircle } from 'lucide-react';

export default function TimelineItem() {
  const events = [
    {
      year: '2024',
      title: "Création de l’Institut Supérieur du Sahel",
      description: "Développement de programmes de management & leadership pour la jeunesse africaine.",
    },
    {
      year: '2022',
      title: "Fondateur de l’ONG Chadia",
      description: "Interventions en éducation, santé, environnement et entrepreneuriat au Tchad.",
    },
    {
      year: '2007',
      title: 'Alhouda (BTP)',
      description: 'Location d’engins lourds, projet financé à hauteur de 2 milliards FCFA.',
    },
    {
      year: '2002',
      title: 'Rainbow (Import/Export)',
      description: 'Importation de matériel BTP depuis la Chine, logistique et dédouanement.',
    },
    {
      year: '1997 - 2001',
      title: 'Chef de projet – Coopération suisse',
      description: 'Encadrement technique, pistes rurales, ouvrages hydrauliques.',
    },
  ];

  return (
    <div className="relative w-full pl-4">
      {/* Ligne verticale centrale */}
      <div className="absolute left-[22px] top-0 h-full w-px bg-gray-300 dark:bg-gray-600" />

      <div className="flex flex-col space-y-16">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative cursor-pointer transition-transform"
          >
            <div className="flex items-start w-full gap-4">
              {/* Flèche qui pointe sur la date */}
              <div className="flex flex-col items-center min-w-[100px] relative z-10">
                <div className="relative">
                  <ArrowRightCircle className="w-6 h-6 text-primary bg-white dark:bg-gray-950 z-10 relative" />
                  <div className="absolute top-1/2 left-6 w-3 h-px bg-primary transform -translate-y-1/2" />
                </div>
                <span className="mt-2 text-xs font-semibold text-primary text-center">
                  {event.year}
                </span>
              </div>

              {/* Contenu */}
              <div className="flex-1 max-w-full">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
