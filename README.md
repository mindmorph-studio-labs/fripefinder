# 🧥 FripeFinder - Annuaire Professionnel des Friperies Françaises

**FripeFinder** est une application web moderne, performante et optimisée SEO, dédiée au référencement et à la valorisation des friperies en France. Construite avec **Next.js 16**, **TypeScript**, **App Router** et **Firebase**, elle offre une expérience utilisateur fluide (mobile-first) et des outils puissants pour les professionnels et les visiteurs.

---

## 🎨 Identité Visuelle & Design System

Le projet adopte une esthétique **"Vintage Moderne"** (inspirée des magazines de mode rétro et des plateformes comme Depop/Vestiaire Collective) :

- **Typographie** : `Fraunces` (Serif élégante pour les titres) + `Inter` (Sans-serif pour la lisibilité du corps de texte).
- **Palette de couleurs** :
  - 🔴 **Primaire (Terracotta)** : `#B8543F` (Chaleur, authenticité)
  - 🟤 **Fond (Crème)** : `#F5EFE6` (Douceur, aspect papier vintage)
  - 🟢 **Accent (Vert Sauge)** : `#6B7F5E` (Éco-responsabilité, mode durable)
  - 🟡 **Premium (Or Moutarde)** : `#C9A961` (Mise en avant, qualité)
  - ⚫ **Texte (Charbon)** : `#2A2A2A` (Contraste élégant)
- **Style UI** : Ombres décalées "néo-brutalistes" douces, badges style "étiquette cousue" (pointillés), bordures épaisses, texture grain subtile.

---

## 🚀 Tech Stack

- **Frontend** : Next.js 16 (App Router, Turbopack), React 19, TypeScript
- **Styling** : Tailwind CSS, Shadcn UI (Preset: Nova / Radix UI), Lucide React (icônes) + SVG inline pour les marques
- **Notifications** : Sonner (Toasts modernes)
- **Backend & BaaS** : Firebase (Authentication, Firestore, Cloud Storage, Cloud Functions)
- **Validation** : Zod (schémas de validation robustes)
- **SEO & Perf** : Next.js Metadata API, Sitemap dynamique, `next/image`, Lazy loading
- **Déploiement** : Vercel

---

## 🏗️ Architecture du Projet

```text
├── app/                          
│   ├── (public)/                 # Routes publiques
│   │   ├── page.tsx              # Home page (Structure 9 sections)
│   │   ├── [region]/             # Routing géographique strict
│   │   │   └── [departement]/    
│   │   │       └── [ville]/      
│   │   │           └── [slug]/   # Fiche friperie (gratuite ou premium)
│   │   ├── annuaire/             # Page de recherche avec filtres avancés
│   │   ├── blog/                 # Page blog SEO
│   │   │   └── [slug]/           # Page article
│   │   ├── contact/              # Contact & support
│   │   └── legal/                # Mentions légales, CGU / CGV
│   ├── (pro)/                    # Routes professionnels
│   │   ├── inscription/          
│   │   ├── connexion/            
│   │   ├── dashboard/            # Dashboard pro (fiche, réassort, stats)
│   │   └── premium/              # Page de vente et upgrade
│   ├── (user)/                   # Routes visiteurs
│   │   ├── inscription/          
│   │   ├── connexion/            
│   │   ├── dashboard/            # Dashboard visiteur (XP, favoris)
│   │   └── profil/               
│   └── (gamification)/           
│       ├── leaderboard/          
│       ├── ancien-leaderboard/   
│       └── tirage-trimestriel/   
├── components/                   
│   ├── layout/                   # Header, Footer
│   ├── home/                     # Sections de la homepage (Hero, Features, BlogTeaser, etc.)
│   ├── directory/                # Fiches, Cartes, Badges
│   ├── filters/                  # Composants de filtres (Styles, Prix, etc.)
│   ├── gamification/             # Barres de progression, Badges, Leaderboard
│   └── ui/                       # Composants Shadcn + Sonner
├── lib/                          
│   ├── firebase/                 # Config et services Firebase
│   ├── validations/              # Schémas Zod
│   └── utils/                    # Fonctions utilitaires (cn, etc.)
├── types/                        # Définitions TypeScript globales
└── public/                       # Assets statiques
```

