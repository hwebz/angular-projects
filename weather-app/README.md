# WeatherApp

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

## Running PWA application

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
Run `npm run server` to run web server that serve PWA Service Worker

## PWA new verion notification
Update your code
Run `ng build`
Run `npm run server` (Offline mode)
Open new tab and see the notification popup ask to update

## Deploy Anguar application to Firebase Hosting
Create firebase project called `weather-app`
Install Firebase Tools
Run `firebase login`
Run `ng add @angular/fire`
Choose `ng deploy -- hosting`
Run `ng deploy`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
