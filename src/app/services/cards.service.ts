import { Injectable } from '@angular/core';
import { Observable, delay, from, of, takeUntil, throwError, timer } from 'rxjs';
import { Card } from '../state/card/card.reducer';

@Injectable({
  providedIn: 'root',
})
export class CardsService {

  constructor() { }

  getAll(): Observable<Card[]> {
    return of([
      { id: 5, name: 'product-5', price: 6500 },
      { id: 6, name: 'product-6', price: 7000 },
      { id: 7, name: 'product-7', price: 10_000 }
    ]).pipe(delay(1000));
    // return timer(1000)
    //   .pipe(takeUntil(throwError(new Error('Some error'))))
  }
}
