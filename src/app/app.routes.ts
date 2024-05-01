import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/counter/counter.component').then(c => c.CounterComponent) },
  { path: 'scoreboard', loadComponent: () => import('./components/scoreboard/scoreboard.component').then(c => c.ScoreboardComponent) },
  { path: 'shop', loadComponent: () => import('./components/shop-page/shop-page.component').then(c => c.ShopPageComponent) }
];
