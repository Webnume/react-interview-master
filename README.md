# REACT/ REDUX INTERVIEW : 
<< [Live Demo](https://incredible-dango-2228b0.netlify.app/) >>\
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
This project was tested with [Cypress.io](https://www.cypress.io/)\
this project quality was with [Sonarcloud.io](https://sonarcloud.io/summary/overall?id=Webnume_react-interview-master)

## Features Tests To Do

1. Lister les films dans des cartes avec: le titre en gras, la catégorie et une jauge type Youtube indiquant le ratio likes/dislikes. Les cartes doivent être côtes à côtes et responsive. Càd que lorsque la fenêtre se réduit, les cartes sautent à la ligne suivante.

2. Ajouter un bouton dans les cartes permettant de supprimer celle-ci

3. Ajouter un bouton toggle like/dislike

4. Ajouter un filtre par catégorie (de type multiselect) en supposant qu'on ne les connaisse pas à l'avance (il faut donc les récupérer dynamiquement depuis les films). Si tous les films d'une catégorie sont supprimés, celle-ci ne doit plus apparaître.

5. Ajouter un système de pagination avec les fonctionnalités suivantes: 
    * Boutons précédent/suivant
    * Choix du nombre d'élements affichés par page (4, 8 ou 12).

Prenez des initiatives, il y a des points bonus si

* C'est joli
* Vous utilisez correctement REDUX 
* Il y a une attention aux détails

/!\ La suppression du comportement asynchrone dans `movies.js` entraînera une annulation du test.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `yarn test`

Launches the test runner in the interactive watch mode for <a href="https://www.cypress.io/" target="_blank">Cypress.io</a>.

### `yarn build`

Builds the app for production to the `build` folder.\

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**
