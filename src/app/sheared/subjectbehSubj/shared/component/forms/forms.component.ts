import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UsernameService } from '../../service/username.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  constructor(private _UsernameService: UsernameService) {}

  ngOnInit(): void {
  }
  OnAddUsername(name: string) {
    this._UsernameService.UsernameSub.next(name)

  }
}
