import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserNameService {
  //observer
  // userSubject: Subject<string> = new Subject<string>();
  //observable
  // userSubject$=this.userSubject.asObservable()


  // behaviourSubject
  userSubject :BehaviorSubject<string>=new BehaviorSubject<string>("sumit")
  constructor() {}
}
