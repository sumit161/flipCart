import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {
  UsernameSub: BehaviorSubject<string> = new BehaviorSubject<string>("sumit");

  constructor() { }
}
