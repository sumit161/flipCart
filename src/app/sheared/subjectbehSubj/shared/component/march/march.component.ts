import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../../service/username.service';

@Component({
  selector: 'app-march',
  templateUrl: './march.component.html',
  styleUrls: ['./march.component.scss']
})
export class MarchComponent implements OnInit {
  Username!:string

  constructor(private _UsernameService:UsernameService) { }

  ngOnInit(): void {
    this._UsernameService.UsernameSub.subscribe(res=>{
      this.Username=res
    })
  }

}
