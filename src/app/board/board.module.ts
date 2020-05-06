import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task-list/task-list.component';
import { NewEntryComponent } from './components/new-entry/new-entry.component';
import { NewLaneComponent } from './components/new-lane/new-lane.component';
import { HoverDirective } from './directives/hover.directive';
import { PanelComponent } from './components/panel/panel.component';
import { MockTaskService } from './services/mock-task.service';
import { PanelService } from './services/panel.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [ 
    TaskListComponent,
    NewEntryComponent,
    NewLaneComponent,
    HoverDirective,
    PanelComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule
  ],
  providers: [MockTaskService, PanelService],
  exports:[
    HoverDirective,
    PanelComponent,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    TaskListComponent,
    NewLaneComponent]
})
export class BoardModule { }
