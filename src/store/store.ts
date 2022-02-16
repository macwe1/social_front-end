import {
  createStore,
  applyMiddleware,
  combineReducers,
  AnyAction,
  Reducer,
  Store,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { createWrapper, MakeStore, HYDRATE } from 'next-redux-wrapper'

import { counterReducer, CounterState } from './counter/counterReducer'

interface windowWidth {
  width: number
}

export interface AppState {
  counter: CounterState
  width: windowWidth
  user: windowWidth
}

const combinedReducers = combineReducers({ counter: counterReducer })

const reducer: Reducer<AppState, AnyAction> = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    // if (state.counter.count) nextState.counter.count = state.counter.count // preserve count value on client side navigation
    return nextState
  }
  return combinedReducers(state, action)
}

/**
 * initStore
 * Initialise and export redux store
 */
const initStore: MakeStore<Store<AppState>> = () => {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

export const storeWrapper = createWrapper<Store<AppState>>(initStore)
