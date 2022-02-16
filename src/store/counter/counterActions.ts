import { Action } from 'redux'

export enum CounterActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
  UPDATE = 'UPDATE',
}

export type CounterAction =
  | Action<CounterActionTypes.INCREMENT>
  | Action<CounterActionTypes.DECREMENT>
  | Action<CounterActionTypes.RESET>
  | Action<CounterActionTypes.UPDATE>

export const increment: CounterAction = {
  type: CounterActionTypes.INCREMENT,
}

export const decrement: CounterAction = {
  type: CounterActionTypes.DECREMENT,
}

export const reset: CounterAction = {
  type: CounterActionTypes.RESET,
}
