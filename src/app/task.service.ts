import { Injectable } from '@angular/core';
import { ITask } from './board/models/task';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private task$ = new BehaviorSubject(null);
  private activeTask: ITask;
  constructor() { }

  getActiveTask() {
    return this.task$.asObservable();
  }

  setActiveTask(task: ITask) {

    if (this.activeTask) {
      this.activeTask.isSelected = false;
    }

    if(task === null) {
      this.activeTask = task;
      this.task$.next(this.activeTask);
      return;

    }
  
    this.activeTask = task;
    this.activeTask.isSelected = true;

    this.task$.next(this.activeTask);
  }
}
