import { Injectable } from '@angular/core';
import { ITaskList, ITask } from './models/task';
import { Swimlane } from './models/swimlane.model';

@Injectable({
  providedIn: 'root'
})
export class MockTaskService {
  getDetails(taskId: any): ITask {
    var allTasks :ITask[] = [];

    this._taskList.forEach(function(swimLane){
      swimLane.tasks.forEach(task => {
        allTasks.push(task);
      });
    });

   return allTasks.filter((item: ITask) => {return item.id == taskId})[0];

  }


  deleteLane(taskDetails: ITaskList) {
    this._taskList.splice(this._taskList.indexOf(taskDetails), 1);
  }

  add(model: Swimlane) {
    this._taskList.push({ title: model.name, tasks: [] });
  }
  private _taskList: ITaskList[] = null;

  get(): ITaskList[] {
    return this._taskList;
  }

  generateData(): ITaskList[] {
    if (this._taskList) {
      return this._taskList;
    }

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
        id: 2,
        title: "Test1243333",
        description: "Lorem ipsum dolor sit amet",
        isSelected: false,
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

    return this._taskList;
  }

  delete(task: ITask) {
    var taskList = this._taskList.find(x => x.tasks.find(xx => xx.id == task.id));
    taskList.tasks.splice(taskList.tasks.indexOf(task), 1);
  }
}
