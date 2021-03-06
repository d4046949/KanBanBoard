import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyLibService } from 'my-lib';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardModule } from './board/board.module';
import { CoreModule } from './core/core.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,  
    ReactiveFormsModule, 
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    BrowserAnimationsModule,
    BoardModule,
    CoreModule,
    SettingsModule
  ],
  providers: [MyLibService],
  bootstrap: [AppComponent]
})
export class AppModule { }
