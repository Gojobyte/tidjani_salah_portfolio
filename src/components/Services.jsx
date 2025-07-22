// src/components/Services.jsx
import Section from './ui/Section';
import Container from './ui/Container';
import { Brain, Presentation, Hammer, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Brain className="w-8 h-8 text-white" />, // icône blanche sur fond coloré
    title: 'Conseil stratégique',
    description:
      "Accompagnement personnalisé des dirigeants, définition de visions d’impact et création de feuilles de route ambitieuses.",
    bg: 'bg-yellow-400',
  },
  {
    icon: <Presentation className="w-8 h-8 text-white" />,
    title: 'Formation & renforcement de capacités',
    description:
      "Conception de programmes sur mesure pour cadres, ONG et jeunes entrepreneurs avec pédagogie active et ancrage local.",
    bg: 'bg-green-500',
  },
  {
    icon: <Hammer className="w-8 h-8 text-white" />,
    title: 'Développement d’infrastructures',
    description:
      "Gestion de projets BTP, infrastructures éducatives ou communautaires, alliant robustesse et ancrage socio-économique.",
    bg: 'bg-rose-500',
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: 'Projets communautaires',
    description:
      "Design et exécution de projets à fort impact local (santé, éducation, environnement), en lien avec les besoins réels du terrain.",
    bg: 'bg-blue-500',
  },
];

export default function Services() {
  return (
    <Section id="services" className="bg-white dark:bg-gray-900">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            Mes services
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            J’interviens au croisement de la stratégie, du développement local et de l’innovation durable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow hover:shadow-lg transition-all"
            >
              <div className={`flex items-center justify-center w-14 h-14 rounded-full shadow-md ${service.bg} shrink-0`}>
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
