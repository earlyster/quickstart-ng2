# UI-Router for Angular 2 QuickStart Source

### Start development

<<<<<<< HEAD
Install the npm packages described in the `package.json` and verify that it works:
=======
It's been extended with testing support so you can start writing tests immediately.

**This is not the perfect arrangement for your application. It is not designed for production. 
It exists primarily to get you started quickly with learning and prototyping in Angular 2**

We are unlikely to accept suggestions about how to grow this QuickStart into something it is not.
Please keep that in mind before posting issues and PRs.

## Create a new project based on the QuickStart
>>>>>>> fdf619609f2a85940fe1b9a021648b68f8aea822

```bash
<<<<<<< HEAD
git clone https://github.com/ui-router/quickstart-ng2.git
cd quickstart-ng2
npm install
npm run tsc
npm start
```

### UI-Router for NG2 quickstart highlights:
=======
git clone  https://github.com/angular/quickstart  my-proj
cd my-proj
```

We have no intention of updating the source on `angular/quickstart`.
Discard everything "git-like" by deleting the `.git` folder.
```bash
rm -rf .git
```
>>>>>>> fdf619609f2a85940fe1b9a021648b68f8aea822

- We're using npm and systemjs.  We added a dependency on latest `ui-router-ng2` in [package.json](https://github.com/ui-router/quickstart-ng2/blob/1.0.2/package.json#L19)
- Import UI-Router classes [directly from `"ui-router-ng2"`](https://github.com/ui-router/quickstart-ng2/blob/1.0.2/app/app.component.ts#L2)
- When defining a component, [add the `UIROUTER_DIRECTIVES` to `directives:` array](https://github.com/ui-router/quickstart-ng2/blob/1.0.2/app/app.component.ts#L20)
- Either [bootstrap a `UiView` component](https://github.com/ui-router/quickstart-ng2/blob/1.0.2/app/_bootstrap/bootstrap.ts#L14), or add a `<ui-view></ui-view>` viewport to your root component.
- [Create application states](https://github.com/ui-router/quickstart-ng2/blob/1.0.2/app/app.states.ts#L16-L20) (as defined by Ng2StateDeclaration]]) which will fill in the `ui-view` viewports with component.
- Create a `UIRouterConfig`, and [register your states](https://github.com/ui-router/quickstart-ng2/blob/1.0.2/app/_bootstrap/router.config.ts#L17-L18) in the `UIRouterConfig.configure()` function.
- When bootstrapping: include the `UIROUTER_PROVIDERS` and [define a provider for your `UIRouterConfig`](https://github.com/ui-router/quickstart-ng2/blob/1.0.2/app/_bootstrap/bootstrap.ts#L17-L18)
 

<<<<<<< HEAD
---

=======
Initialize this project as a *local git repo* and make the first commit:
```bash
git init
git add .
git commit -m "Initial commit"
```

Create a *remote repository* for this project on the service of your choice.

Grab its address (e.g. *`https://github.com/<my-org>/my-proj.git`*) and push the *local repo* to the *remote*.
```bash
git remote add origin <repo-address>
git push -u origin master
```
## Install npm packages

Install the npm packages described in the `package.json` and verify that it works:

**Attention Windows Developers:  You must run all of these commands in administrator mode**

```bash
npm install
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with Ctrl-C.

>>>>>>> fdf619609f2a85940fe1b9a021648b68f8aea822
You're ready to write your application.

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.
* `npm run typings` - runs the typings tool.
* `npm run postinstall` - called by *npm* automatically *after* it successfully completes package installation. This script installs the TypeScript definition files this app requires.

<<<<<<< HEAD
(This repo is forked from https://github.com/angular/quickstart)

=======
Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run webdriver:update` - ONE TIME update for protractor end-to-end (e2e) tests
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)

## Testing

The QuickStart documentation doesn't discuss testing. 
This repo adds both karma/jasmine unit test and protractor end-to-end testing support.

These tools are configured for specific conventions described below.

*It is unwise and rarely possible to run the application, the unit tests, and the e2e tests at the same time.
We recommend that you shut down one before starting another.*

### Unit Tests
TypeScript unit-tests are usually in the `app` folder. Their filenames must end in `.spec`.

Look for the example `app/app.component.spec.ts`.
Add more `.spec.ts` files as you wish; we configured karma to find them.

Run it with `npm test`

That command first compiles the application, then simultaneously re-compiles and runs the karma test-runner.
Both the compiler and the karma watch for (different) file changes.

Shut it down manually with Ctrl-C.

Test-runner output appears in the terminal window.
We can update our app and our tests in real-time, keeping a weather eye on the console for broken tests.
Karma is occasionally confused and it is often necessary to shut down its browser or even shut the command down (Ctrl-C) and
restart it. No worries; it's pretty quick.

The `HTML-Reporter` is also wired in. That produces a prettier output; look for it in `~_test-output/tests.html`.

### End-to-end (E2E) Tests

**BEFORE RUNNING THE FIRST TEST** you must update the Selenium webdriver. Run `npm run webdriver:update`.

E2E tests are usually at the project root, above the `app` folder. 
Their filenames must end in `e2e-spec.js`.

E2E tests must be written in JavaScript (the author has not figured out how to write them in TS yet).

Look for the example `e2e-spec.ts` in the root folder.
Add more `e2e-spec.js` files as you wish (although one usually suffices for small projects); 
we configured protractor to find them.


Thereafter, run them with `npm run e2e`.

That command first compiles, then simultaneously starts the Http-Server at `localhost:8080`
and launches protractor.  

The pass/fail test results appear at the bottom of the terminal window.
A custom reporter (see `protractor.config.js`) generates a  `./protractor-results.txt` file 
which is easier to read; this file is excluded from source control.

Shut it down manually with Ctrl-C.
>>>>>>> fdf619609f2a85940fe1b9a021648b68f8aea822
