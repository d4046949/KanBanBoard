import { Injectable } from '@angular/core';
import { ITaskList, ITask } from './models/task';
import { Swimlane } from './models/swimlane.model';
import { Observable, BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockTaskService {
  private _taskList: ITaskList[] = null;
  private _taskListBs: BehaviorSubject<ITaskList[]> = new BehaviorSubject(this._taskList);
  public taskListObserver$: Observable<ITaskList[]>;

  
  constructor() {
    this.taskListObserver$ = this._taskListBs.asObservable();
    this.generateData().then(() => {
     this._taskListBs.next(this._taskList);
    });
  }

  private getDetails(taskId: any): ITask {
    var allTasks: ITask[] = [];

    this._taskList.forEach(function (swimLane) {
      swimLane.tasks.forEach(task => {
        allTasks.push(task);

      });
    });

    return allTasks.filter((item: ITask) => { return item.id == taskId })[0];
  }

  deleteLane(taskDetails: ITaskList) : Promise<void>{
    return new Promise((resolve, reject) => {
      this._taskList.splice(this._taskList.indexOf(taskDetails), 1);
      return resolve();
  });
}

  add(model: Swimlane): Promise<void> {
    return new Promise((resolve, reject) => {
      this._taskList.push({ title: model.name, tasks: [] });
      resolve();
    });
  }

  get$(id:number): Observable<ITask> {
    const obs = Observable.create(obs => {
      obs.next(this.getDetails(id));
      obs.complete();
    })

    return obs;
  }

  private generateData(): Promise<ITaskList[]> {
   return new Promise((resolve, reject) => {
    this._taskList = [{
      title: "Todo",
      tasks: [{
        id: 1,
        title: "Test1243",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis nec ante id interdum. Praesent tristique ex nisl, quis sodales lorem sollicitudin sed. Phasellus vehicula ullamcorper mauris,",
        isSelected: false,
        type: 2
      },
      {
        id: 2,
        title: "Test1243333",
        isSelected: false,
        description: "Lorem ipsum dolor sit amet",
        type: 1
      },
      {
        id: 3,
        title: "Testdff1243",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis nec ante id interdum. Praesent tristique ex nisl, quis sodales lorem sollici  tudin sed. Phasellus vehicula ullamcorper mauris,Phasellus vehicula ullamcorper mauris, vel faucibus quam dapibus sed. In quis ex at lorem cursus aliquam. Proin id ornare nulla. In odio eros, elementum vitae posuere id, mollis at urna. Donec posuere volutpat mi. Cras risus libero, accumsan eget vehicula vitae, sollicitudin in lacus.",
        isSelected: false,
        type: 3

      }]
    },
    {
      title: "Blocked",
      tasks: []
    },
    {
      title: "In Progress",
      tasks: [{
        id: 4,
        title: "Test1243",
        description: " none set",
        isSelected: false,
        type: 1
      }]
    },
    {
      title: "Completed",
      tasks: [{
        id: 5,
        title: "testestest",
        description: " test test test",
        isSelected: false,
        type: 1
      }]
    }];

    return resolve();
  });
  }

  delete(task: ITask) {
    var taskList = this._taskList.find(x => x.tasks.find(xx => xx.id == task.id));
    taskList.tasks.splice(taskList.tasks.indexOf(task), 1);
  }
}
