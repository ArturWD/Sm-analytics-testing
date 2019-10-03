import { createStore, combineReducers} from 'redux';

import productReducer from './reducers/productReducer'


const rootReducer = combineReducers({
    products: productReducer
})

export default () => {
  const store = createStore(
    rootReducer
  );

  return store;
};

export type AppState = ReturnType<typeof rootReducer>
