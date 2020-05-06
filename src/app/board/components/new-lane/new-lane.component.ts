import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MockTaskService } from '../../services/mock-task.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Swimlane } from '../../models/swimlane.model';

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
    this.swimLaneNames = this.mockTaskService.get().map(name => name.title);
  }

  onSubmit() {
    this.bsModalRef.hide();
    this.mockTaskService.add(this.model);
  }
}
