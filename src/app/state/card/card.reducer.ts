import { createReducer, on } from "@ngrx/store";
import { loadMoreCardsSuccess } from "../shopPage/shopPage.action";

export const products: Card[] = [
  { id: 1, name: 'product-1', price: 2000 },
  { id: 2, name: 'product-2', price: 3500 },
  { id: 3, name: 'product-3', price: 4000 },
  { id: 4, name: 'product-4', price: 5000 },
]

export const cardReducer = createReducer(
  products,
  on(loadMoreCardsSuccess, (products, { cards }) => [...products, ...cards])
)

export interface Card {
  id: number;
  name: string;
  price: number;
}
