# Speakers App

**Demo Website** : [modokemdev.com/speakers-app](https://modokemdev.com/speakers-app/)

This repository was built to deploy a [Next.js](https://nextjs.org/) app to [GitHub Pages](https://pages.github.com/) using [gh-pages](https://www.npmjs.com/package/gh-pages). We are rendering the data from an array in the `speakers` component. If you want to add a database, take a look at my GitHub repository [next-tailwind-app](https://github.com/marcoandre1/next-tailwind-app).

> To run this project locally, clone the project and run `npm run dev`.  
> To deploy, use `git bash` and run `npm run export` followed by `npm run deploy`.

## Index

1. [Setting up a new project](https://github.com/marcoandre1/speakers-app#setting-up-a-new-project)
2. [Deploy to GitHub pages](https://github.com/marcoandre1/speakers-app#deploy-to-github-pages)
3. [Add Prettier](https://github.com/marcoandre1/speakers-app#add-prettier)
4. [Add Tailwind CSS](https://github.com/marcoandre1/speakers-app#add-tailwind-css)
5. [Runtime configuration](https://github.com/marcoandre1/speakers-app#runtime-configuration)

## Setting up a new project

Following the [getting-started](https://nextjs.org/docs/getting-started) documentation on Next.js:

- On a new folder project:

```console
npm init -y
npm install react react-dom next --save
```

- Update `package.json`:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}
```

**Next.js** has **file-based routing**, meaning that any component in the pages directory gets a route.

- Create `pages/index.js`:

```js
function HomePage() {
  return <div>Welcome to Next.js!</div>
}

export default HomePage
```

- Start the application:

```console
npm run dev
```

## Deploy to GitHub pages

To deploy to GitHub pages, you will need to use the [next.config.js](https://nextjs.org/docs/api-reference/next.config.js/introduction) file, [static-html-export](https://nextjs.org/docs/advanced-features/static-html-export) and [gh-pages](https://www.npmjs.com/package/gh-pages).

- Add `next.config.js` at the root of the project:

```js
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      basePath: '',
    }
  }

  return {
    /* config options for all phases except development here */
    basePath: '/speakers-app',
  }
}
```

> [basePath](https://nextjs.org/docs/api-reference/next.config.js/basepath) allows us to deploy to a subfolder.

- Update `package.json` and run `npm run export` (via `git bash`):

```json
"scripts": {
  "export": "next build && next export && touch ./out/.nojekyll"
}
```

> This will output a static version of your app in the `out` directory with the `.nojekyll` file.

- Install `gh-pages`:

```console
npm install gh-pages --save-dev
```

- Update `package.json` and run `npm run deploy` (via `git bash`):

```json
"scripts": {
  "deploy": "gh-pages -d out -t true"
}
```

> For **Windows** users, run the commands through `git bash` instead of your IDE's terminal or you won't get prompted the password. See more at [git gh-pages deployment permissions error “Permission denied (publickey). fatal: Could not read from remote repository”](https://superuser.com/questions/1435950/git-gh-pages-deployment-permissions-error-permission-denied-publickey-fatal). Also, the `touch` command doesn't work on command prompt or PowerShell.

> If you get [error branch already exists](https://www.npmjs.com/package/gh-pages#when-get-error-branch-already-exists), run `rd /s /q node_modules/.cache/gh-pages` if you are on command prompt or `rd -r node_modules/.cache/gh-pages` if you are on PowerShell.

> Finally, as noted in a comment from [Assets not loading on GitHub Pages with Custom Domain](https://github.com/vercel/next.js/issues/8316#issuecomment-629853377), we need to add a `.nojekyll` file to the static build and run `gh-pages` with the `-t true` tag.

## Add Prettier

Follow the [installation guide](https://prettier.io/docs/en/install.html):

- Install Prettier to your project:

```console
npm install --save-dev --save-exact prettier
```

- Create an empty config file `.prettierrc.json` to let editors and other tooling know you are using Prettier:

```console
echo {}> .prettierrc.json
```

- Add the following basic configuration:

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true
}
```

- Create a `.prettierignore` file to let the Prettier CLI and editors know which files to not format.

> Tip! Base your `.prettierignore` on `.gitignore` and `.eslintignore` (if you have one).

- Update `package.json`:

```json
"scripts": {
  "prettier": "prettier --write ."
}
```

- Run `npm run prettier`

## Add Tailwind CSS

Follow the **Customizing PostCSS config** section in the [learning guide](https://nextjs.org/learn/basics/assets-metadata-css/styling-tips) and take a look at the [Tailwind CSS example](https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss) from Next.js repo. If you need more custom configuration, take a look at the [Built-In CSS Support](https://nextjs.org/docs/basic-features/built-in-css-support) from Next.js documentation.

- First, install [Tailwind CSS](https://tailwindcss.com/):

```console
npm install tailwindcss postcss-preset-env postcss-flexbugs-fixes
```

- Then add `postcss.config.js`:

```js
module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
  ],
}
```

- Finally, add `tailwind.config.js` and remove unused CSS by specifying the `purge` option:

```js
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
      },
    },
  },
  variants: {},
  plugins: [],
}
```

## Runtime configuration

Because we are deploying to a subfolder, we need to ensure that we are fetching the data from the right directory _(in our case, the subfolder is '/speakers-app')_. The [Base Path](https://nextjs.org/docs/api-reference/next.config.js/basepath) configuration does a good job at prefixing our path application, but we need a little bit more customization, specifically for images. This is were [Runtime Configuration](https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration) becomes useful.

- Add runtime configuration to your app by adding the `publicRuntimeConfig` and `serverRuntimeConfig` configs in the `next.config.js`:

```js
module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
}
```

- To get access to the runtime configs in your app use `next/config`:

```js
import getConfig from 'next/config'

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
// Will only be available on the server-side
console.log(serverRuntimeConfig.mySecret)
// Will be available on both server-side and client-side
console.log(publicRuntimeConfig.staticFolder)

function MyImage() {
  return (
    <div>
      <img src={`${publicRuntimeConfig.staticFolder}/logo.png`} alt="logo" />
    </div>
  )
}

export default MyImage
```

> Take a look at the `next.config.js` file in this project and the components that use `publicRuntimeConfig`.
