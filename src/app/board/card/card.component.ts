import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { ITask } from '../models/task';
import { ConfirmationDialogService } from 'src/app/core/confirmation-dialog.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() details: ITask;
  @Output() deleteClicked: EventEmitter<ITask> = new EventEmitter<ITask>();
  @Output() OnSelected: EventEmitter<ITask> = new EventEmitter<ITask>();

  @Input() isSelected: boolean;

  private readonly cardIconMap = { 1: 'fas fa-bug red', 2: 'fas fa-list-ol blue', 3: 'fas fa-share-alt green' }
  private readonly cardBorderMap = { 1: 'left-border-red', 2: 'left-border-blue', 3: 'left-border-green' };

  constructor(private confirmationDlg: ConfirmationDialogService) {

  }

  delete(event): void {
  event.stopPropagation();
    let self = this;
    this.confirmationDlg.confirm("Are you sure?", () => {
      self.deleteClicked.emit(this.details);
    }, () => { });

  }

  clicked(event) {
    console.log('clicked');
    this.OnSelected.emit(this.details);
  }

  determineCardIcon() {
    return this.cardIconMap[this.details.type];
  }

  generateStatus() {
    return this.cardBorderMap[this.details.type];
  }
}
