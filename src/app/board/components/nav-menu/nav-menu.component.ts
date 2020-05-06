import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NewLaneComponent } from '../new-lane/new-lane.component';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html'
})
export class NavMenuComponent {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModalWithComponent() : void {
    this.bsModalRef = this.modalService.show(NewLaneComponent, {});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  onSettingsClicked() :void {

  }
}
