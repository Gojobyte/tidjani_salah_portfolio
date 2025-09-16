import Section from './ui/Section';
import Container from './ui/Container';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, MessageSquare, User, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(formRef.current);
      const templateParams = {
        user_name: formData.get('user_name')?.trim(),
        user_email: formData.get('user_email')?.trim(),
        message: formData.get('message')?.trim(),
      };

      // Validation côté client
      if (!templateParams.user_name || !templateParams.user_email || !templateParams.message) {
        toast.error('⚠️ Veuillez remplir tous les champs obligatoires.');
        setLoading(false);
        return;
      }

      // Validation email simple
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(templateParams.user_email)) {
        toast.error('⚠️ Veuillez saisir une adresse email valide.');
        setLoading(false);
        return;
      }

      await emailjs.send(
        'service_zfmuutf',
        'template_h0gzjkd',
        templateParams,
        'ycfUdv3ueLwooSves'
      );

      toast.success('📨 Message envoyé avec succès !', {
        duration: 4000,
        position: 'bottom-center',
      });
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);

      // Messages d'erreur spécifiques
      if (error.status === 422) {
        toast.error("❌ Données du formulaire invalides. Vérifiez vos informations.");
      } else if (error.status === 429) {
        toast.error("⏳ Trop de tentatives. Veuillez patienter quelques minutes.");
      } else if (!navigator.onLine) {
        toast.error("🌐 Pas de connexion Internet. Vérifiez votre réseau.");
      } else {
        toast.error("❌ Une erreur s'est produite. Veuillez réessayer plus tard.");
      }
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email professionnel',
      value: 'tidjanisal@gmail.com',
      href: 'mailto:tidjanisal@gmail.com',
      description: 'Pour vos demandes de collaboration',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Phone,
      label: 'Téléphone direct',
      value: '+235 65 62 62 40',
      href: 'tel:+23565626240',
      description: 'Disponible 9h-18h (UTC+1)',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'N\'Djamena, Tchad',
      href: null,
      description: 'Avenue Bézo, quartier Kabalaye',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const features = [
    { icon: Clock, text: 'Réponse sous 24h garantie' },
    { icon: CheckCircle, text: 'Consultation initiale gratuite' },
    { icon: MessageSquare, text: 'Échange confidentiel assuré' },
    { icon: Calendar, text: 'Rendez-vous flexible selon vos besoins' },
  ];

  return (
    <Section id="contact" className="relative bg-gradient-to-br from-gray-50 via-white to-primary-50/30 dark:from-dark-950 dark:via-dark-900 dark:to-dark-800 overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-200/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '5s' }}></div>
      </div>

      <Container className="relative">
        {/* Header Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full mb-6">
            <MessageSquare className="w-5 h-5 text-primary-600 mr-2" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary-700 to-secondary-700 dark:from-primary-300 dark:to-secondary-300 bg-clip-text text-transparent">
              Prenons Contact
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8">
            <span className="block bg-gradient-to-r from-gray-900 via-primary-600 to-secondary-600 dark:from-white dark:via-primary-400 dark:to-secondary-400 bg-clip-text text-transparent">
              Transformons Votre Vision
            </span>
            <span className="block text-gray-700 dark:text-gray-300 text-2xl md:text-3xl font-medium mt-2">
              en Réalité Concrète
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Vous avez un <strong className="text-primary-600 dark:text-primary-400">projet d'entreprise</strong> ?
            Une <strong className="text-secondary-600 dark:text-secondary-400">organisation à transformer</strong> ?
            Discutons de vos besoins pour identifier les solutions les plus efficaces.
          </p>
        </motion.div>

        {/* Features Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-white dark:bg-dark-800 rounded-xl shadow-elegant border border-gray-100 dark:border-dark-700">
              <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <feature.icon className="w-4 h-4 text-primary-600" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {feature.text}
              </span>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Coordonnées Premium */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Coordonnées Directes
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Plusieurs moyens pour me joindre selon vos préférences.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-elegant hover:shadow-premium transition-all duration-500 border border-gray-100 dark:border-dark-700 overflow-hidden">

                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <div className="relative z-10 flex items-start gap-4">
                    <div className={`p-3 bg-gradient-to-r ${info.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {info.label}
                      </h4>

                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-lg font-medium text-primary-600 dark:text-primary-400 hover:underline break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                          {info.value}
                        </span>
                      )}

                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Disponibilité */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl text-white">
              <h4 className="font-bold text-lg mb-2">💼 Disponibilité Actuelle</h4>
              <p className="text-sm opacity-90">
                Ouvert à de nouveaux projets passionnants.
                Prêt à démarrer dès <strong>janvier 2025</strong>.
              </p>
            </div>
          </motion.div>

          {/* Formulaire Premium */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-dark-800 rounded-3xl p-8 shadow-premium border border-gray-100 dark:border-dark-700">

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Partagez Votre Projet
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Présentez-moi votre projet pour recevoir un premier retour personnalisé.
                </p>
              </div>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

                {/* Nom */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <User className="inline w-4 h-4 mr-2" />
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    className={`w-full p-4 rounded-xl bg-gray-50 dark:bg-dark-700 border-2 transition-all duration-300 ${
                      focusedField === 'name'
                        ? 'border-primary-500 bg-white dark:bg-dark-600 shadow-lg'
                        : 'border-gray-200 dark:border-dark-600'
                    } focus:outline-none`}
                    placeholder="Votre nom et prénom"
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Mail className="inline w-4 h-4 mr-2" />
                    Email professionnel
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    className={`w-full p-4 rounded-xl bg-gray-50 dark:bg-dark-700 border-2 transition-all duration-300 ${
                      focusedField === 'email'
                        ? 'border-primary-500 bg-white dark:bg-dark-600 shadow-lg'
                        : 'border-gray-200 dark:border-dark-600'
                    } focus:outline-none`}
                    placeholder="votre@email.com"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <MessageSquare className="inline w-4 h-4 mr-2" />
                    Décrivez votre projet
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    className={`w-full p-4 rounded-xl bg-gray-50 dark:bg-dark-700 border-2 transition-all duration-300 resize-none ${
                      focusedField === 'message'
                        ? 'border-primary-500 bg-white dark:bg-dark-600 shadow-lg'
                        : 'border-gray-200 dark:border-dark-600'
                    } focus:outline-none`}
                    placeholder="Parlez-moi de votre projet, vos objectifs, défis, timeline..."
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </div>

                {/* Bouton Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold py-4 px-8 rounded-xl shadow-premium hover:shadow-glow transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed group"
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                >
                  <span className="flex items-center justify-center gap-3">
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer mon projet
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </motion.button>

                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  🔒 Vos informations sont traitées en toute confidentialité
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
