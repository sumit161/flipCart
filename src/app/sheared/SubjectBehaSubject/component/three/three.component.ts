import { Component, OnInit } from '@angular/core';
import { UserNameService } from '../../SubjectService/user-name.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {

  username!: string;
  constructor(private _UserNameService: UserNameService) {}

  ngOnInit(): void {
    // this._UserNameService.userSubject$.subscribe((res) => {
    this._UserNameService.userSubject.subscribe((res) => {
      this.username = res;
    });
  }
}
