import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './components/counter/counter.reducer';
import { scoreBoardReducer } from './components/scoreboard/scoreboard.reducer';
import { provideEffects } from '@ngrx/effects';
import { cardReducer } from './state/card/card.reducer';
import { cartReducer } from './state/cart/cart.reducer';
import { CardsEffects } from './state/card/cards.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideState({ name: 'counter', reducer: counterReducer }),
    provideState({ name: 'game', reducer: scoreBoardReducer }),
    provideState({ name: 'cards', reducer: cardReducer }),
    provideState({ name: 'cartItems', reducer: cartReducer }),
    provideEffects(CardsEffects)
  ]
};
