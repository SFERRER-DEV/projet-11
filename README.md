# Projet Kasa

## Présentation

Développez une application Web avec React et React Router pour la formation Openclassrooms de développeur d'application JS React.
Kasa est le projet numéro 11 de la formation.

## L'architecture du projet

- Ce projet a été initialisé avec [Create React App](https://github.com/facebook/create-react-app).
- La bibliothèque React Router v5.3.4 permet de gérer la navigation.
- Les données affichées proviennent du fichier logements.json placé dans le dossier public/data/
- Les données des annonces de logeements sont partagées globalement par le contexte HousingContext
- Le Provider HousingProvider est placé au niveau du router et englobe les pages: Toutes les annonces sont contextualisées sur toutes les pages.
- Les composants React créés pour Kasa:
  - L'entête et le pied des pages sont des composants.
  - Dropdown: Permet d'afficher des boites qui se déplient pour lire un paragraphe.
  - Carousel: Un aarrousel pour faire défiler les photographies d'une annonce dans des slides.
  - CardHousing: Une carte HTML pour présenter le titre et la photo de couverture d'une annonce.
  - Rating: Présente une note de 0 à 5 sous forme d'étoiles pleines ou vides.
  - Accomodation: Les propriétés de ce composant affichent les données texte d'une annonce. Il imbrique un composant Rating et deux composants Dropbox.
- Les styles CSS sont définis en JS in CSS avec la bibliothèque Styled Components.
  - Un style global est ajouté pour toutes les pages au niveau du Routeur.
  - Les styles spécifiques sont écrits au niveau des composants.
- Un fichier CSS externe styles/index.css est aussi lié à la page principale.
- Le codebase est mis en forme par l'extension Prettier et est vérifié par ESLint.

## Liens

- Voir le site web sur la plateforme Vercel.com: [Openclassrooms projet 11: Kasa](https://projet-11-gm0imnzhe-sferrer-dev.vercel.app/)

## Scripts

Dans le répertoire du projet, vous pouvez exécuter : `npm start`
Lancer l'application en mode développement. Ouvrez [http://localhost:3000](http://localhost:3000) pour l'afficher dans votre navigateur.
