import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CartItem } from '../../state/cart/cart.reducer';
import { Store } from '@ngrx/store';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { clearCart, removeFromCart } from '../../state/cart/cart.action';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './cart.component.html',
  styles: `
    :host {
      padding: .5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      row-gap: 1rem;
    }
    ul {
      display: grid;
      row-gap: .5rem;

      li {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        border-bottom: 1px solid gray;

        .remove-from-cart-btn {
          font-size: 1.25rem;
          font-weight: bold;
          color: #dd3333;
          padding-inline: .25rem;
          border: none;
          cursor: pointer;
        }
      }
    }
    button:not(ul *) {
      padding: .25rem .5rem;
    }
  `
})
export class CartComponent {
  cartItems$!: Observable<CartItem[]>;

  constructor(private store: Store<{ cartItems: CartItem[] }>){
    this.cartItems$ = this.store.select('cartItems');
  }

  removeFromCart(id: number){
    this.store.dispatch(removeFromCart({ id }));
  }

  clearCart(){
    this.store.dispatch(clearCart());
  }
}
