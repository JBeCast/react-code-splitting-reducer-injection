import { createStore, combineReducers } from 'redux'

// Dummy static reducer.
const staticReducers = {
  main: () => ({}),
};

export default function configureStore(initialState = {}) {
  const store = createStore(
    createReducer(),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.asyncReducers = {};

  return store;
}

const createReducer = asyncReducers => combineReducers({
  ...staticReducers,
  ...asyncReducers,
});

export const injectorCreator = store => (key, asyncReducer) => {
  store.asyncReducers[key] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
};
