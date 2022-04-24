import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { counterReducer } from '../state/counter.reducer';
import { getCounter } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit, OnDestroy {

  counter!: number;

  counterSubscription! : Subscription;

  constructor(private store : Store<AppState>) { }



  ngOnInit(): void {
    this.counterSubscription = this.store.select(getCounter).subscribe(data => {
      console.log(data, 'yes claled counter one');
      this.counter = data;
      
    })
  }

  ngOnDestroy(){
    if(this.counterSubscription){
      console.log(this.counterSubscription, 'yep unsuubscribed')
      this.counterSubscription.unsubscribe();
    
    }
  }

}
