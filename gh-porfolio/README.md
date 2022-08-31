# GhPorfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Integrating Angular Universa

Run `ng add @ngniversa/express-engine` to install Angular Universal package

Run `npm run dev:ssr` to run development server to preview

## Prerendering content during build

Run `npm run prerender` for prendering content during build in `dist/browser`

Run `npm run serve:ssr` to start prerendered version above.

# Replaying events with preboot

Root cause: If you click on any link while the page is loading, you will notice that nothing happens. Why is that? The server first loads a static version of your application to display to the user until waiting for the actual Angular application to load in the background. During this FCP, all links except routerLink directives are not responding. Angular Universal will switch to the complete application when it has been fully loaded in the background.

The purpose of the preboot library is to maintain a consistent user experience while the state of the application is transferred from the server to the browser.

Run `npm i preboot`

Note: If you try to click on any link while the application is loading, you will notice that your browser will navigate to the selected link after the application has been fully loaded in the browser

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
