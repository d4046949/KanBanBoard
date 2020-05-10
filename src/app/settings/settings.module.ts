import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './settings.routing';
import { TComponent } from './t/t.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [TComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forChild(routes)
  ], exports:[RouterModule, TComponent,BrowserAnimationsModule]
})
export class SettingsModule { }
