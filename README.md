# Angular Projects 2nd Edition
Github repo: https://github.com/PacktPublishing/Angular-Projects-Second-Edition/

## Create new project
> ng new <project_name> --style=scss --routing=true|false

## Add Angular Material
> ng add @angular/material --theme=indigo-pink --typography=true --animations=true

## Create Ionic Application
Goto https://ionicframework.com to create Ionic application

## Generate Ionic page
> ionic generate page capture

> ionic generate page view

## Install Capacitor
> npm i @capacitor/camera @capacitor/geolocation

## Build and run Ionic app on Android or iOS (Android Studio & XCode required)
> ionic bild

> npm i @capacitor/<os> (`android` or `ios`)

> ionic cap add <os> (`android` or `ios`)

> ionic cap open <os> (`android` or `ios`)

> npx cap copy (when re-build app, need to run this to copy application bundle from www to native mobile project)

## Storing photo on Firebase
Create new firebase database + cloud firestore projects
> ng add @angular/fire

> ionic generate interface photo

> ionic build

> npx cap copy

Edit Firebase / Storage / Rules to allow read/write photo to storage
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write;
    }
  }
}
```

## Previewing photos with CesiumJS
> npm i cesium
> npm install -D @angular-builders/custom-webpack

# Generate Ionic service
> ionic generate service photo
> ionic generate service cesium

## Add PWA into Angular app
> ng add @angular/pwa

## Scaffold a new Nx monorepo workspace
> npm i -g nx

> npx create-nx-workspace packt --appName=tour --preset=angular --style=css --linter=eslint --nx-cloud=false --routing

> Install Nx Console VSCode extension