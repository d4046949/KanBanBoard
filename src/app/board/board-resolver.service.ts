import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MockTaskService } from './mock-task.service';
import { Observable } from 'rxjs';
import { ITask } from './models/task';

@Injectable({
  providedIn: 'root'
})
export class BoardResolverService implements Resolve<ITask>{

  constructor(private mockDataStore : MockTaskService) { 

   }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITask> {
    return this.mockDataStore.get$(route.params.id).pipe();
  }
}
