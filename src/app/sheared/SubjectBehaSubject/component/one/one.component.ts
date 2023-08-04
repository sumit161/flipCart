import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserNameService } from '../../SubjectService/user-name.service';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
})
export class OneComponent implements OnInit, OnDestroy {
  username!: string;
  constructor(private _UserNameService: UserNameService) {}

  unSubscribe$: Subject<void> = new Subject<void>();
  ngOnInit(): void {
    // this._UserNameService.userSubject$.subscribe((res) => {
    this._UserNameService.userSubject.subscribe((res) => {
      this.username = res;
    });

    //interval subscription stop
    const interval$ = interval(1000);

    interval$.pipe(takeUntil(this.unSubscribe$)).subscribe((res) => {
      console.log(`getting value for 1st time and value is ${res}`);
    });
    interval$.pipe(takeUntil(this.unSubscribe$)).subscribe((res) => {
      console.log(`getting value for 2nd time and value is ${res}`);
    });
    interval$.pipe(takeUntil(this.unSubscribe$)).subscribe((res) => {
      console.log(`getting value for 3rd time and value is ${res}`);
    });
  }


  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
