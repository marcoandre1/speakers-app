# speakers-app

To run this project locally, clone the project and run `npm run dev`.

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

To deploy to GitHub pages, you will need to use the [next.config.js](https://nextjs.org/docs/api-reference/next.config.js/introduction) file, [static-html-export](https://nextjs.org/docs/advanced-features/static-html-export) and [gh-pages](https://www.npmjs.com/package/gh-pages)

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

- Update `package.json` and run `npm run export` (via `git bash`):

```json
"scripts": {
  "export": "next build && next export && touch ./out/.nojekyll"
}
```

Then you'll have a static version of your app in the `out` directory with the `.nojekyll` file.

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

> Finally, as noted in a comment from [Assets not loading on GitHub Pages with Custom Domain](https://github.com/vercel/next.js/issues/8316#issuecomment-629853377), we need to add a `.nojekyll` file to the static build and run `gh-pages` with the `-t true` attribute.
