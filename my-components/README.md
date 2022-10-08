# MyComponents

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## 1. Create project
`ng new my-components --defaults`

## 2. Generate new Angular library
`ng generate library ui-controls`

## 3. Install @angular/cdk, bulma
`npm i @angular/cdk bulma`

## 4. Generate components
`ng generate component card-list --project=ui-controls --export`

`ng generate interface card --project=ui-controls`

## 5. Build library
`ng build ui-controls`

## 6. Create clipboard component
`ng generate component copy-button --project=ui-controls --export`

## Publish angular library to npm
`ng build ui-controls`

`cd dist\ui-controls`

`npm login`

`npm publish`

## Using our angular library in other Angular applications
`ng generate application ui-element --defaults`

`ng add @angular/elements --project=ui-elements`

`ng add ngx-build-plus --project=ui-elements`

`ng build ui-elements --single-bundle`
```
1. Copy the dist\ui-elements folder to another location of your choice in your hard disk and open the index.html file, using your integrated development environment (IDE).
2. Remove the <base> tag from the head element and add the Bulma CSS minified file using a content delivery network (CDN), as follows:

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">

3. Replace the app-root selector with the following HTML snippet in the body element:

<div class="container is-fluid">

  <h1 class="title">My Angular Element</h1>

  <copy-button></copy-button>

</div>

4. In the preceding snippet, we added a div element styled with Bulma CSS classes, and the selector of the Angular element that we defined in AppModule.

5. Insert the following JavaScript code after the div element:

<script>
  const el = document.getElementsByTagName(
    'copy-button')[0];
  el.setAttribute('data', 'Some data');
  el.addEventListener('copied', () => alert('Copied to
    clipboard'));
</script>
```

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
