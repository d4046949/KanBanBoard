import { Component } from '@angular/core';
import { rightSliderAnimation } from './shared/right-slide.animation';
import { ConfirmationDialogService } from './core/confirmation-dialog.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: rightSliderAnimation
   
})
export class AppComponent {
  sidenavVisible: boolean = false;

  constructor(private confirmDialogService: ConfirmationDialogService) {
   
  }

  showDialog(){
    this.confirmDialogService.confirm("eee", () => {}, () => {});
  }
}
