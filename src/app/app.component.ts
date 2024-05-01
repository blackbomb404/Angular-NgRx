import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CounterComponent,
    ScoreboardComponent
  ],
  templateUrl: './app.component.html',
  styles: `
    h1 {
      margin-bottom: 1rem;
    }

    nav ul {
      display: flex;
      list-style-type: none;
      column-gap: .75rem;
      font-size: 1.5rem;
      border-bottom: 1px solid gray;
      margin-bottom: 1.5rem;

      a {
        text-decoration: none;
        color: black;

        &.active {
          color: #3366cc;
        }
      }
    }
  `
})
export class AppComponent {

  links = [
    { text: 'Counter', path: '' },
    { text: 'Scoreboard', path: 'scoreboard' },
    { text: 'Shop', path: 'shop' }
  ]
}
