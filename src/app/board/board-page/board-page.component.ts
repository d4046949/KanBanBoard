import { Component, OnInit } from '@angular/core';
import { ITaskList, ITask } from '../models/task';
import { MockTaskService } from '../mock-task.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { EditCardService } from '../edit-card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent {
  taskDetails: ITaskList[];
  selectedTask: ITask = null;

  constructor(private taskListService: MockTaskService, private sidePaneService: EditCardService, private router: Router) {
    this.taskDetails = taskListService.generateData();

    this.sidePaneService.toggle$.subscribe((x) => {
      if (this.selectedTask) {
        this.selectedTask.isSelected = false;
        this.selectedTask = null;
      }
    });

    this.sidePaneService.isLoaded$.subscribe((id: number) => {
      if (this.selectedTask === null) {
        this.selectedTask = this.taskListService.getDetails(id);
        this.selectedTask.isSelected = true;
      }
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log('event', event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  handleOnSelected(task: ITask) {
    if (this.selectedTask) {
      this.selectedTask.isSelected = false;
    }
    this.selectedTask = task;
    this.selectedTask.isSelected = true;

    this.router.navigate([{ outlets: { 'side-panel': ['test', task.id] } }]);
  }
}
