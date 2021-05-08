# Getting Started with Material-ui tailwindcss Create React App (and many more libraries) together

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with [Typescript](https://typscriptlang.org) support.

## Installed configurations

This template is build with the following configurations installed:

### [Material-ui](https://material-ui.com)

A popular React ui framework build on top of Google's [Material Design](https://material.io).

A challenge for this library is making it RTL support, So this template is made RTL by default. If you need that LTR, just remove `LTRProvider` around the tree, and change the `theme.js` accordingly.

### [tailwindcss](https://tailwindcss.com)

A css library that makes the life easier by providing useful css classes.

This library is integrated with material-ui, so you have access to all theme attributes (useful ones, actually __palette__) inside the provided classNames. (e.g. `bg-primary-dark`) 

A key challenge to do this was that tailwindcss config does not support Typescript, so we should avoid using any ts structures inside configurations, thus we made material theme as javascript.

In order to tailwind creates the css files automatically (watching for config file changes), we need to use [Craco](https://github.com/gsoft-inc/craco) and we had configured that for you. (More informations [here](https://tailwindcss.com/docs/guides/create-react-app)) (Otherwise we had to build css files everytime by hand.)

Please be noted that `Create-react-app` does not support Postcss v.8, so we need to keep it downgraded. (Postcss and autoprefixer)

### [Storybook](https://storybook.js.org)

An open source tool for developing UI components and pages in isolation that simplifies building, documenting, and testing UIs.

In normal situations you had to configure it hardly to match the other libraries, such as tailwindcss. But here it is...

Also there is a CI/CD available for free to deploy your Storybooks, called [Chromatic](https://www.chromatic.com). We had configured it for you as well.

### Craco

As we said before, we need it for tailwindcss.

It's noteworthy that craco (or maybe CRA itself) does not support ts import aliases, so we had installed and configured a third library for it called [craco-alias](https://github.com/risenforces/craco-alias).

### Code styling tools

This template is made with (almost) most strict code style configurations. `tsconfig`, `prettier` and `eslint` rules are configured one by one and are ready to use. 

### RestAPI library stack

In order to connect to a rest api with our template effectively, the following libraries are installed:

* [axios](https://github.com/axios/axios): A promise based HTTP client for the browser and node.js.

* [openapi tools generator](https://github.com/OpenAPITools/openapi-generator): A generator for API client libraries (SDK generation), server stubs, documentation and configuration given an OpenAPI Spec.

* [React query](https://react-query.tanstack.com): A library to fetch, cache and update data in React and React Native applications all without touching any "global state".

It's noteworthy that we have not done special hard configurations for these latter libraries. It's only our recommended stack for managing network, give them a try.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn storybook`

Starts the storybook in development mode. Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

### `yarn build-storybook`

Builds the static storybook production.

### `yarn chromatic`

Pushes latest story changes to chromatic cdn.

In order to use this command, you should sign up to chromatic, then import your project, get project token and change token in current script. (Found in `package.json`)

### `yarn introspect`

(Re)generates the server models and apis with current configurations.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
