# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

## Guide
Install Schematics CLI
`npm install -g @angular-devkit/schematics-cli`

Generate my-schematics projects + schematic
`schematics blank my-schematics`

Generate tailwind-container schematic
`schematics blank tailwind-container`

Transpile TS source files into JavaScript into the same folders, side by side with TS ones.
`npm run build`

Install schematics library into our global npm cache
`npm link`

Generate a new Angular project to test schema above
`ng new my-app --defaults`

Install our schematics into newly created project
`npm link my-schematics`

Create a dashboard component by using tailwind-container schematic above
`ng generate my-schematics:tailwind-container --name=dashboard`

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
