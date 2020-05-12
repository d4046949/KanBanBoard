import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './settings.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BootstrapValidationCssDirective } from '../form-validation-css.directive';
import { EditCardComponent } from './edit-card/edit-card.component';


@NgModule({
  declarations: [
    EditCardComponent,
    BootstrapValidationCssDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    EditCardComponent,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BootstrapValidationCssDirective
  ]
})
export class SettingsModule { }
