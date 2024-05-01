import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { awayScore, homeScore } from './scoreboard.actions';
import { ScoreboardState } from './scoreboard.reducer';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { selectScoreFormatted, selectTotalScored } from './scoreboard.selector';

@Component({
  selector: 'app-scoreboard',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './scoreboard.component.html',
  styles: `
    :host {
      display: block;
      max-width: 25rem;
      padding: .5rem;
      background-color: rgb(224 224 224);
    }
    button {
      padding: .25rem 1rem;
    }
    form {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      column-gap: .5rem;
      margin-bottom: .5rem;

      input {
        outline: none;
        padding: .25rem .5rem;
        width: 100%;
        text-align: center;
      }

      & + *:has(button) {
        display: flex;
        justify-content: space-between;
        column-gap: 1rem;
      }
    }
  `
})
export class ScoreboardComponent implements OnInit {
  scoreBoard$!: Observable<ScoreboardState>;
  scoreString$!: Observable<string>;
  totalScored$!: Observable<number>;

  constructor(private store: Store<{ game: ScoreboardState }>){
    this.scoreBoard$ = this.store.select('game');
    this.scoreString$ = this.store.select(selectScoreFormatted);
    this.totalScored$ = this.store.select(selectTotalScored);
  }

  ngOnInit(): void {
  }

  homeScore(){
    this.store.dispatch(homeScore());
  }
  awayScore(){
    this.store.dispatch(awayScore());
  }
}
