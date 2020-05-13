import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MockTaskService } from '../mock-task.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ITaskList, ITask } from '../models/task';
import { Router } from '@angular/router';
import { EditCardService } from '../edit-card.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input() taskDetails: ITaskList;
  @Input() canCreate: boolean;
  @Output() onDragAndDropped: EventEmitter<CdkDragDrop<string[]>> = new EventEmitter<CdkDragDrop<string[]>>();
  @Output() onSelectedCard: EventEmitter<ITask> = new EventEmitter<ITask>();

  public show: boolean = false;

  getBackground = () => {
    return this.taskDetails.title === "Blocked";
  }

  constructor(private taskDataStorage: MockTaskService) {
    
  }

  onDeleteClicked(task: ITask) {
    this.taskDataStorage.delete(task);
  }

  handle() {
    this.show = !this.show;
  }

  drop(event: CdkDragDrop<string[]>) {
    this.onDragAndDropped.emit(event);
  }

  deleteEntry() {
    this.taskDataStorage.deleteLane(this.taskDetails);
  }

  handleOnSelected(task: ITask){
    this.onSelectedCard.emit(task);
  }

}
