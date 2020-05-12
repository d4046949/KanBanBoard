import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoPageFoundComponent } from './core/no-page-found/no-page-found.component';
import { PanelComponent } from './board/panel/panel.component';
import { BoardPageComponent } from './board/board-page/board-page.component';
import { TComponent } from './settings/t/t.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data: {animation: 'Home'}
  },
  {
    path: 'home',
    component: BoardPageComponent,
    data: {animation: 'Home'}
  },
  {
    path: 'test/:id',
    component: TComponent,
    outlet: 'side-panel',
    data: {animation: 'FilterPage'}
  },
  {
    path: '**',
    component: NoPageFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
