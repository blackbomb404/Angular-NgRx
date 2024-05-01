import { createAction, props } from "@ngrx/store";
import { Card } from "../card/card.reducer";

export const loadMoreCards = createAction('[ShopPage Component] Load Products');
export const loadMoreCardsSuccess = createAction(
  '[Cards API] Cards Loaded Success',
  props<{ cards: Card[] }>()
)
