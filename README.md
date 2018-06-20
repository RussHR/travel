# Travel Assessment

## Getting Started

These are rough guidelines on how to get this running locally on your computer.

### Prerequisites

You will need node and npm accessible in your cli. You can get those here: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

### Installing

Within this repository directory, run
```
npm i
```

Once things have finished installing, run the following command to get a local server started:
```
npm run dev
```

Then visit `localhost:8080` and you're good to go!


## Building "production-ready" files

Running `npm run build` will create a `dist/` directory with an `index.html`, `bundle.js`, and `bundle.js.map/` (the source map).

## Built With

* [React](https://reactjs.org/) - a JavaScript library for building user interfaces
* [webpack](https://webpack.js.org/) - module bundler
* [autoprefixer](https://github.com/postcss/autoprefixer) - parses CSS and adds vendor prefixes to CSS rules
* [Babel](https://babeljs.io/) - transpiler for es6
* [Sass](http://sass-lang.com/) - a scripting language that is compiled into CSS
* [lodash](https://lodash.com/) - JavaScript utility library
* [es6 boilerplate](https://github.com/RussHR/es6-boilerplate) - a personal boilerplate for es6 projects
* [Chai](http://www.chaijs.com/) - JavaScript tests!
* [Enzyme](https://github.com/airbnb/enzyme) - React tests!
* [ESLint](https://eslint.org/) - for linting!
* [sinon](http://sinonjs.org/) - for testing with spies and watchers!
* [classnames](https://github.com/JedWatson/classnames) - for easy html class management!

## Architectural Decisions:

I went with React because it makes UI management easy, and its virtual DOM makes it more efficient than re-rendering html regardless of whether there may actually be a difference in the UI. In this case, `GygAssessmentApp.jsx` acts as the nucleus of the app with its state as the app store, and it takes care of the initial, fake "API call". Generally, without Redux, I try to house all my API calls in the same place, and that place is usually at the top of the app.

#### So why not Redux?

Redux is great, but it introduces a lot of overhead and complexity. In this particular case, I decided not to use it due to the app being so small. It does, however, make it easier to test API calls and asynchronous actions.

## Feature Decisions:

Honestly, I didn't add very many! This was very time-consuming unto itself. With sorting, I imagined the tours that were specials might be sponsored, so I decided to always show them at the top of the list.


## Things I would do with more time:

* Style this a bit more, it was added near the end pretty hastily.
* Have the Details buttons open a separate pane within the app for more details about the tour.
* Add more filters, e.g. see tours only with a certain rating.
* Better ensure acccessibility.
* Update this project's version of webpack. I do not recommend this version for anything in production, especially due to security vulnerabilities of npm packages installed.
* Try to understand the data.json's tour titles better. Some are a bit strange.
* Add error handling.
* Sleep! Exercise! Eat well.


## Acknowledgments

* This gist for providing an excellent README.md template: [https://gist.github.com/PurpleBooth/109311bb0361f32d87a2](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* Thank you everyone for all the npm packages