---

## 🏠 Structure de la Home Page (9 Sections)

1. **Header Professionnel** : Logo, Navigation, CTA "Lister mon établissement".
2. **Hero Search** : Double champ distinct ("Ville" + "Style friperie : Vintage, Y2K, Luxe...") + Tags populaires cliquables.
3. **Filtres Rapides** : Prix, Avis, Disponibilité, Distance.
4. **Partenaires Premium** : Carousel/Grid de friperies coup de cœur (ex: "La Friperie Parisienne", "L'Atelier Seconde Main") avec badges (Top Avis, Vérifié).
5. **Fonctionnalités** : Filtres intelligents, Avis vérifiés, Devis rapides, WhatsApp Direct.
6. **Pourquoi les Pros** : Grille d'avantages (Visibilité locale, Leads qualifiés, Stats) + CTA vert.
7. **Avis & Gamification** : Système de points/badges et Top Contributeurs du trimestre.
8. **Teaser Blog** : 3 articles SEO (Guide Vintage, Mode Durable, Astuces Chine) avec CTA vers le blog.
9. **Explorer** : Grille mixte Catégories (Vintage, Luxe, Y2K) & Villes (Paris, Lyon, Bordeaux, Toulouse).
10. **Footer** : Logo, liens de navigation, légal, réseaux sociaux (SVG inline).

---

## ⚙️ Règles Métier Fondamentales

### 1. Structure Géographique Stricte
Les seules "catégories" de navigation URL sont : `Région` → `Département` → `Ville`. 
Une fiche friperie n'est **jamais** une catégorie. 
URL officielle : `/{region}/{departement}/{ville}/{slug-friperie}` (ex: `/occitanie/gers/auch/friptout`).

### 2. Séparation Catégories / Filtres
- **Catégories/Métiers** : Secteurs d'activité affichés dans le Hero et l'exploration (Vintage, Seconde main, Y2K, Workwear, Créateurs).
- **Filtres** : Critères de tri combinables dans la page annuaire (Styles, Sélection/Qualité, Prix, Mode de fonctionnement : vrac/chaîne).

### 3. Système Professionnel (Gratuit vs Premium)
- **Gratuit** : Présence de base, 1 photo, apparition en bas de page, pas de lien externe, pas de badge "Vérifié".
- **Premium (14,90€/mois ou 99€/an)** : Mise en avant prioritaire, badge "Recommandé/Vérifié", jusqu'à 8 photos, liens web/IG, réassort hebdomadaire, statistiques. 
- *Règle d'or* : Jamais de "TOP 3 garanti". On vend de la visibilité et de la priorité, pas un classement fixe.

### 4. Gamification Visiteurs
- **XP** : Inscription (+50), Login journalier (+10), Like (+5), Avis+photo (+40).
- **Paliers** : Bronze (0-149), Argent (150-349), Or (350-599), Platine (600-999), Diamant (1000+).
- **Reset Trimestriel** : XP remis à 0, leaderboard basculé en "Ancien Leaderboard", recalcul des qualifications pour le tirage au sort (min. 600 XP + 3 interactions + Badge Platine/Diamant).

---

## 🚀 Démarrage Rapide

```bash
# 1. Cloner et installer
npm install

# 2. Configurer les variables d'environnement
# Copier .env.example en .env.local et remplir les clés Firebase/Stripe

# 3. Lancer le serveur de développement
npm run dev
```

> **⚠️ Astuce Turbopack** : En cas d'erreur d'import bizarre avec Lucide React ou Shadcn, arrêtez le serveur et videz le cache : `rm -rf .next` puis `npm run dev`.

---

## 📊 SEO & Performance

- **Metadata dynamique** par page (title, description, Open Graph).
- **Sitemap.xml** et **robots.txt** générés dynamiquement.
- **Schema.org** : `LocalBusiness`, `Review`, `Article` pour le blog.
- **Images optimisées** : WebP, lazy loading, tailles adaptatives.
- **Objectif Core Web Vitals** : 95+ sur Lighthouse.

---

**Prêt à transformer la visibilité des friperies françaises !** 🇫🇷✨
```

---
