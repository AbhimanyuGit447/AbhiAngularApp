import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { channelName, input } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss']
})
export class CounterInputComponent implements OnInit {

  value! : number;
  channelName! : string;

  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(getChannelName).subscribe((channelName) => {
      console.log('called chabbel name observable');
      
      this.channelName = channelName;
    })
  }

  onAddInput(){
    this.store.dispatch(input({
      value : +this.value
    }));
  }

  onChangeName(){
    this.store.dispatch(channelName());
  }

}
