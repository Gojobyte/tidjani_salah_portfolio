// src/components/Contact.jsx
import Section from './ui/Section';
import Container from './ui/Container';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

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

  return (
    <Section id="contact" className="bg-gray-100 dark:bg-gray-900">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            Me contacter
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Une idée, un projet ou simplement une question ? Je suis à votre écoute.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Coordonnées */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-800 dark:text-gray-200"
          >
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-primary" />
              <a href="mailto:tidjanisal@gmail.com" className="hover:underline break-all">
                tidjanisal@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-primary" />
              <a href="tel:+23565626240" className="hover:underline">
                +235 65 62 62 40
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-primary" />
              <span>Avenue Bézo, quartier Kabalaye, N'Djamena</span>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 w-full"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Votre nom"
              className="w-full p-4 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Votre email"
              className="w-full p-4 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <textarea
              name="message"
              placeholder="Votre message"
              rows="5"
              className="w-full p-4 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition disabled:opacity-60 w-full"
            >
              {loading ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
          </motion.form>
        </div>
      </Container>
    </Section>
  );
}
