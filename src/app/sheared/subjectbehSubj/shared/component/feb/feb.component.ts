import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../../service/username.service';

@Component({
  selector: 'app-feb',
  templateUrl: './feb.component.html',
  styleUrls: ['./feb.component.scss']
})
export class FebComponent implements OnInit {
  Username!:string

  constructor(private _UsernameService:UsernameService) { }

  ngOnInit(): void {
    this._UsernameService.UsernameSub.subscribe(res=>{
      this.Username=res
    })
  }


}
