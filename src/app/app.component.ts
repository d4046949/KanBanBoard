import { Component } from '@angular/core';
import { ITaskList } from './board/models/task';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MockTaskService } from './board/mock-task.service';
import { PanelService } from './board/panel.service';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
  state
} from '@angular/animations';
import { RouterOutlet, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('isVisibleChanged', [
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
  ])]
   
})
export class AppComponent {

  shouldAnimate: boolean;

  constructor(private route: ActivatedRoute){
    this.route.params.subscribe((params) => {
      console.log(params);
      console.log(this.route.snapshot.data);
    });

      if (this.route.outlet === 'side-panel') {
        this.shouldAnimate = true;
  
      }
  }
}
