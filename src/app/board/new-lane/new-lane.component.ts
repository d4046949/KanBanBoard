import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MockTaskService } from '../mock-task.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Swimlane } from '../models/swimlane.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-new-lane',
  templateUrl: './new-lane.component.html',
  styleUrls: ['./new-lane.component.scss']
})
export class NewLaneComponent implements OnInit {
public model: Swimlane = new Swimlane('');
public swimLaneNames: string[] = [];

drop(event: CdkDragDrop<string[]>) {
  moveItemInArray(this.swimLaneNames, event.previousIndex, event.currentIndex);
}

  constructor(public bsModalRef: BsModalRef, private mockTaskService: MockTaskService) { }

  ngOnInit(): void {
     this.mockTaskService.taskListObserver$
     .pipe(map(x=>x.map(name => name.title)))
     .subscribe((res: string[]) => {
      this.swimLaneNames = res;
    });
  }

  onSubmit() {
    this.bsModalRef.hide();
    this.mockTaskService.add(this.model);
  }
}
