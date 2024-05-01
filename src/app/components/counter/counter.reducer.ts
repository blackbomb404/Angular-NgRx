import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./counter.actions";

const initialState = 0;
const minimumValue = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, state => state >= minimumValue ? state + 1 : minimumValue),
  on(decrement, state => state > minimumValue ? state - 1 : minimumValue),
  on(reset, () => initialState),
)
