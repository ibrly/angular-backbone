# Unit testing in Angular

A guided tour of the specs in this repo. Run them with `npm test`, or `npx ng test --watch=false --browsers=ChromeHeadlessCI` for a single headless run.

## Basics
[you can find implementations below in this file](../src/app/basics/data-binding/data-binding.component.spec.ts)
- Data binding
- Events
- Two way binding
- Give Github Copilot a try
- DOM interaction

## Http 
[you can find implementations below in this file](../src/app/testing/httptest/httptest.service.spec.ts)
- HttpTestingModule
- Mocking Data 
- Error Handling

## Mocking
[you can find implementations below in this file](../src/app/http/retrieve/retrieve.component.spec.ts)
- mocking services and observables
## Testing Asynchronous Code
[you can find implementations below in this file](../src/app/async-testing/async-testing.component.spec.ts)

- done() 
- tick() with timeOut
- fakeAsync with Promises
- fakeAsync with Observables

