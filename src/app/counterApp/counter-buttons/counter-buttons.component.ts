import { Output } from '@angular/core';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { decrement, increment, reset } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';


@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {

  constructor(private store : Store<AppState>) { }

  
  onadd(){
    this.store.dispatch(increment())
  }

  onsubtract(){
    this.store.dispatch(decrement());
  }

  onreset(){
   this.store.dispatch(reset());
  }

  ngOnInit(): void {
  }

}
