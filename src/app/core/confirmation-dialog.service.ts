import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  private subject = new Subject<any>();

  constructor() { }

  confirm(message: string, yesCallback: () => void, noCallback: () => void) {
    this.setConfirmation(message, yesCallback, noCallback);
  }

  setConfirmation(message: string, yesCallback: () => void, noCallback: () => void) {
    let that = this;

    this.subject.next({
      type: "confirm",
      text: message,
      yescb: function () {
        that.subject.next(), yesCallback();
      },
      nocb: function(){
        that.subject.next();
        noCallback();
      }
    });
  }

  getMessage(): Observable<any>{
    return this.subject.asObservable();
  }
}
