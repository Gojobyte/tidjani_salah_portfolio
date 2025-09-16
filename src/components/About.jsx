import Section from './ui/Section';
import Container from './ui/Container';
import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Target,
  Globe,
  Award,
  Users,
  TrendingUp,
  MapPin,
  Clock,
  Heart,
  Lightbulb,
  Zap
} from 'lucide-react';
import Timeline from './ui/TimelineItem';

export default function About() {
  const expertise = [
    {
      icon: GraduationCap,
      title: "Excellence Académique",
      description: "ESTP Paris, Sorbonne, CEFEB Marseille - Formations d'élite avec distinctions",
      details: ["Master Entrepreneuriat - Très Bien", "DESS Stratégie & Finances - Bien", "Ingénieur Génie Civil - Bien"],
      color: "from-blue-500 to-cyan-600",
      gradient: "bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
    },
    {
      icon: Briefcase,
      title: "Entrepreneuriat d'Exception",
      description: "5 entreprises créées, 2.5B FCFA de CA cumulé, financement ECOBANK réussi",
      details: ["500M FCFA dès l'an 1 (Alhouda)", "2.5B FCFA/an (ECAT)", "Prêt 2 milliards remboursé"],
      color: "from-green-500 to-emerald-600",
      gradient: "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
    },
    {
      icon: Users,
      title: "Leadership International",
      description: "Direction d'équipes multiculturelles, formation entrepreneurs Union Africaine",
      details: ["Chef projet Coopération Suisse", "Formateur AUDA-NEPAD", "150+ emplois créés directement"],
      color: "from-purple-500 to-pink-600",
      gradient: "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
    },
    {
      icon: Globe,
      title: "Impact Continental",
      description: "Projets Tchad-Niger, ONG nationale, Institut Supérieur du Sahel",
      details: ["Chadia ONG (WASH, éducation)", "Institut Management & Leadership", "Développement rural durable"],
      color: "from-orange-500 to-red-600",
      gradient: "bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20"
    }
  ];

  const values = [
    { icon: Target, label: "Stratégie", description: "Vision long terme" },
    { icon: Heart, label: "Impact", description: "Transformation sociale" },
    { icon: Lightbulb, label: "Innovation", description: "Solutions durables" },
    { icon: Zap, label: "Exécution", description: "Résultats concrets" },
  ];

  const stats = [
    { number: "25+", label: "Années d'expertise", icon: Clock },
    { number: "500+", label: "Emplois créés", icon: Users },
    { number: "2.5B", label: "FCFA de CA cumulé", icon: TrendingUp },
    { number: "5", label: "Pays d'intervention", icon: MapPin },
  ];

  return (
    <Section id="about" className="relative bg-gradient-to-br from-white via-gray-50 to-primary-50/30 dark:from-dark-950 dark:via-dark-900 dark:to-dark-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-200/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </div>

      <Container className="relative">
        {/* Header Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full mb-6">
            <Award className="w-5 h-5 text-primary-600 mr-2" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary-700 to-secondary-700 dark:from-primary-300 dark:to-secondary-300 bg-clip-text text-transparent">
              Mon Parcours & Ma Vision
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8">
            <span className="block bg-gradient-to-r from-gray-900 via-primary-600 to-secondary-600 dark:from-white dark:via-primary-400 dark:to-secondary-400 bg-clip-text text-transparent">
              Plus qu'un Entrepreneur
            </span>
            <span className="block text-gray-700 dark:text-gray-300 text-2xl md:text-3xl font-medium mt-2">
              Un Architecte de l'Avenir Africain
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
            25 années d'expérience dédiées à transformer l'Afrique par l'entrepreneuriat et l'innovation.
            Diplômé de la <strong className="text-primary-600 dark:text-primary-400">Sorbonne</strong> et de l'ESTP Paris,
            j'interviens aujourd'hui sur le terrain au <strong className="text-secondary-600 dark:text-secondary-400">Sahel</strong>
            avec des résultats concrets et mesurables.
          </p>
        </motion.div>

        {/* Stats Premium */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-elegant hover:shadow-premium transition-all duration-500 border border-gray-100 dark:border-dark-700 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl mb-4 shadow-lg">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expertise Cards Premium */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-white dark:bg-dark-800 rounded-3xl p-8 shadow-elegant hover:shadow-premium transition-all duration-500 border border-gray-100 dark:border-dark-700 overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Header */}
                <div className="relative z-10 flex items-start gap-4 mb-6">
                  <div className={`p-4 bg-gradient-to-r ${item.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="relative z-10 space-y-2">
                  {item.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full`}></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values & Timeline Section */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Mes Valeurs Fondamentales
            </h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                >
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg group-hover:bg-primary-200 dark:group-hover:bg-primary-800/40 transition-colors">
                    <value.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {value.label}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {value.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Jalons Clés de Mon Parcours
            </h3>
            <Timeline />
          </motion.div>
        </div>

        {/* Quote Premium */}
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
              <div className="absolute top-8 left-8 w-32 h-32 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-24 h-24 border-2 border-white rounded-full"></div>
              <div className="absolute top-1/2 right-16 w-16 h-16 border-2 border-white rounded-full"></div>
            </div>

            <div className="relative z-10">
              <div className="text-6xl mb-6 opacity-50">"</div>
              <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed italic">
                Ma mission : accompagner une
                <strong className="font-bold"> Afrique entrepreneuriale et innovante</strong>,
                actrice de son propre développement économique et social.
              </blockquote>
              <cite className="text-lg font-semibold">
                — Tidjani Salah, Entrepreneur & Visionnaire
              </cite>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

