# DynamicFormLib

This project was developed to answer a technical challenge from Skillsworkflow

This project uses [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build library

To generate the package with the library, run the following command:

`ng build dynamic-form --prod`

Then navigate to the. \ dist \ dynamic-form directory and run the command:

`npm pack`

A package should be generated with your library, which is also published in npm at the following address:

https://www.npmjs.com/package/dynamic-form-diogofonteles

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Design Decisions

I decided to implement the Control Value Accessor in the component to give more flexibility to the developer who will use the component, as it allows it to be used as a control of another form.

To generate the controls dynamically I implemented a directive that is in charge of the work of building the controls of the form.

I decided to build the component so that it can be used directly, being able to render a button that is in charge of submitting data or as a directive leaving the developer to implement a button to submit.

## Unit Tests

I implemented some unit tests in the dynamic-form component in order to give a small sample of knowledge in the construction of tests using karma.
