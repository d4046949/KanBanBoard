import { Component } from '@angular/core';
import { ITaskList } from './board/models/task';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MockTaskService } from './board/services/mock-task.service';
import { PanelService } from './board/services/panel.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  taskDetails : ITaskList[];
  
  todo :any;
  done: any;

  constructor(private taskListService: MockTaskService, public s:PanelService) {
    this.taskDetails = taskListService.generateData();
  }
  
  drop(event: CdkDragDrop<string[]>) {
    console.log('event',event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
            transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
