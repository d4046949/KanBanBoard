import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditCardService {
  private _toggle = new Subject();
  toggle$ = this._toggle.asObservable();

  toggle(todo) {
    this._toggle.next(todo);
  }

  private _isLoaded = new Subject();
  isLoaded$ = this._isLoaded.asObservable();

  emitLoad(id: number){
    this._isLoaded.next(id);
  }

  constructor() { }
}
