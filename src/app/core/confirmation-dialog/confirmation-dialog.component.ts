import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from '../confirmation-dialog.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  message: any;

  constructor(private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit(): void {
    this.confirmationDialogService.getMessage().subscribe(msg => {
      this.message = msg;
    });
  }

}
