![Coffeekraken HTML Boilerplate](/.resources/doc-header.jpg)

# Coffeekraken React Native Boilerplate <img src="/.resources/coffeekraken-logo.jpg" height="25px" />

<p>
	<!-- <a href="https://travis-ci.org/coffeekraken/react-native-boilerplate">
		<img src="https://img.shields.io/travis/coffeekraken/reac-nativet-boilerplate.svg?style=flat-square" />
	</a> -->
	<!-- <a href="https://www.npmjs.com/package/{package-name}">
		<img src="https://img.shields.io/npm/v/{package-name}.svg?style=flat-square" />
	</a> -->
	<!-- <a href="https://github.com/coffeekraken/react-native-boilerplate/blob/master/LICENSE.txt">
		<img src="https://img.shields.io/npm/l/{package-name}.svg?style=flat-square" />
	</a> -->
	<!-- <a href="https://github.com/coffeekraken/react-native-boilerplate">
		<img src="https://img.shields.io/npm/dt/{package-name}.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/react-native-boilerplate">
		<img src="https://img.shields.io/github/forks/coffeekraken/reac-nativet-boilerplate.svg?style=social&label=Fork&style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/react-native-boilerplate">
		<img src="https://img.shields.io/github/stars/coffeekraken/reac-nativet-boilerplate.svg?style=social&label=Star&style=flat-square" />
	</a>-->
  <a href="https://github.com/coffeekraken/react-native-boilerplate">
    <img src="https://img.shields.io/david/coffeekraken/reac-nativet-boilerplate.svg?style=flat-square" />
  </a>
  <a href="https://github.com/coffeekraken/react-native-boilerplate">
    <img src="https://img.shields.io/david/dev/coffeekraken/reac-nativet-boilerplate.svg?style=flat-square" />
  </a>
  <a href="https://github.com/Coffeekraken/react-native-boilerplate/blob/master/LICENSE.txt">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square" />
  </a>
	<a href="https://twitter.com/coffeekrakenio">
		<img src="https://img.shields.io/twitter/url/http/coffeekrakenio.svg?style=social&style=flat-square" />
	</a>
	<a href="https://coffeekraken.io">
		<img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=flat-square&label=https://coffeekraken.io&colorB=f2bc2b&style=flat-square" />
	</a>
</p>

React Native boilerplate integrated with expo, redux, redux-thunk, reselect, and more...

<img src="/.resources/react.png" title="React" height="40px" /><img src="/.resources/redux.png" title="Redux" height="40px" /><img src="/.resources/thunk.png" title="Redux Thunk" height="40px" /><img src="/.resources/reselect.png" title="Redux Reselect" height="40px" /><img src="/.resources/react-intl.png" title="React intl" height="40px" /><img src="/.resources/eslint.png" title="ESLint" height="40px" /><img src="/.resources/jest.png" title="Jest" height="40px" /><img src="/.resources/npm.png" title="NPM" height="40px" />
<img src="/.resources/prettier.png" title="Prettier" height="40px" /><img src="/.resources/travisci.png" title="Travis CI" height="40px" /><img src="/.resources/webpack.png" title="Webpack" height="40px" />

## Features

- Complete build process using [expo](https://expo.io/)
- [Redux](https://redux.js.org/) built-in
- [Redux thunk](https://github.com/reduxjs/redux-thunk) built-in
- [Reselect](https://github.com/reduxjs/reselect) built-in
- Immutable state through [Immer](https://github.com/mweststrate/immer)
- I18n ready through [react-intl](https://github.com/yahoo/react-intl)
- Code linting through [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/) tests stack
- Automatically reject commits if tests and linting fail through [pre-commit](https://www.npmjs.com/package/pre-commit)

## Table of content

1. **[Go to website](https://coffeekraken.io)**
2. [Install](#readme-install)
3. [Get Started](#readme-get-started)
4. [Scripts](#readme-scripts)
5. [Code formatting](#readme-code-formatting)
6. [Code linting](#readme-code-linting)
7. [Contribute](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md)
8. [Who are Coffeekraken?](https://github.com/Coffeekraken/coffeekraken/blob/master/who-are-we.md)
9. [Licence](#readme-license)

<a name="readme-install"></a>
## Install

```sh
npm install
```

> If needed, install [npm](https://www.npmjs.com/get-npm).

<a id="readme-scripts"></a>
## Scripts

- `npm start` : Start expo and build process
- `npm run ios` : Start expo and open IOS simulator
- `npm run android` : Start expo and open Android simulator
- `npm run eject` : Eject the configuration from expo
- `npm run pretty-quick` : Run prettier on the entire project
- `npm run pretty-quick-commit` : Run prettier on staged files
- `npm run prettier` : Run prettier on the source files
- `npm test` : Run the tests
- `npm run lint` : Run the linters
- `npm run lint:js` : Run the Js linter
- `npm run messages:extract` : Extract the messages from all the `messages.js` files up to the translations folder

<a id="readme-code-formatting"></a>

## Code formatting

Your code will automatically be formatted using [Prettier](https://prettier.io/) when you commmit your files.

<a id="readme-code-linting"></a>

## Code linting

This boilerplate uses some code linting rules. Here's the list:

1. [ESLint](https://eslint.org/) with [airbnb](https://www.npmjs.com/package/eslint-config-airbnb), [react-app](https://www.npmjs.com/package/eslint-config-react-app), [prettier](https://github.com/prettier/eslint-config-prettier) and `prettier/react` for javascript files

> Your commits will not been accepted if the code style is not respected!

<a name="readme-license"></a>

## License

The code is available under the [MIT license](LICENSE.txt).
