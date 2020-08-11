/* eslint-disable max-len */
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translations: {
          Janv: 'Janv',
          Févr: 'Févr',
          Mars: 'Mars',
          Avr: 'Avr',
          Mai: 'Mai',
          Juin: 'Juin',
          Juill: 'Juill',
          Août: 'Août',
          Sept: 'Sept',
          Oct: 'Oct',
          Nov: 'Nov',
          Déc: 'Déc',
          Présent: 'Présent',
          'Bonjour !': 'Bonjour !',
          'Je suis<strong> Maxime Farrugia</strong>, développeur web et étudiant en informatique.':
            'Je suis<strong> Maxime Farrugia</strong>, développeur web et étudiant en informatique.',
          'Me contacter': 'Me contacter',
          'A propos de moi': 'A propos de moi',
          'Je suis actuellement en fin de 2ème année d’étude à l’école EPITECH, dans un cursus BAC + 5, afin d’obtenir un diplôme d’Expert en Informatique.':
            'Je suis actuellement en fin de 2ème année d’étude à l’école EPITECH, dans un cursus BAC + 5, afin d’obtenir un diplôme d’Expert en Informatique.',
          "Je suis rentré dans le monde du développement web, lors de ma période de stage, à l'issue de ma première année au sein d’EPITECH.":
            'Je suis rentré dans le monde du développement web, lors de ma période de stage, durant ma première année au sein d’EPITECH.',
          'Par la suite, j’aimerais m’orienter vers le domaine de la sécurité informatique.':
            'Par la suite, j’aimerais m’orienter vers le domaine de la sécurité informatique.',
          Compétences: 'Compétences',
          Langages: 'Langages',
          Outils: 'Outils',
          Expérience: 'Expérience',
          'Développeur web': 'Développeur web',
          'Voir mon CV': 'Voir mon CV',
          'Projets réalisés': 'Projets réalisés',
          'Plateforme de mise en relation entre importateurs / exportateurs et transitaires.':
            'Plateforme de mise en relation entre importateurs / exportateurs et transitaires.',
          'Projets personnels': 'Projets personnels',
          'Aucun résultat': 'Aucun résultat',
          "Projects d'école": "Projects d'école",
          'Compilateur / arène de combat de champions informatique.': 'Compilateur / arène de combat de champions informatique.',
          'Trouver ses solutions pour la SmartMétropole.': 'Trouver ses solutions pour la SmartMétropole.',
        },
      },
      en: {
        translations: {
          Janv: 'Jan',
          Févr: 'Feb',
          Mars: 'Mar',
          Avr: 'Apr',
          Mai: 'May',
          Juin: 'Jun',
          Juill: 'Jul',
          Août: 'Aug',
          Sept: 'Sept',
          Oct: 'Oct',
          Nov: 'Nov',
          Déc: 'Dec',
          Présent: 'Present',
          'Bonjour !': 'Hello !',
          'Je suis<strong> Maxime Farrugia</strong>, développeur web et étudiant en informatique.':
            "I'm<strong> Maxime Farrugia</strong>, web developer and computer science student.",
          'Me contacter': 'Contact me',
          'A propos de moi': 'About me',
          'Je suis actuellement en fin de 2ème année d’étude à l’école EPITECH, dans un cursus BAC + 5, afin d’obtenir un diplôme d’Expert en Informatique.':
            'I am currently at the end of the 2nd year of study at EPITECH school, in a BAC + 5 course, in order to obtain a Computer Science degree.',
          "Je suis rentré dans le monde du développement web, lors de ma période de stage, à l'issue de ma première année au sein d’EPITECH.":
            'I entered the world of web development, during my internship period, at the end of my first year at EPITECH',
          'Par la suite, j’aimerais m’orienter vers le domaine de la sécurité informatique.':
            'Later on, I would like to move into the field of computer security.',
          Compétences: 'Skills',
          Langages: 'Languages',
          Outils: 'Tools',
          Expérience: 'Experience',
          'Développeur web': 'Web developer',
          'Voir mon CV': 'View my resume',
          'Projets réalisés': 'Featured projects',
          'Plateforme de mise en relation entre importateurs / exportateurs et transitaires.':
            'Platform for putting importers / exporters and forwarders in touch with each other.',
          'Projets personnels': 'Personal projects',
          'Aucun résultat': 'No result',
          "Projects d'école": 'School projects',
          'Compilateur / arène de combat de champions informatique.': 'Compiler / battle arena of computer champions.',
          'Trouver ses solutions pour la SmartMétropole.': 'Find solutions for the SmartMétropole.',
        },
      },
      // se: {
      //   translations: {
      //     'Bonjour !': 'Hallå !',
      //     'Je suis<strong> Maxime Farrugia</strong>, développeur web et étudiant en informatique.':
      //       'Jag är<strong> Maxime Farrugia</strong>, webbutvecklaren och datavetenckap.',
      //     'Me contacter': 'Kontakta mig',
      //     'Je suis actuellement en fin de 2ème année d’étude à l’école EPITECH, dans un cursus BAC + 5, afin d’obtenir un diplôme d’Expert en Informatique.':
      //       'Je suis actuellement en fin de 2ème année d’étude à l’école EPITECH, dans un cursus BAC + 5, afin d’obtenir un diplôme d’Expert en Informatique.',
      //   },
      // },
    },
    fallbackLng: 'en',
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
