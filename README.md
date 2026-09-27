# AngularBackbone

[![CI](https://github.com/ibrly/angular-backbone/actions/workflows/ci.yml/badge.svg)](https://github.com/ibrly/angular-backbone/actions/workflows/ci.yml)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

This project is designed and developed to be a reference for Software Developers who wants to learn Angular 

## Getting started

```bash
nvm use          # node 16 (see .nvmrc)
npm ci
npm start        # http://localhost:4200
npm test         # karma + jasmine
npm run build
```

Run with Docker:

```bash
docker build -t angular-backbone .
docker run -p 8080:80 angular-backbone
```

## What's inside

| Area | Path | Topics |
|------|------|--------|
| Basics | [src/app/basics](src/app/basics) | components, data binding, directives |
| Component communication | [src/app/communication](src/app/communication) | @Input/@Output, event binding, ng-content |
| DOM | [src/app/dom](src/app/dom) | attribute directives, ViewChild |
| Dynamic components | [src/app/dynamic](src/app/dynamic) | modal, placeholder directive |
| Forms | [src/app/forms](src/app/forms) | template-driven and reactive forms |
| HTTP | [src/app/http](src/app/http) | services, create and retrieve |
| Lifecycle hooks | [src/app/lifecycle-hooks](src/app/lifecycle-hooks) | component lifecycle |
| Pipes | [src/app/pipes](src/app/pipes) | custom pipes |
| Animations | [src/app/animations](src/app/animations) | Angular animations |
| Store | [src/app/store](src/app/store) | reducers |
| Testing | [src/app/testing](src/app/testing) | services, HttpTestingController, logger |

Guides: [unit testing](tutorials/unit-testing.md) · [CI/CD](tutorials/ci-cd.md)

# Unit testing

## Basics
[you can find implementations below in this file](src/app/basics/data-binding/data-binding.component.spec.ts)
- Data binding
- Events
- Two way binding
- Give Github Copilot a try
- DOM interaction

## Http 
[you can find implementations below in this file](src/app/testing/httptest/httptest.service.spec.ts)
- HttpTestingModule
- Mocking Data 
- Error Handling

## Mocking
[you can find implementations below in this file](src/app/http/retrieve/retrieve.component.spec.ts)
- mocking services and observables
## Testing Asynchronous Code
[you can find implementations below in this file](src/app/async-testing/async-testing.component.spec.ts)

- done() 
- tick() with timeOut
- fakeAsync with Promises
- fakeAsync with Observables

