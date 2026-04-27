const projects = [
    {
        id: 1,
        title: 'Sibtbib — Plateforme de gestion bibliothèque universitaire',
        description: `CLIENT : Université de Sétif — Gestion de 500+ étudiants et 3000+ ouvrages
PROBLÈME : Système manuel papier pour les emprunts, perte de temps administrative, pas de réservation en ligne, difficulté à suivre les retours.
SOLUTION : Application fullstack React/Node.js avec dashboard admin et interface étudiante
   • API REST sécurisée avec authentification JWT
   • Base MongoDB avec index optimisés (recherches <100ms)
   • Dashboard admin : statistiques d'emprunts, gestion des livres, alerts retours
   • Interface étudiante : réservation en ligne, historique, notifications
   • Design responsive (mobile, tablet, desktop)
RÉSULTAT :
   ✅ +60% d'emprunts traités (vs système papier)
   ✅ Réduction de 15h/semaine de travail administratif
   ✅ 0 bug critique en 10 mois de production
   ✅ Score PageSpeed > 90/100
LIVE : https://sibtbib-frontend.vercel.app/
CODE : https://github.com/adam0794hh/Sibtbib`,
        image: '/portfolio7.jpg',
        type: 'site_fullstack',
        url: 'https://sibtbib-frontend.vercel.app/',
        featured: true,
        testimonial: {
            text: "Adam a livré une application robuste qui tourne sans souci depuis des mois. Le code est propre, bien documenté, et le support après-livraison est au rendez-vous.",
            author: "Pr. Benali",
            role: "Directeur de la bibliothèque, Université de Sétif"
        }
    },
    {
        id: 2,
        title: 'DelivryCart — Marketplace de livraison alimentaire',
        description: `STARTUP : DelivryCart — Connexion restaurants / clients / livreurs (projet personnel)
PROBLÈME : Besoin d'une plateforme complète pour lancer un service de livraison type "Uber Eats local" avec gestion des commandes en temps réel et suivi des livreurs.
SOLUTION : Application fullstack React/Node.js avec 3 interfaces distinctes
   • Frontend client : catalogue restaurants, panier, commandes, suivi en temps réel
   • Dashboard admin : gestion restaurants, commandes, analytics, commission
   • Interface livreur : notifications push, navigation, mise à jour statut
   • API REST complète avec WebSockets pour temps réel
   • MongoDB pour données flexibles (menus, commandes, users)
RÉSULTAT :
   ✅ Application livrée en 6 semaines, opérationnelle immédiatement
   ✅ Architecture scalable, code maintenable et documenté
   ✅ Design moderne avec animations fluides et UX optimisée
   ✅ Prêt pour intégration paiements (Stripe) et maps (Google Maps API)
LIVE : https://delivrycart.vercel.app
CODE : https://github.com/adam0794hh/DelivryCart (private sur demande)`,
        image: '/portfolio8.jpg',
        type: 'site_fullstack',
        url: 'https://delivrycart.vercel.app',
        featured: true,
        testimonial: null
    },
    {
        id: 3,
        title: 'Kardoune Cosmétique — Boutique e-commerce WordPress',
        description: `CLIENT : Kardoune Cosmétique (Marque de cosmétiques naturels — vente directe)
PROBLÈME : Site vitrine obsolète, pas de vente en ligne, perte de clients au profit des concurrents, gestion manuelle des commandes.
SOLUTION : Refonte complète WordPress + WooCommerce avec design sur-mesure
   • Theme personnalisé avec Elementor Pro pour design unique
   • WooCommerce configuré : paiements sécurisés (Stripe), livraisons, taxes
   • Optimisation SEO on-page (Yoast SEO) et speed (score PageSpeed >85)
   • Formulaire de contact avec reCAPTCHA, newsletters (Mailchimp)
   • Formation client pour gestion produits/commandes
RÉSULTAT :
   ✅ Boutique en ligne fonctionnelle, sécurisée et facile à gérer
   ✅ Augmentation de +40% des ventes en ligne en 3 mois
   ✅ Temps de chargement <2s, meilleure expérience mobile
   ✅ Client autonome pour mises à jour quotidiennes
LIVE : https://www.kardounecosmetique.fr/
LOGIN client dispo sur demande`,
        image: '/portfolio6.jpg',
        type: 'site_wordpress',
        url: 'https://www.kardounecosmetique.fr/',
        featured: true,
        testimonial: {
            text: "Adam a parfaitement compris nos besoins. Le site est beau, rapide, et surtout il nous permet de vendre en ligne sans dépendre d'un tiers. Je recommande vivement.",
            author: "Khadija Ben.",
            role: "Fondatrice, Kardoune Cosmétique"
        }
    }
];

// PROJETS PÉDAGOGIQUES — NON-AFFICHÉS par défaut (featured: false)
// Gardés pour référence mais pas dans la vitrine principale
const educationalProjects = [
    {
        id: 101,
        title: 'Booki — Intégration HTML/CSS (Projet OC)',
        description: `Exercice OpenClassrooms — Intégration d'une maquette responsive en HTML/CSS pur.
Technologies : HTML5 sémantique, CSS3 Flexbox/Grid.
Lien : https://adam0794hh.github.io/Hammouche_Adam_2_code_112022/`,
        image: '/portfolio1.jpg',
        type: 'site_vitrine',
        url: 'https://adam0794hh.github.io/Hammouche_Adam_2_code_112022/',
        featured: false
    },
    {
        id: 102,
        title: 'OhmyFood — Restaurant menu (Projet OC)',
        description: `Exercice OpenClassrooms — Site restaurant avec CSS Grid et animations.
Technologies : HTML5, CSS3 animations, Mobile-first.
Lien : https://ohhmyfoood.netlify.app`,
        image: '/portfolio2.jpg',
        type: 'site_vitrine',
        url: 'https://ohhmyfoood.netlify.app',
        featured: false
    },
    {
        id: 103,
        title: 'Kasa — App React (Projet OC)',
        description: `Exercice OpenClassrooms — Application React avec components, routing, CSS Modules.
Technologies : React 18, React Router, CSS Modules.
Lien : https://oc-project-kasa.netlify.app/`,
        image: '/portfolio4.jpg',
        type: 'site_vitrine',
        url: 'https://oc-project-kasa.netlify.app/',
        featured: false
    }
];

// Export principal — projets featured uniquement en vitrine
export default [...projects.filter(p => p.featured), ...educationalProjects];