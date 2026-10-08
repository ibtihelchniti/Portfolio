import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Ibtihel Chniti",
  initials: "IC",
  url: "https://ibtihelchniti-portflio.netlify.app",
  description: "Développeuse Full-Stack — Spécialisée en Extraction & Automatisation de Données",
  summary:
    "Développeuse Full-Stack de 2,5 ans d'expérience, spécialisée dans l'extraction, le nettoyage et l'automatisation de données : web scraping à grande échelle, intégration d'API, pipelines de traitement et restitution (dashboards, rapports, interfaces métier). Je construis des solutions complètes, de la collecte de données brutes jusqu'à leur exploitation business. Rigoureuse et autonome, je monte actuellement en compétence sur le SQL avancé et la visualisation de données (Power BI) pour élargir mon expertise Data.",
  avatarUrl: "/me.jpg",
  skills: [
    // Extraction & Automatisation de données
    "Python",
    "Selenium",
    "Apify",
    "Web Scraping",
    "Automatisation (cron)",
    // Traitement & Backend
    "Flask",
    "FastAPI",
    "Django",
    "Pandas",
    "SQLAlchemy",
    "TextBlob",
    "NLTK",
    // Bases de données
    "MySQL",
    "PostgreSQL",
    "Supabase",
    // Intégration & APIs
    "RESTful API",
    "LLM",
    // Frontend
    "Angular",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    // WordPress
    "WordPress",
    "Php",
    // Infra & Outils
    "Gunicorn",
    "Nginx",
    "Git&GitHub",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "ibtihelchniti0@gmail.com",
    tel: "+216 26 190 089",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ibtihelchniti",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ibtihel-chniti-21a6a5238/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Elzei Consulting",
      href: "",
      badges: [],
      location: "On-site",
      title: "Développeuse Web",
      logoUrl: "/elzeiConsulting.png",
      start: "Jan 2024",
      end: "Jun 2026",
      description:
        "Développement et maintenance de projets internes à forte composante données : systèmes de scraping et d'intégration automatisée, outils métier (simulation financière, automatisation de facturation) et plateformes WordPress sur mesure — de la collecte de données à leur restitution dans des interfaces métier.",
    },
    {
      company: "Groupe ELAN",
      href: "",
      badges: [],
      location: "Hybrid",
      title: "Stagiaire Développeuse Full-Stack",
      logoUrl: "/groupelan.jpg",
      start: "Feb 2023",
      end: "Jun 2023",
      description:
        "Développement d'une application de scraping et d'analyse de sentiments sur les réseaux sociaux (Facebook), avec extraction automatisée, prétraitement textuel et visualisation des résultats.",
    },
  ],

  education: [
    {
      school: "Institut Supérieur des Sciences Appliquées et de Technologie de Sousse (ISSATSo)",
      href: "https://issatso.rnu.tn",
      degree: "Licence en Ingénierie des Systèmes Informatiques (systèmes embarqués, IoT)",
      logoUrl: "/issatso.jpg",
      start: "2020",
      end: "2023",
    },
    {
      school: "Lycée secondaire de El Alaa - Kairouan",
      href: "https://www.google.com/search?client=opera-gx&q=Lycée+secondaires+de+El+Alaa&sourceid=opera&ie=UTF-8&oe=UTF-8",
      degree: "Baccalauréat Mathématiques",
      logoUrl: "",
      start: "2019",
      end: "2020",
    },
  ],

  // Projets "profonds" : pipelines data, automatisation, extraction.
  // Chaque description suit un angle problème → solution → résultat,
  // pensé pour un lecteur client/recruteur Data, pas uniquement développeur.
  projects: [
    {
      title: "Automated Google Maps Reviews Analyzer",
      href: "",
      dates: "2024 – 2025",
      active: true,
      description:
        "Mission freelance (client) : un commerçant avait besoin de comprendre rapidement ce que ses clients pensaient de lui sans dépouiller manuellement des centaines d'avis Google Maps. J'ai conçu une application full-stack qui recherche automatiquement un établissement (par nom ou URL), scrape ses avis via deux méthodes complémentaires (Selenium en local, Apify pour la scalabilité cloud), filtre les avis exploitables (note + commentaire), les nettoie et les dédoublonne avant stockage dans PostgreSQL. Les avis sont ensuite analysés sémantiquement par un LLM pour en extraire points forts, points faibles et recommandations concrètes, restitués sous forme de rapport de veille concurrentielle directement actionnable. Authentification sécurisée des utilisateurs via Supabase.",
      technologies: [
        "Python",
        "FastAPI",
        "Selenium",
        "Apify",
        "PostgreSQL",
        "Supabase",
        "SQLAlchemy",
        "LLM",
        "Next.js",
        "TypeScript",
      ],
      links: [],
      image: "",
      video: "/Demo_CompetitorWatchPro.mp4",
    },
    {
      title: "Dolibarr Smart Integration",
      href: "",
      dates: "Août 2025",
      active: true,
      description:
        "Le service RH d'Elzei Consulting perdait un temps considérable à ressaisir manuellement des factures dans Dolibarr à partir de fichiers Excel fournis par les clients. J'ai conçu une interface web qui importe ces fichiers, mappe automatiquement les champs (clients, conditions et modes de règlement, comptes bancaires, projets) et génère les factures via l'API Dolibarr, avec validation et gestion d'erreurs pour fiabiliser le processus. Résultat : un temps de saisie manuelle fortement réduit et un processus de facturation fiabilisé, suivable en temps réel depuis une interface Angular.",
      technologies: [
        "Python",
        "FastAPI",
        "Pandas",
        "Angular",
        "Dolibarr API",
        "Excel",
        "Gunicorn",
        "Nginx",
      ],
      links: [],
      image: "",
      video: "/dolibarrSmartIntegrationDemo.mp4",
    },
    {
      title: "Simulateur de revenus – Elzei Portage",
      href: "https://elzei-portage.com/simulation",
      dates: "Fév 2025 – Mai 2025",
      active: true,
      description:
        "Une société de portage salarial avait besoin d'un outil permettant à ses prospects de visualiser en temps réel leur revenu net selon leur TJM, leurs jours facturés et leurs frais professionnels — sans intervention manuelle d'un conseiller. J'ai conçu un simulateur interactif calculant en direct chiffre d'affaires, frais de gestion, charges et salaire net, avec visualisation graphique (Chart.js), sélection de véhicules de service avec estimation des coûts, et export PDF automatisé de la simulation et de la fiche de paie envoyé par e-mail. Intégré nativement dans le site WordPress via un thème enfant Kadence, ACF et AJAX sécurisé, connecté à une base MySQL externe.",
      technologies: [
        "PHP",
        "JavaScript",
        "WordPress",
        "Chart.js",
        "jsPDF",
        "ACF",
        "AJAX",
        "MySQL",
      ],

      image: "",
      video: "/simulateurDemo.mp4",
    },
    {
      title: "Job Scraper & WordPress Integrator",
      href: "http://213.130.144.156/",
      dates: "Jan 2024 – Jun 2024",
      active: true,
      description:
        "Objectif : centraliser automatiquement des offres d'emploi dispersées sur plusieurs sites, sans ressaisie manuelle. J'ai conçu un système de scraping Python/Selenium s'exécutant chaque nuit via cron, avec gestion des doublons, qui alimente une base MySQL et affiche les offres sur une plateforme WordPress via WP Job Manager. Une interface de configuration développée en Angular permet d'ajuster les sources et paramètres sans toucher au code, et l'accès est sécurisé par authentification LDAP. Déployé en production sur VPS (Gunicorn + Nginx).",
      technologies: [
        "Python",
        "Flask",
        "Selenium",
        "Angular",
        "MySQL",
        "WordPress",
        "WP Job Manager",
        "LDAP",
        "Gunicorn",
        "Nginx",
      ],

      image: "",
      video: "/jobScrapDemo.mp4",
    },
    {
      title: "Facebook Scraping & Sentiment Analyzer",
      href: "",
      dates: "Fév 2023 – Jun 2023",
      active: true,
      description:
        "Projet de fin d'études : analyser automatiquement la perception d'une marque ou d'un sujet sur Facebook à partir de mots-clés, d'IDs de pages ou de plages de dates, sans dépouillement manuel. J'ai développé une application Django qui extrait automatiquement les posts via la librairie facebook_scraper, prétraite les données textuelles (nettoyage, lemmatisation, suppression des stopwords), puis classifie chaque post comme positif, négatif ou neutre avec TextBlob/NLTK. Les résultats sont restitués sous forme de graphiques interactifs (Matplotlib) dans une interface pensée pour un utilisateur non technique.",
      technologies: [
        "Python",
        "Django",
        "facebook-scraper",
        "TextBlob",
        "NLTK",
        "Matplotlib",
        "NumPy",
      ],
      links: [],
      image: "",
      video: "/fbScrapDemo.mp4",
    },
  ],

  // Sites WordPress : vitrines et e-commerce, volontairement séparés
  // des projets ci-dessus car ce sont des livrables "site web classique",
  // pas des projets data/automatisation.
  wordpressSites: [
    {
      title: "Elzei Consulting Website",
      href: "https://elzei.fr",
      dates: "Jan 2024",
      description: "Site vitrine corporate.",
      technologies: ["WordPress"],
      links: [
        {
          type: "Website",
          href: "https://elzei.fr",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/elzeiConsultingWebsite.png",
      video: "",
    },
    {
      title: "Elzei Portage Website",
      href: "https://elzei-uat.esy.es",
      dates: "Feb 2025",
      description: "Site vitrine pour l'activité de portage salarial.",
      technologies: ["WordPress"],
      links: [
        {
          type: "Website",
          href: "https://elzei-uat.esy.es",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/elzeiPortageWebsite.png",
      video: "",
    },
    {
      title: "AlWafa Conseil Website",
      href: "https://alwafa-conseil.com",
      dates: "Jan 2024",
      description: "Site vitrine corporate.",
      technologies: ["WordPress"],
      links: [
        {
          type: "Website",
          href: "https://alwafa-conseil.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/alWafaConseilWebsite.png",
      video: "",
    },
    {
      title: "E-commerce Website – naya.tn",
      href: "https://naya.tn",
      dates: "Nov 2025",
      description:
        "Mission freelance (client) : conception complète d'un site e-commerce dédié à la vente de produits de ménage — installation, configuration et personnalisation de WordPress et WooCommerce, design responsive adapté aux besoins du client.",
      technologies: ["WordPress", "WooCommerce"],
      links: [
        {
          type: "Website",
          href: "https://naya.tn",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/nayaWebsite.png",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "Coursera - Introduction to DevOps",
      dates: "Sep 2024",
      location: "",
      description:
        "Formation couvrant CI/CD, automatisation, infrastructure as code (IaC), monitoring et collaboration entre équipes dev et ops.",
      image: "/coursera-logo.png",
      win: "",
      mlh: "",
      links: [],
    },
    {
      title: "Machine Learning Bootcamp Certification",
      dates: "Jan 2022",
      location: "IEEE ISSAT Sousse Student Branch",
      description:
        "Participation au Machine Learning Bootcamp Weekend, couvrant les concepts fondamentaux et applications pratiques du machine learning.",
      image: "/ieee.jpg",
      mlh: "",
      links: [],
    },
    {
      title: "Microsoft Club Web Development Certification",
      dates: "2021",
      location: "Microsoft ISSAT Sousse Student Club",
      description:
        "Formation d'un an aux fondamentaux du développement web (HTML, CSS, JavaScript), organisée par le Microsoft Student Club.",
      image: "/mic.png",
      win: "",
      mlh: "",
      links: [],
    },
  ],

  clubs: [
    {
      name: "Microsoft Student Club - ISSAT Sousse",
      description: "",
      logoUrl: "/mic.png",
      start: "2021",
      end: "2023",
      role: "Member",
    },
    {
      name: "IEEE Student Branch - ISSAT Sousse",
      description: "",
      logoUrl: "/ieee.jpg",
      start: "2022",
      end: "2023",
      role: "Member",
    },
    {
      name: "Google Developer Student Clubs - ISSAT Sousse",
      description: "",
      logoUrl: "/gdsc.png",
      start: "2022",
      end: "2023",
      role: "Member",
    },
  ],
} as const;
