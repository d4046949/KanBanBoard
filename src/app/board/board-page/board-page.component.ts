import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ITaskList, ITask } from '../models/task';
import { MockTaskService } from '../mock-task.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { EditCardService } from '../edit-card.service';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardPageComponent implements OnInit, OnDestroy {
  taskDetails: ITaskList[];
  selectedTask: ITask = null;

  private taskListServiceSubscription: Subscription;
  private sidePaneServiceSubscription: Subscription;

  constructor(private taskListService: MockTaskService, private sidePaneService: EditCardService, private router: Router, private taskService: TaskService,
    private changeDetector: ChangeDetectorRef) {
    this.taskListServiceSubscription = taskListService.taskListObserver$.subscribe(t => {
      this.taskDetails = t;
    });

    this.sidePaneServiceSubscription = this.sidePaneService.toggle$.subscribe(() => {
      console.log('**********');
      if (this.selectedTask) {
        this.selectedTask.isSelected = false;
        this.selectedTask = null;
      }
    });
  }

  ngOnInit(): void {
    this.taskService.getActiveTask().subscribe((task: ITask) => {
      this.selectedTask = task;
      this.changeDetector.detectChanges();
    })
  }

  drop(event: CdkDragDrop<string[]>) {
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
    task.isSelected = true;
    this.router.navigate([{ outlets: { 'side-panel': ['test', task.id] } }]);
  }

  ngOnDestroy(): void {
    this.taskListServiceSubscription.unsubscribe();
    this.sidePaneServiceSubscription.unsubscribe();
  }
}
