import { Component } from '@angular/core';
import { rightSliderAnimation } from './shared/right-slide.animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: rightSliderAnimation
   
})
export class AppComponent {
  sidenavVisible: boolean = false;
}
