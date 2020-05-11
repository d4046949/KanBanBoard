import { trigger, state, style, transition, animate } from '@angular/animations';

export const rightSliderAnimation = [trigger('isVisibleChanged', [
    state('void', style({
      width: '0'
    })),
    state('false', style({
      width: '0'
    })),
    state('true', style({
      width: '700px'
    })),
    transition('0 => 1', animate('300ms ease-in')),
    transition('1 => 0', animate('300ms ease-out')),
    transition('void => 1', animate('300ms ease-in'))
  ])];