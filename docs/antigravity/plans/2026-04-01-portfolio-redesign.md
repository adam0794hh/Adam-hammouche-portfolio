# Plan d'implémentation du Design "Cyber-Minimalist 2026"

**Objectif :** Refondre entièrement le design du portfolio actuel vers une esthétique Cyber-Minimaliste haut de gamme, intégrant le Glassmorphism, une Bento Grid pour les compétences, et un système de design cohérent sous forme de variables CSS.

**Architecture :** 
- Centralisation du design system dans un fichier `src/index.css` (variables CSS).
- Utilisation de **Google Fonts** pour une typographie premium (Space Grotesk, Inter).
- Mise en œuvre d'une structure **Bento Grid** modulable via Flexbox/CSS Grid.
- Micro-animations via transitions CSS et keyframes optimisés.

**Stack Technique :**
- React (Vite)
- Vanilla CSS 3
- Google Fonts API

---

### Tâche 1 : Mise en œuvre du Design System Global

**Fichiers :**
- Modifier : `index.html` (Ajout des polices)
- Créer : `src/index.css` (Variables & Resets)
- Modifier : `src/main.jsx` (Import du style global)

- [ ] **Étape 1 : Ajouter les polices Premium dans le Head**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono&display=swap" rel="stylesheet">
```

- [ ] **Étape 2 : Définir les variables CSS fondamentales**
```css
:root {
  --bg-dark: #030303;
  --surface: #0a0a0a;
  --accent: #00e5ff;
  --text-main: #ffffff;
  --text-muted: #888888;
  --glass: rgba(255, 255, 255, 0.03);
  --glass-border: rgba(255, 255, 255, 0.1);
  --cyan-glow: 0 0 20px rgba(0, 229, 255, 0.15);
  --font-heading: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--font-body);
}

body {
  background-color: var(--bg-dark);
  color: var(--text-main);
  overflow-x: hidden;
}
```

- [ ] **Étape 3 : Connecter le CSS global**
```javascript
import './index.css'
```

---

### Tâche 2 : Refonte de la Navigation (Glassmorphism)

**Fichiers :**
- Modifier : `src/components/Navbar.jsx`
- Modifier : `src/components/navbar.css`

- [ ] **Étape 1 : Mettre à jour le style CSS**
```css
.navbar {
  background: var(--glass);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--glass-border);
  height: 80px;
  /* ... autres propriétés ... */
}
```

---

### Tâche 3 : Section Covers (Hero Section)

**Fichiers :**
- Modifier : `src/components/Cover.jsx`
- Modifier : `src/components/cover.css`

- [ ] **Étape 1 : Ajouter les animations Aurora et typographie**
Mise à jour des couleurs textuelles et ajout du background dynamique.

---

### Tâche 4 : Section Compétences (Transformation Bento Grid)

**Fichiers :**
- Modifier : `src/components/Competences.jsx`
- Modifier : `src/components/competences.css`

- [ ] **Étape 1 : Implémenter le layout Bento**
Utiliser `display: grid` avec `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` et des spans spécifiques.

---

### Tâche 5 : Section Portfolio (Works)

**Fichiers :**
- Modifier : `src/components/Portfolio.jsx`
- Modifier : `src/components/Portfolio.css`

- [ ] **Étape 1 : Égaliser les cartes et effets de survol**
Design minimaliste pour les cartes de projets.

---

### Tâche 6 : Footer & Polissage Final

**Fichiers :**
- Modifier : `src/components/Footer.jsx`
- Modifier : `src/components/footer.css`
