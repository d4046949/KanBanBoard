import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TaskListComponent } from './task-list/task-list.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { NewLaneComponent } from './new-lane/new-lane.component';
import { HoverDirective } from './hover.directive';
import { PanelComponent } from './panel/panel.component';
import { CardComponent } from './card/card.component';
import { MockTaskService } from './mock-task.service';
import { BoardPageComponent } from './board-page/board-page.component';
import { EditCardComponent } from './edit-card/edit-card.component';
import { RouterModule } from '@angular/router';
import { routes } from '../settings/settings.routing';
import { BoardResolverService } from './board-resolver.service';

@NgModule({
  declarations: [
    TaskListComponent,
    NewEntryComponent,
    NewLaneComponent,
    HoverDirective,
    PanelComponent,
    CardComponent,
    BoardPageComponent,
    EditCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    RouterModule.forChild(routes),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MockTaskService, BoardResolverService],
  exports: [
    HoverDirective,
    PanelComponent,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    TaskListComponent,
    NewLaneComponent,
    BoardPageComponent,
    EditCardComponent,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BoardModule { }
