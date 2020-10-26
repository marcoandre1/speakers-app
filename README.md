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

### Deploy to GitHub pages

To deploy to GitHub pages, you will need to use [static-html-export](https://nextjs.org/docs/advanced-features/static-html-export) and [gh-pages](https://www.npmjs.com/package/gh-pages)

- Update `package.json` and run `npm run export`:

```json
"scripts": {
  "export": "next build && next export"
}
```

Then you'll have a static version of your app in the `out` directory.

- Install `gh-pages`:

```console
npm install gh-pages --save-dev
```

- Update `package.json` and run `npm run deploy`:

```json
"scripts": {
  "deploy": "gh-pages -d out"
}
```
