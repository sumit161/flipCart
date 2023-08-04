import { Component, OnInit } from '@angular/core';
import { UserNameService } from '../../SubjectService/user-name.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private _UserNameService: UserNameService) {}

  ngOnInit(): void {
    this._UserNameService.userSubject.next;
  }
  usingOBSERVERtoOBSERVABLE(name: string) {
    if (name) {
      this._UserNameService.userSubject.next(name);
    }
  }
}
