import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CardsService } from "../../services/cards.service";
import { catchError, exhaustMap, map, of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class CardsEffects {

  constructor(
    private actions$: Actions,
    private cardsService: CardsService){ }

  loadCards$ = createEffect(() => this.actions$.pipe(
    ofType('[ShopPage Component] Load Products'),
    exhaustMap(() => this.cardsService.getAll().pipe(
      map(cards => ({ type: '[Cards API] Cards Loaded Success', cards })),
      catchError(() => {
        alert('Could not load more cards...');
        return of({ type: '[Cards API] Cards Loaded Error' })
      })
    ))
  ))
}
