import { createReducer, on } from "@ngrx/store";
import { removeFromCart, clearCart } from "./cart.action";
import { Card } from "../card/card.reducer";
import { addToCart } from "../cart/cart.action";

export const cart: CartItem[] = [];

export const cartReducer = createReducer(
  cart,
  on(addToCart, (cartItems, ci: CartItem) => [...cartItems, ci]),
  on(removeFromCart, (cartItems, { id }) => cartItems.filter(ci => ci.product.id !== id )),
  on(clearCart, _ => []),
)

export interface CartItem {
  product: Card;
  amount: number;
}
