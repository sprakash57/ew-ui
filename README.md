# ew-ui

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Live demo

https://ew-ui-drjhf.ondigitalocean.app/
## Prerequisites
Node.js v14+
Visual studio code
Chrome

> Lower version should work though not recommended.

## Development Environment setup

1. Clone this repo.
2. `cd` into `ew-ui` and run `npm i`. It will install all the dependencies mentioned in the package.json.
3. `npm start` will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
4. Do not use `prettier`. Use VS code default formatting (Alt + shift + F).
5. Once you are done with the feature, raise PR (`ew-#`) against the develop branch.
6. After PR merges, it will be deployed automatically to digitalocean in 5 - 10 mins. No extra step needed. If changes are not reflecting, clear your browser cache and try again.

## Deployment for development

Deployment pipeline for development can be tracked over [digitalocean](https://cloud.digitalocean.com/apps/b1dda3d3-0567-4b83-aeee-6a1ae28a3cd3/settings?i=3fd246).

## Other available Scripts

In the project directory, you can run:
### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
