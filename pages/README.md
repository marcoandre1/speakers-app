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
