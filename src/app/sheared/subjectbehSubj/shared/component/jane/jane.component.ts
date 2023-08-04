import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../../service/username.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-jane',
  templateUrl: './jane.component.html',
  styleUrls: ['./jane.component.scss']
})
export class JaneComponent implements OnInit {
  Username!:string;
  data!:number

  constructor(private _UsernameService:UsernameService) { }

  ngOnInit(): void {
    this._UsernameService.UsernameSub.subscribe(res=>{
      this.Username=res
    })
    const interval$ = interval(1000);
interval$.subscribe(res=>{
this.data = res
console.log(this.data);

})
  }

}
