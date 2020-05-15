import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { RouterModule } from '@angular/router';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './confirmation-dialog.service';

@NgModule({
  declarations: [
    NavMenuComponent,
    NoPageFoundComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[
    ConfirmationDialogService
  ],
  exports: [
    NavMenuComponent,
    NoPageFoundComponent,
    RouterModule,
    ConfirmationDialogComponent
  ]
})
export class CoreModule { }
