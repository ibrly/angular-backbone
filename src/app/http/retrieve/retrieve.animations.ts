import {animate, state, style, transition, trigger} from "@angular/animations";

export const retrieveAnimations = [
  trigger('fade', [
    state('in', style({
      opacity: 1,
      transform: 'translateX(0)'
    })),
    transition('void => *', [animate(1000, style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }))]),
    transition('* => void', [animate(1000, style({
      opacity: 0,
      transform: 'translateX(100%)'
    }))])
  ])
]
