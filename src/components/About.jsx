// src/components/About.jsx
import Section from './ui/Section';
import Container from './ui/Container';
import { Briefcase, GraduationCap, Target, Globe } from 'lucide-react';
import Timeline from './ui/TimelineItem';
import Card from './ui/Card';

export default function About() {
  return (
    <Section id="about" className="bg-gray-100 dark:bg-gray-950">
      <Container>
        {/* Titre & Intro */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            À propos de moi
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Entrepreneur, ingénieur et formateur, j'ai consacré ma carrière à la création de solutions concrètes pour l’Afrique.
            Du BTP à la formation, en passant par le développement ONG, ma trajectoire est marquée par l’impact, la stratégie, et le terrain.
          </p>
        </div>

        {/* Deux colonnes : Cartes + Timeline */}
        <div className="flex flex-col md:flex-row md:items-start gap-12">
          {/* Colonne gauche : Cartes */}
          <div className="flex-1 space-y-6">
            <Card
              icon={<GraduationCap className="w-6 h-6 text-primary" />}
              title="Formation de haut niveau"
              text="Titulaire de diplômes en génie civil, stratégie & finances (Sorbonne, CEFEB, ESTP Paris), avec distinctions."
            />
            <Card
              icon={<Briefcase className="w-6 h-6 text-primary" />}
              title="Expérience entrepreneuriale"
              text="Fondateur de plusieurs entreprises (BTP, Import/Export, ONG), avec levées de fonds et CA significatifs."
            />
            <Card
              icon={<Target className="w-6 h-6 text-primary" />}
              title="Leadership terrain"
              text="Direction d’équipes techniques, formation de jeunes entrepreneurs (Union Africaine, NEPAD), projets multi-sectoriels."
            />
            <Card
              icon={<Globe className="w-6 h-6 text-primary" />}
              title="Engagement pour l’Afrique"
              text="Création de l’Institut Supérieur du Sahel, développement de projets durables pour les ONG et institutions publiques."
            />
          </div>

          {/* Colonne droite : Timeline */}
          <div className="flex-1">
            <Timeline />
          </div>
        </div>

        {/* Citation */}
        <div className="mt-12 text-center italic text-sm text-gray-500 dark:text-gray-400">
          “Plus qu’un parcours, c’est une vision que je porte : celle d’une Afrique forte, formée, et actrice de son propre développement." — Tidjani Salah
        </div>
      </Container>
    </Section>
  );
}

