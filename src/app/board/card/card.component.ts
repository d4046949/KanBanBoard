import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../models/task';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() details: ITask;
  @Output() deleteClicked: EventEmitter<ITask> = new EventEmitter<ITask>();
  @Output() OnSelected: EventEmitter<ITask> = new EventEmitter<ITask>();

  private readonly cardIconMap = { 1: 'fas fa-bug red', 2: 'fas fa-list-ol blue', 3: 'fas fa-share-alt green' }
  private readonly cardBorderMap = { 1: 'left-border-red', 2: 'left-border-blue', 3: 'left-border-green' };

  delete(): void {
    this.deleteClicked.emit(this.details);
  }

  clicked() {
    this.details.isSelected = !this.details.isSelected;
    this.OnSelected.emit(this.details);
  }

  determineCardIcon() {
    return this.cardIconMap[this.details.type];
  }

  generateStatus() {
    return this.cardBorderMap[this.details.type];
  }
}
