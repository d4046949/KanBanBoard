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
import { rightSliderAnimation } from './shared/right-slide.animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: rightSliderAnimation
   
})
export class AppComponent {
  sidenavVisible: boolean = false;
}
