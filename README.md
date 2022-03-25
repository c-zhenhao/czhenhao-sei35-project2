# {React ? Stirred : !Notshaken}

See project deployed on Netlify here: https://reactshakennotstirred.netlify.app/
[![Netlify Status](https://api.netlify.com/api/v1/badges/fd30ba11-297a-4b23-90c0-f9b12ad58721/deploy-status)](https://app.netlify.com/sites/reactshakennotstirred/deploys)

## Why

This is the second project after 2 instructional weeks (7 Mar - 18 Mar) on how to use React amd 1 project development week (21 Mar - 25 Mar) at General Assembly's Software Engineering Immersive programme (GA-SEI).

## Technologies

- The app essentially uses `React`'s basic create-react-app. Everything else was done with `JS` & `CSS`
- Used `react-router-dom v6` for the page navigation
- Used `axios` to retrieve API requests

## Introduction

My MVP was to deliver a cocktail recipe search app. For example, if a user would like to look for how to make "Gin and Tonic", the app should be able to show what are the ingredients necessary (gin, tonic, optional: lime) and instructions (pour all into glass).

## Interesting points & project post-mortems

- As there was a need to pass multiple information and further display it in a modal, the react app got complicated very quickly (which I have yet organise them...)

  - Virtual DOM looks kind of like this:
  - ![project2_virtualDom](https://user-images.githubusercontent.com/16322250/160202279-23fe78cd-2122-4bf4-abd6-c02302d1ebde.png)


- React hooks that are "not-important-to-syllabus" functions such as `useReducer` & `useContext` in combination was actually quite useful and simplified problems of passing information from one child node. The concept of propping information lifting states still key to React and used.

  - Creating a "global" function since multiple things need to be done inside a modal. Storing the information in a "global" state

- Realised that Object destructruing was a key concept behind React & JS

## Useful links from the project

- [cocktail API](https://www.thecocktaildb.com/api.php)
- [React Movie App using React Hooks (useContext)](https://youtu.be/1eO_hNYzaSc)
- [Unique values in JS Array](https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates)

## Future roadmap

0. Organise the folders
1. Create the modal for Discover drinks. The cocktail
2. Refactor code - especially the modals
3. Material UI - look into improving the look & feel so it looks like an actual app
