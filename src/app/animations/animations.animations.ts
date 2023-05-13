import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

export const AnimationsAnimation = trigger('fadeInOut', [
  // ...
  state('in', style({
    opacity: 1,
    fontSize: '21px'
  })),
  state('out', style({
    opacity: 0,
    fontSize: '0px',
    color: 'red',
    backgroundColor: 'yellow'
  })),
  state('half', style({opacity: .5})),
  state('void', style({opacity: 1})),
  transition('out <=> in', [
    animate('5s ease-in-out', keyframes([
      style({
        opacity: 0,
        fontSize: '10px',
        backgroundColor: 'red',
        offset: 0
      }),
      style({
        opacity: 1,
        backgroundColor: 'green',
        fontSize: '20px',
        offset: .5
      }),
      style({
        color: 'blue',
        backgroundColor: 'yellow',
        offset: 1
      })]))
  ]),
  transition('void => *', [
    style({opacity: 0}),
    animate('500ms ease-in-out')
  ]),
  transition('* => void', [
    animate('500ms ease-in-out', style({opacity: 0})),

  ]),
  transition('half <=> *', [
    style({backgroundColor: 'red'}),
    style({backgroundColor: 'blue'}),
    animate('500ms ease-in-out')
  ]),
]);
