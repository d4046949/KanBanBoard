import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ITask } from './models/task';

@Injectable({
  providedIn: 'root'
})
export class EditCardService {

  private _taskViewing = new Subject();
  taskViewing$ = this._taskViewing.asObservable();

  private _toggle = new Subject();
  toggle$ = this._toggle.asObservable();

  toggle() {
    this._toggle.next();
  }

  emitChange = (task: ITask) => {
    this._taskViewing.next(task);
  }

  private _isLoaded = new Subject();
  isLoaded$ = this._isLoaded.asObservable();

  emitLoad(id: number){
    this._isLoaded.next(id);
  }

  constructor() { }
}
