// Centralise tout le contenu ici pour pouvoir le modifier facilement
// sans toucher aux composants.
import visuel01 from "../assets/portfolio/visuel-01.jpg"; 
import visuel02 from "../assets/portfolio/visuel-02.jpg"; 
import visuel03 from "../assets/portfolio/visuel-03.jpg"; 
import visuel04 from "../assets/portfolio/visuel-04.jpg"; 
import visuel05 from "../assets/portfolio/visuel-05.jpg";
import visuel06 from "../assets/portfolio/visuel-06.jpg"; 
import visuel07 from "../assets/portfolio/visuel-07.jpg"; 
import visuel08 from "../assets/portfolio/visuel-08.jpg"; 
import visuel09 from "../assets/portfolio/visuel-09.jpg"; 
import visuel10 from "../assets/portfolio/visuel-10.jpg";
import visuel11 from "../assets/portfolio/visuel-11.jpg"; 
import visuel12 from "../assets/portfolio/visuel-12.jpg";
import cm01 from "../assets/portfolio/cm-01.jpg";
import cm02 from "../assets/portfolio/cm-02.jpg";
export const roles = ["Graphiste", "Monteur Vidéo", "Vidéaste", "Community Manager"];

export const services = [
  {
    id: "graphisme",
    label: "Graphisme",
    code: "GR—01",
    summary: "Des identités visuelles et supports qui donnent à une marque une voix reconnaissable.",
    items: ["Affiches et flyers", "Identité visuelle", "Branding", "Design pour réseaux sociaux", "Supports de communication"],
  },
  {
    id: "montage",
    label: "Montage vidéo",
    code: "MV—02",
    summary: "Un rythme, une narration et une finition qui gardent l'attention jusqu'à la dernière seconde.",
    items: ["Montage professionnel", "Reels et vidéos courtes", "Vidéos YouTube", "Vidéos promotionnelles", "Motion design et animations"],
  },
  {
    id: "videographie",
    label: "Vidéographie",
    code: "VD—03",
    summary: "Une captation soignée sur le terrain, pensée pour raconter l'instant plutôt que le filmer.",
    items: ["Couverture d'événements", "Captation vidéo", "Vidéos promotionnelles", "Interviews", "Contenu créatif"],
  },
  {
    id: "community",
    label: "Community Management",
    code: "CM—04",
    summary: "Une présence digitale cohérente, pensée pour durer au-delà d'une seule publication.",
    items: ["Gestion de réseaux sociaux", "Création de contenu", "Stratégies de communication", "Planification de publications", "Développement de l'image digitale"],
  },
];

export const filters = ["Tous", "Graphisme", "Vidéo", "Vidéographie", "Community Management"];

