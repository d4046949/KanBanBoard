import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoPageFoundComponent } from './core/no-page-found/no-page-found.component';
import { BoardPageComponent } from './board/board-page/board-page.component';
import { EditCardComponent } from './board/edit-card/edit-card.component';
import { BoardResolverService } from './board/board-resolver.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data: { animation: 'Home' }
  },
  {
    path: 'home',
    component: BoardPageComponent,
    data: { animation: 'Home' }
  },
  {
    path: 'test/:id',
    component: EditCardComponent,
    resolve: {
      cres: BoardResolverService
    },
    outlet: 'side-panel',
    data: {
      animation: 'FilterPage',
      triggerLoadEvent: true
    }
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
