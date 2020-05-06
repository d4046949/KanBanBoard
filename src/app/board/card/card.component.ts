import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../models/task';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() details: ITask;
  @Output() deleteClicked: EventEmitter<ITask> = new EventEmitter<ITask>();
  @Output() OnSelected: EventEmitter<ITask> = new EventEmitter<ITask>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(): void {
    this.deleteClicked.emit(this.details);
  }

  clicked() {
    this.details.isSelected = !this.details.isSelected;
    this.OnSelected.emit(this.details);
  }

  determineCardIcon() {
    console.log(this.details.status);
    if (this.details.type === 1) {
      return "fas fa-bug red";
    }
    if (this.details.type === 2) {
      return "fas fa-list-ol blue";
    }
    if (this.details.type === 3) {
      return "fas fa-share-alt green";
    }

  }

  generateStatus() {
    if (this.details.type === 1) {
      return "left-border-red";
    }
    if (this.details.type === 2) {
      return "left-border-blue";
    }
    if (this.details.type === 3) {
      return "left-border-green";
    }
  }
}
