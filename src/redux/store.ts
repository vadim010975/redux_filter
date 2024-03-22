import {
  combineReducers,
  // compose,
  legacy_createStore
} from 'redux';

import pricelistReducer from './reducers/pricelistReducer';
import formValueReducer from './reducers/formValuesReducer';
import btnCancelReducer from './reducers/btnCancelReducer';

// const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      list: pricelistReducer,
      form: formValueReducer,
      btnCancel: btnCancelReducer,
    }),
    undefined,
    // compose(
    //   ReactReduxDevTools,
    // )
  );
}

export default configureStore;