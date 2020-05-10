import { Component, OnInit } from '@angular/core';
import { ITaskList } from '../models/task';
import { MockTaskService } from '../mock-task.service';
import { PanelService } from '../panel.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent implements OnInit {
  taskDetails : ITaskList[];

  constructor(private taskListService: MockTaskService, public s:PanelService) {
    this.taskDetails = taskListService.generateData();
  }
  ngOnInit(): void {
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
