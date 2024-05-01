import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ScoreboardState } from './scoreboard.reducer';

export const selectScoreFormatted = createSelector(
  createFeatureSelector('game'),
  ({ home, away }: ScoreboardState) => `${home} - ${away}`
)

export const selectTotalScored = createSelector(
  createFeatureSelector('game'),
  ({ home, away }: ScoreboardState) => home + away
)


