# BLOG-STARTER

### 1. Setup and getting started

```bash
## clone this repo to a local directory
git clone https://github.com/judeinno/Blog-Starter.git

## cd into the cloned repo
cd BLOG-STARTER

## install the node_modules
npm install

## start the local webserver
npm start
```

The `npm start` will open the webserver on port `3000` which hosts the Blog Starter App.

On your browser navigate to: [`http://localhost:3000`](http://localhost:3000)

The app should be running now.

### 2. Testing

```bash
## launch the cypress test runner
npm run cypress:open
```

```bash
## To run the test in terminal
npm run cypress:run
```

```bash
## If the webapp is not running, run this to launch the server locally and run the tests in terminal.
npm run test
```

```bash
## If the webapp is not running, run this to launch the server locally and launch the cypress test runner.
npm run test:open
```
