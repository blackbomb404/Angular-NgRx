import { createAction, props } from "@ngrx/store";
import { CartItem } from "./cart.reducer";

export const addToCart = createAction(
  '[Card Component] Add To Cart',
  props<CartItem>()
);
export const removeFromCart = createAction(
  '[Card Component] Remove From Cart',
  props<{ id: number }>()
);
export const clearCart = createAction('[Cart Component] Clear Cart');
