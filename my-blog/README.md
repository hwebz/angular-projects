# MyBlog

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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Integrate Scully SSG into Angular application

Run `ng add @scullyio/init --project=my-blog`

Add `"defaultProject": "<PROJECT_NAME>"` into `angular.json`

Run `ng g @scullyio/init:markdown` to generate blog page

## Build Angular + Scully SSG application

Run `npm run build` to build Angular application

Run `npm run scully` to generate Scully SSG from Angular application built above

OR

Run `npm run scully:build` for short

## Run Angular + Scully server

Run `npm run scully:serve` that exposed 2 ports for 2 applications (Angular SPA + Scully SSG)
