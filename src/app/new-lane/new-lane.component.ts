import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Swimlane } from '../board/models/swimlane.model';
import { MockTaskService } from '../board/services/mock-task.service';

@Component({
  selector: 'app-new-lane',
  templateUrl: './new-lane.component.html',
  styleUrls: ['./new-lane.component.scss']
})
export class NewLaneComponent implements OnInit {
public model: Swimlane = new Swimlane('');

  constructor(public bsModalRef: BsModalRef, private mockTaskService: MockTaskService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.bsModalRef.hide();
    this.mockTaskService.add(this.model);
  }
}
