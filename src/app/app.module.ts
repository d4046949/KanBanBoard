import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyLibService } from 'my-lib';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule }   from '@angular/forms';;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardModule } from './board/board.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    BrowserAnimationsModule,
    BoardModule,
    
  ],
  providers: [MyLibService],
  bootstrap: [AppComponent]
})
export class AppModule { }
