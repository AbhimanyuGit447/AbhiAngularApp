import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { averageTax, basicTax, highTax } from '../state/salary.action';
import { SalarySate } from '../state/salary.state';

@Component({
  selector: 'app-cal-buttons',
  templateUrl: './cal-buttons.component.html',
  styleUrls: ['./cal-buttons.component.scss']
})
export class CalButtonsComponent implements OnInit {

  constructor(private store : Store<{salary : SalarySate}>) { }

  ngOnInit(): void {
  }

  calculateHT(){
    this.store.dispatch(highTax());
  }

  calculateAT(){
    this.store.dispatch(averageTax())
  }

  calculateBT(){
    this.store.dispatch(basicTax())
  }


}
