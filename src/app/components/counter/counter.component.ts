import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './counter.actions';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styles: `
    :host {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: .5rem 1rem;
      max-width: 25rem;
      padding: .5rem;
      background-color: rgb(224 224 224);
    }
    input {
      grid-column: 1 / -1;
      outline: none;
      text-align: center;
      padding-block: .25rem;
      font-size: 1rem;
    }
    button {
      padding: .25rem 1rem;
    }
  `
})
export class CounterComponent {
  count$!: Observable<number>;

  constructor(private store: Store<{ counter: number }>){
    this.count$ = store.select('counter');
  }

  increment(){
    this.store.dispatch(increment());
  }
  decrement(){
    this.store.dispatch(decrement());
  }
  reset(){
    this.store.dispatch(reset());
  }
}