export const projects = [
  {
    id: 1,
    title: "REJOICE — Atelier de danse",
    category: "Graphisme",
    duration: "Affiche événementielle",
    image: visuel01,
    description: "Affiche promotionnelle pour l'événement REJOICE au Centre Yotsar.",
    detail:
      "Création d'une affiche dynamique pour l'événement REJOICE, avec une direction artistique colorée autour du violet et du rose vif.",
    tags: ["Affiche", "Événement", "Direction artistique"],
  },

  {
    id: 2,
    title: "LIFE — Événement",
    category: "Graphisme",
    duration: "Affiche événementielle",
    image: visuel02,
    description:
      "Affiche pour l'événement LIFE du mois de juin 2026.",
    detail:
      "Composition autour d'un jeune homme tenant un cadre blanc, sur un dégradé violet et orange accompagné de formes abstraites.",
    tags: ["Affiche", "Événement", "Composition"],
  },

  {
    id: 3,
    title: "JEUNE ET CONSACRÉ",
    category: "Graphisme",
    duration: "29.03.2026",
    image: visuel03,
    description:
      "Affiche de l'événement JEUNE ET CONSACRÉ au Centre Yotsar.",
    detail:
      "Direction artistique sombre et premium avec typographie 3D dorée et argentée, texture noire et silhouette jaune au centre de la composition.",
    tags: ["Affiche", "Typographie 3D", "Événement"],
  },

  {
    id: 4,
    title: "Heureux Ramadan & Mubarak",
    category: "Graphisme",
    duration: "Juris Immo Conseils",
    image: visuel04,
    description:
      "Création pour Juris Immo Conseils à l'occasion du Ramadan.",
    detail:
      "Visuel symbolisant la fraternité et le dialogue interreligieux à travers une poignée de main entre un prêtre catholique et un imam.",
    tags: ["Communication", "Juris Immo Conseils", "Fête"],
  },

  {
    id: 5,
    title: "Eid AL-ADHA MUBARAK",
    category: "Graphisme",
    duration: "Juris Immo Conseils",
    image: visuel05,
    description:
      "Visuel de célébration de l'Eid AL-ADHA pour Juris Immo Conseils.",
    detail:
      "Composition vert émeraude inspirée de l'univers graphique islamique, avec motifs géométriques, lanterne dorée et croissant de lune.",
    tags: ["Communication", "Design", "Fête"],
  },

  {
    id: 6,
    title: "Joyeuse Fête de PÂQUES",
    category: "Graphisme",
    duration: "Juris Immo Conseils",
    image: visuel06,
    description:
      "Création de communication pour la fête de Pâques.",
    detail:
      "Mise en scène du tombeau vide et lumineux dans un cadre doré, avec les trois croix du Golgotha en arrière-plan.",
    tags: ["Communication", "Pâques", "Direction artistique"],
  },

  {
    id: 7,
    title: "Bonne fête de l'Indépendance",
    category: "Graphisme",
    duration: "Juris Immo Conseils",
    image: visuel07,
    description:
      "Visuel célébrant la fête de l'Indépendance de la Côte d'Ivoire.",
    detail:
      "Composition mettant en valeur la Basilique Notre-Dame de la Paix de Yamoussoukro avec les couleurs orange, blanc et vert du drapeau ivoirien.",
    tags: ["Communication", "Côte d'Ivoire", "Événement"],
  },

  {
    id: 8,
    title: "BLOOM SUNDAY",
    category: "Graphisme",
    duration: "16.08.2026",
    image: visuel08,
    description:
      "Affiche événementielle pour BLOOM SUNDAY.",
    detail:
      "Direction artistique dynamique et colorée autour d'un fond rose magenta, de formes fluides et du portrait d'une jeune femme souriante.",
    tags: ["Affiche", "Événement", "Création graphique"],
  },

  {
    id: 9,
    title: "Formations sur l'immobilier",
    category: "Graphisme",
    duration: "Juris Immo Conseils",
    image: visuel09,
    description:
      "Visuel annonçant le lancement prochain des formations sur l'immobilier.",
    detail:
      "Composition professionnelle autour d'un porte-bloc et d'un document imprimé disposés sur un bureau en bois.",
    tags: ["Communication", "Immobilier", "Juris Immo Conseils"],
  },

  {
    id: 10,
    title: "Bilan de Santé Annuel",
    category: "Graphisme",
    duration: "15.03.2026",
    image: visuel10,
    description:
      "Affiche pour le Bilan de Santé Annuel de l'Église Vase d'Honneur Centre Yotsar.",
    detail:
      "Direction artistique médicale sur fond rouge foncé avec stéthoscope et tracé d'électrocardiogramme.",
    tags: ["Affiche", "Événement", "Communication"],
  },

  {
    id: 11,
    title: "Bonne Fête Papa",
    category: "Graphisme",
    duration: "Hommage",
    image: visuel11,
    description:
      "Visuel de célébration dédié à l'Apôtre Mohammed Sanogo.",
    detail:
      "Composition lumineuse intégrant deux portraits de l'Apôtre et une grappe de ballons dorés pour une ambiance festive et élégante.",
    tags: ["Portrait", "Célébration", "Design"],
  },

  {
    id: 12,
    title: "SPECIAL BRIGADE — Street Gospel",
    category: "Graphisme",
    duration: "07.03.2026",
    image: visuel12,
    description:
      "Affiche pour SPECIAL BRIGADE Street Gospel au Centre Yotsar.",
    detail:
      "Direction artistique contrastée avec une main tenant un mégaphone en noir et blanc, accompagnée d'éléments graphiques jaunes et rouges.",
    tags: ["Affiche", "Street Gospel", "Événement"],
  },
  {
    id: 13,
    title: "Recap Chill and Rest",
    category: "Vidéo",
    duration: "Recap événement",
    type: "video",
    video: "https://res.cloudinary.com/ujrutfci/video/upload/v1788275799/montage-01.mp4",
    description: "Recap vidéo de l'événement Chill and Rest.",
    detail:
      "Montage récapitulatif mettant en valeur les différents moments de l'événement et son ambiance, avec une identité visuelle portée par le logo Chill REST.",
    tags: ["Montage vidéo", "Recap", "Événementiel"],
  },

  {
    id: 14,
    title: "Recap Effusion — Jour 2",
    category: "Vidéo",
    duration: "Recap événement",
    type: "video",
    video: "https://res.cloudinary.com/ujrutfci/video/upload/v1788275805/montage-02.mp4",
    description: "Recap vidéo de la deuxième journée d'Effusion.",
    detail:
      "Montage dynamique retraçant les temps forts de la deuxième journée de l'événement Effusion.",
    tags: ["Montage vidéo", "Recap", "Événementiel"],
  },

  {
    id: 15,
    title: "VIBEATHON 1",
    category: "Vidéo",
    duration: "Aftermovie",
    type: "video",
    video: "https://res.cloudinary.com/ujrutfci/video/upload/v1788275795/montage-03.mp4",
    description: "Premier montage vidéo autour de l'expérience VIBEATHON 2026.",
    detail:
      "Montage mettant en scène l'univers du VIBEATHON 2026 et son énergie à travers différentes séquences tournées sur le terrain.",
    tags: ["Montage vidéo", "VIBEATHON", "Événementiel"],
  },

  {
    id: 16,
    title: "VIBEATHON 2",
    category: "Vidéo",
    duration: "Aftermovie",
    type: "video",
    video: "https://res.cloudinary.com/ujrutfci/video/upload/v1788275791/montage-04.mp4",
    description: "Deuxième montage vidéo autour de l'expérience VIBEATHON 2026.",
    detail:
      "Deuxième réalisation consacrée au VIBEATHON 2026, avec une approche dynamique et immersive.",
    tags: ["Montage vidéo", "VIBEATHON", "Événementiel"],
  },

  {
    id: 17,
    title: "Juris Immo Conseils — Motion Design",
    category: "Vidéo",
    duration: "Motion design",
    type: "video",
    video: "https://res.cloudinary.com/ujrutfci/video/upload/v1788275819/montage-05.mp4",
    description: "Animation graphique réalisée pour Juris Immo Conseils.",
    detail:
      "Motion design basé sur une silhouette, des éléments graphiques et du texte pour communiquer de manière claire et dynamique.",
    tags: ["Motion Design", "Animation", "Juris Immo Conseils"],
  },

  {
    id: 18,
    title: "Juris Immo Conseils — Face Cam",
    category: "Vidéo",
    duration: "Face caméra",
    type: "video",
    video: "https://res.cloudinary.com/ujrutfci/video/upload/v1788275824/montage-06.mp4",
    description:
      "Vidéo face caméra consacrée à la protection juridique.",
    detail:
      "Contenu vidéo pédagogique réalisé pour Juris Immo Conseils, abordant la protection juridique avec des éléments visuels autour de la balance de la justice.",
    tags: ["Face Cam", "Communication", "Juris Immo Conseils"],
  },
  {
  id: 19,
  title: "Bloom Yotsar Dancers — TikTok",
  category: "Community Management",
  duration: "Gestion de contenu",
  image: cm01,
  description:
    "Développement de la présence TikTok de Bloom Yotsar Dancers autour du contenu de danse et de la communauté.",
  detail:
    "Création et valorisation de contenus courts autour de la danse, avec une communication adaptée aux codes de TikTok et à l'identité du ministère. Le compte affiche 4 891 abonnés et 49,5 K mentions J'aime.",
  tags: ["TikTok", "Création de contenu", "Community Management"],
},

{
  id: 20,
  title: "Bloom Centre Yotsar — TikTok",
  category: "Community Management",
  duration: "Gestion de contenu",
  image: cm02,
  description:
    "Gestion et développement de la présence TikTok de Bloom Centre Yotsar.",
  detail:
    "Création et mise en avant de contenus liés aux activités, événements et communications du ministère des jeunes. Le compte affiche 8 958 abonnés et 134,1 K mentions J'aime.",
  tags: ["TikTok", "Stratégie de contenu", "Réseaux sociaux"],
},
];

export const skills = [
  { name: "Adobe Photoshop", level: 5 },
  { name: "Adobe Illustrator", level: 5 },
  { name: "Montage vidéo", level: 5 },
  { name: "Création de contenu", level: 4 },
  { name: "Vidéographie", level: 4 },
  { name: "Community Management", level: 4 },
  { name: "Stratégie digitale", level: 3 },
];

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/g_amady17/?__pwa=1" },
  { label: "Tiktok", href: "https://www.tiktok.com/@brother_irwin?is_from_webapp=1&sender_device=pc" },
];
