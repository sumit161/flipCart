import { Component, OnInit } from '@angular/core';
import { UserNameService } from '../../SubjectService/user-name.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  username!: string;
  constructor(private _UserNameService: UserNameService) {}

  ngOnInit(): void {
    // this._UserNameService.userSubject$.subscribe((res) => {
    this._UserNameService.userSubject.subscribe((res) => {
      this.username = res;
    });
  }
}
