import { Component, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../../state/cart/cart.action';
import { CartItem } from '../../state/cart/cart.reducer';
import { Subscription, map } from 'rxjs';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styles: `
    :host {
      border: 1px solid gray;
      padding: .5rem;
    }

    button {
      margin-top: 1rem;
      padding: .25rem .75rem;
      width: 100%;
    }
  `
})
export class CardComponent implements OnDestroy {
  @Input({ required: true }) id!: number;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) price!: number;
  onCart: boolean = false;
  private subscription!: Subscription;

  constructor(private store: Store<{ cartItems: CartItem[] }>){
    this.subscription = store.select('cartItems').pipe(
      map(cartItems => cartItems.some(ci => ci.product.id === this.id))
    ).subscribe(onCart => this.onCart = onCart);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addToCart(){
    const cartItem: CartItem = { product: { id: this.id, name: this.name, price: this.price }, amount: 1 };
    this.store.dispatch(addToCart(cartItem));
  }

  removeFromCart(){
    this.store.dispatch(removeFromCart({ id: this.id }));
  }
}
