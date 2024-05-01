import { createReducer, on } from "@ngrx/store";
import { homeScore, awayScore } from "./scoreboard.actions";

export const initialState: ScoreboardState = {
  home: 0,
  away: 0
};

export const scoreBoardReducer = createReducer(
  initialState,
  on(homeScore, state => ({ ...state, home: state.home + 1 })),
  on(awayScore, state => ({ ...state, away: state.away + 1 }))
)

export interface ScoreboardState {
  home: number;
  away: number;
}
