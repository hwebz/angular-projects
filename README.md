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

## Install Capacitor
> npm i @capacitor/camera @capacitor/geolocation

## Build and run Ionic app on Android or iOS (Android Studio & XCode required)
> ionic bild
> npm i @capacitor/<os> (`android` or `ios`)
> ionic cap add <os> (`android` or `ios`)
> ionic cap open <os> (`android` or `ios`)
> npx cap copy (when re-build app, need to run this to copy application bundle from www to native mobile project)

# Generate Ionic service
> ionic generate service photo

## Add PWA into Angular app
> ng add @angular/pwa