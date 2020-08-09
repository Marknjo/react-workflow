# :rocket: React Workflow Booster

## :balloon: Overview

This is my custom React workflow. It will help you to build a React oriented project.

## :mega: Features

Here are the reasons you will love this boilerplate:

- **[Webpack](https://webpack.js.org/)** - Modern bundling & build process
- **[SASS/SCSS](https://sass-lang.com/)** - The famous CSS on steroids
- **[Autoprefixing](https://autoprefixer.github.io/)** - Automatically adds vendors prefixes to your CSS
- **[Babel Support](https://babeljs.io/)** - Write JS using ES2015+ and webpack will make it work across all browsers. Support of **[class properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)** is enabled too.
- **Minify** - Automatically minifies JS and CSS during production mode
- **DevServer** - Use both ndefault dev server **[`webpack-dev-server`](https://webpack.js.org/configuration/dev-server/)** and pretty output on the console using **[`webpack-dashboard`](https://www.npmjs.com/package/webpack-dashboard)**
- **No need to update the dependencies** - Just follow the quick start quide and you'll be fine.
- **Use any styling you want** - You can use both CSS or SASS to limitation.
- **Remove Unused Styles** - Purify CSS/SCSS output using [`purgecss-webpack-plugin`](https://purgecss.com/plugins/webpack.html#installation) for your final build.
- **Test Suit** - Tets your React application with [Jest](https://jestjs.io/) .

## :anger: Requirement

- Nodejs

## :scroll: QuickStart

1. Clone this repo. Rename it to whichever project name you want.
2. `cd <project name>`
3. Run `npm install`
4. Open the package.json and replace the test script with the following scripts in the scripts section

   - `"start": "webpack-dev-server --mode development","smart:start": "webpack-dashboard -m webpack-dev-server --mode development","dev": "cross-env NODE_ENV=development webpack --mode development","build": "cross-env NODE_ENV=production webpack --mode production"`

5. **YOU ARE READY TO GO**

## :volcano: Modes

- `npm start` - start development mode with dev-server
- `npm run smart:start` - start development with dev-server and dashboard enabled on your console.
- `npm run dev` - start development mode without dev-server
- `npm run build` - start production mode
- `npm jest --watch` - run Jest tests

## :orange_book: Folder Structure

    ├── Public/                          # Default HTML template directory
    ├── src/                             # Source files directory
    │   ├── App/                         # Assets directory
    │   │   ├── components/              # Components directory
    │   │   ├── playground/              # Code playgound directory
    │   │   ├── routes/                  # Routes directory
    │   │   ├── tests/                   # Jest Tests directory
    │   │   ├── styles/                  # CSS/SASS code directory
    │   |   └── Store/                   # Redux Store code directory
    │   │       ├── actions/             # Aactions directory
    │   │       ├── middlewares/         # Custom Middlewaredirectory
    │   │       ├── reducers/            # Reducers directory
    │   │       └── selectors/           # Selectors directory
    │   ├── assets/                      # Assets directory
    │   │   ├── images/                  # Image directory
    │   |   └── fonts/                   # Fonts directory
    │   ├── index.js                     # Load SCSS and JS
    ├── webpack/                         # Webpack configuration files
    │   ├── webpack.common.js            # Common config used both in development and production mode
    │   ├── webpack.dev.js               # Development mode config
    │   └── webpack.prod.js              # Production mode config
    ├── .babelrc                         # Babel config file
    ├── .gitignore                       # Git ignored files
    ├── LICENSE                          # License agreements
    ├── postcss.config.js                # Post CSS configuration file. (Adds autoprefixing support)
    ├── README.md                        # You are reading this
    └── webpack.config.js                # Webpack main config file

## :triangular_flag_on_post: License

[MIT License](https://choosealicense.com/licenses/mit/)
