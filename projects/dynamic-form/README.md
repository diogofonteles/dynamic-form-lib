# DynamicForm

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Code scaffolding

Run `ng generate component component-name --project dynamic-form` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project dynamic-form`.
> Note: Don't forget to add `--project dynamic-form` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build dynamic-form` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build dynamic-form`, go to the dist folder `cd dist/dynamic-form` and run `npm publish`.

## Running unit tests

Run `ng test dynamic-form` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Design Decisions

I decided to implement the Control Value Accessor in the component to give more flexibility to the developer who will use the component, as it allows it to be used as a control of another form.

To generate the controls dynamically I implemented a directive that is in charge of the work of building the controls of the form.

I decided to build the component so that it can be used directly, being able to render a button that is in charge of submitting data or as a directive leaving the developer to implement a button to submit.

## Unit Tests

I implemented some unit tests in the dynamic-form component in order to give a small sample of knowledge in the construction of tests using karma.
