# NATAN Consulting : plateforme de formation IA

Site statique, sans build ni dépendance. Ouvrir `index.html` dans un navigateur suffit. Déployable tel quel sur GitHub Pages, Netlify ou Cloudflare Pages.

## Ce qui est en place

| Page | Rôle |
|---|---|
| `index.html` | Vitrine : positionnement, trois piliers, méthode SCORE, contact |
| `formations.html` | Catalogue filtrable (formation, atelier, support, exercices) |
| `formation.html?id=...` | Fiche détaillée générée depuis le catalogue, avec fiche de transparence |
| `transparence.html` | Charte : les six engagements affichés sur chaque offre |
| `espace-apprenant.html` | Trois modules d'exercices, progression conservée dans le navigateur |
| `outil-six-questions.html` | Outil gratuit et imprimable pour acheteurs de formation IA |

## Ajouter une offre

Tout le catalogue est dans `js/catalogue.js`. Copier un bloc, changer l'`id`, remplir les champs. La carte, la fiche et la fiche de transparence se génèrent seules. Pour une offre à répondre différemment sur la transparence, ajouter un objet `transparence` à l'offre.

## À faire avant mise en ligne

1. Renseigner `email` et `linkedin` dans `js/config.js`. Tant que l'adresse est vide, le formulaire de contact reste inactif.
2. Valider chaque offre du catalogue : titres, durées, programmes et publics sont des propositions de départ.
3. Valider la promesse « 0 formation revendue sous licence » et les six engagements de la charte. Ce sont des engagements publics.
4. Statut de financement : le site ne promet aucune prise en charge. Si des financements (CPF, OPCO) sont visés, vérifier d'abord les conditions applicables à l'organisme (certification qualité, déclaration d'activité) avant tout affichage.
5. Revalider les contenus réglementaires des exercices avant diffusion.
6. Ajouter les tarifs, ou garder le mode sur devis.

## Limites actuelles et étapes suivantes

- Pas de comptes ni de paiement : la progression est stockée dans le navigateur de l'apprenant. Étape suivante prévue : authentification et suivi côté serveur (Supabase), puis paiement.
- Les supports téléchargeables (PDF) ne sont pas encore déposés. Prévoir un dossier `supports/` et un champ `fichiers` par offre.
- L'exercice de bilan SCORE est un extrait de dix points, pas l'audit complet des 72.

## Charte

Fond `#080b14`, accents cyan `#38b6e8` et lilas `#b06ef0`, cartes `#141a2e`, filet dégradé cyan, lilas, rose. Montserrat pour le corps, serif italique pour les citations. Jamais de vert, jamais de fond blanc, zéro tiret cadratin.
