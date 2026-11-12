# Veronica Tesarova · Portfolio

Live site: **[veronica-tes06.github.io](https://veronica-tes06.github.io)**

My personal portfolio, built with **React** and **Vite**. It covers my software engineering placements at Ericsson, my final year project, and three projects, each shown with a screen recording of the app running:

- **[Exoplanet Disposition Classifier](https://github.com/veronica-tes06/exoplanet-disposition-classifier)**: machine learning on NASA Kepler data with scikit-learn, with a chart comparing the models
- **[Eurovision CRUD App](https://github.com/veronica-tes06/eurovision-crud-app)**: a PHP/Slim REST API with MySQL and a jQuery front end
- **[Eurovision 2025 Tracker](https://github.com/veronica-tes06/eurovision-tracker)**: a PyQt5 desktop app for browsing entries and casting jury votes

## Running it locally

Requires [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev        # development server at http://localhost:5173
npm run build      # production build in dist/
```

The build uses `vite-plugin-singlefile`, so all scripts, styles, videos and the CV are inlined into a single `dist/index.html`. The site works offline and opens straight from the file system, no server needed. `Veronica-Tesarova-Portfolio.html` in this repo is a copy of that build.

## Deployment

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the site and publishes it to GitHub Pages on every push to `main`.

## Project structure

```
src/
├── content.js                  # all text and data for the site
├── App.jsx                     # page layout and sections
├── styles.css                  # styling, with colours and fonts defined at the top
├── assets/                     # app recordings and CV
└── components/
    ├── AppVideo.jsx            # framed, looping screen recording
    ├── useVideoSrc.js          # converts inlined videos to Blob URLs so they play in Safari
    ├── ExoplanetChart.jsx      # model accuracy chart and per-class results
    ├── CrudShowcase.jsx        # CRUD app recording, architecture and API endpoints
    └── EmailActions.jsx        # "Email me" and "Copy address" buttons
```
