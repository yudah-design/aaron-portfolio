# Portfolio — Aaron

Site portfolio créatif construit avec **React**, **Tailwind CSS** et **Framer Motion**.

## Démarrer le projet

```bash
npm install
npm run dev
```

Puis ouvre l'adresse affichée dans le terminal (en général `http://localhost:5173`).

Pour générer la version de production (dossier `dist/`, prêt à héberger) :

```bash
npm run build
npm run preview   # pour prévisualiser le build en local
```

## Où modifier le contenu

Tout le texte (services, projets, compétences, réseaux sociaux) est centralisé dans :

```
src/data/content.js
```

Modifier ce fichier suffit pour changer les projets, descriptions, catégories, etc. sans toucher au design.

## Où remplacer les images et vidéos

Les visuels sont actuellement des **placeholders** (dégradés + libellés) pour que tu puisses les remplacer facilement :

- `src/components/Hero.jsx` — fond de la section d'accueil (actuellement un dégradé avec "SHOWREEL"). Remplace le `<div>` de fond par une balise `<video>` ou `<img>`.
- `src/components/About.jsx` — portrait (bloc "PORTRAIT.JPG").
- `src/components/Projects.jsx` — vignettes de la galerie de projets.
- `src/components/ProjectModal.jsx` — média affiché dans la fenêtre de détail d'un projet.

Le plus simple : place tes fichiers dans `src/assets/`, importe-les en haut du composant
(`import monImage from "../assets/mon-image.jpg"`), puis utilise-les dans une balise `<img src={monImage} />` ou `<video src={...} />` à la place du `<div>` placeholder.

## Structure du projet

```
src/
  App.jsx               → assemble toutes les sections
  index.css             → styles globaux, textures, effets glassmorphism
  data/content.js        → tout le texte et les données (à éditer en priorité)
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Services.jsx
    Projects.jsx
    ProjectModal.jsx
    Skills.jsx
    Contact.jsx
    Footer.jsx
```

## Formulaire de contact

Le formulaire (`src/components/Contact.jsx`) affiche une confirmation à l'envoi mais n'est
branché à aucun service pour l'instant. Pour le rendre fonctionnel, connecte-le à un service
comme [Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com/) ou ton propre backend
dans la fonction `handleSubmit`.

## Déploiement

Le dossier généré par `npm run build` (`dist/`) est un site statique : il peut être déployé
tel quel sur Vercel, Netlify, GitHub Pages ou tout hébergement statique.
