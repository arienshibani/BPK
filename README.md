# BPK Website [![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://bpk.nu/)

[![React !](https://badges.aleen42.com/src/react.svg)](https://shibaniphoto.web.app/)
[![npm !](https://badges.aleen42.com/src/npm.svg)](https://www.npmjs.com/) [![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html) [![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](mailto:aaari94@gmail.com)

Website made for CS:GO team Bleikemyr Pistol Klubb

# Development

For local development on the website, clone the repository.

```bash
git clone https://bitbucket.org/arienshibani/bleikemyr-pistol-klubb-homepage.git
```

Open a terminal in the repository's folder and execute the following:

- Type in `npm install` to install all the project dependancies.
- Type in `npm start` to serve the website locally.

# Deployment

- Simply `git push` any changes to update production.
  - Builds to [Firebase](https://firebase.google.com/docs) on each commit.

```yaml
    - pipe: atlassian/firebase-deploy:1.2.0
        variables:
            PROJECT_ID: $FIREBASE_PROJECT
            FIREBASE_TOKEN: $FIREBASE_TOKEN
            MESSAGE: 'Deploying BPK to prod.'
```
