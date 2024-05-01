import { Component } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CardComponent } from '../card/card.component';
import { Observable } from 'rxjs';
import { Card } from '../../state/card/card.reducer';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { loadMoreCards } from '../../state/shopPage/shopPage.action';

@Component({
  selector: 'app-shop-page',
  standalone: true,
  imports: [CartComponent, CardComponent, AsyncPipe],
  templateUrl: './shop-page.component.html',
  styles: `
    :host {
      display: grid;
      grid-template-columns: 3fr 1fr;

      & > * {
        border: 1px solid gray;
      }
    }
    section {
      padding: .5rem;

      h2 {
        font-size: 1.5rem;
        margin-bottom: .5rem;
      }
      .product-list {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem 1.25rem;
      }
      button {
        padding: .25rem .5rem;
        margin-top: 2rem;
        width: 50%;
        display: block;
      }
    }
  `
})
export class ShopPageComponent {
  cards$:Observable<Card[]>;

  constructor(private store: Store<{ cards: Card[] }>){
    this.cards$ = store.select('cards');
  }

  loadMore(){
    this.store.dispatch(loadMoreCards());
  }
}
