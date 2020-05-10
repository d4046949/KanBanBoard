import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-t',
  templateUrl: './t.component.html',
  styleUrls: ['./t.component.scss'],
  // animations: [trigger('isVisibleChanged', [
  //   state('void', style({
  //     width: '0'
  //   })),
  //   state('false', style({
  //     width: '0'
  //   })),
  //   state('true', style({
  //     width: '18.75rem'
  //   })),
  //   transition('0 => 1', animate('300ms ease-in')),
  //   transition('1 => 0', animate('300ms ease-out')),
  //   transition('void => 1', animate('300ms ease-in'))
  // ])]
})
export class TComponent implements OnInit {

  shouldAnimate: boolean;

  constructor(private route: ActivatedRoute){
    //  if (this.route.outlet === 'side-panel') {
    //    this.shouldAnimate = true; // Yes, I do enter here every time
    //  }
  }
  ngOnInit(): void {
  }

}
