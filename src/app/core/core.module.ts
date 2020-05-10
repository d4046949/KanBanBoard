import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavMenuComponent, NoPageFoundComponent],
  imports: [
    CommonModule,
    RouterModule
  ], exports:[NavMenuComponent,NoPageFoundComponent,RouterModule]
})
export class CoreModule { }
