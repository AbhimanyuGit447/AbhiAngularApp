import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { SalarySate } from '../state/salary.state';

@Component({
  selector: 'app-cal-output',
  templateUrl: './cal-output.component.html',
  styleUrls: ['./cal-output.component.scss']
})
export class CalOutputComponent implements OnInit, OnDestroy {

  salary! : number;
  salarySubscription! : Subscription

  constructor(private store : Store<{salary : SalarySate}>) { }

  ngOnInit(): void {
    this.store.select('salary').subscribe(data => {
      console.log(data);
      this.salary = data.salary;
    })
  }

  ngOnDestroy(){
    if(this.salarySubscription){
      this.salarySubscription.unsubscribe();
    }
  
  }

}
