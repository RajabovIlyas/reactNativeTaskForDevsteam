import {applyMiddleware, combineReducers, createStore} from 'redux';
import photosReducer from './photosReducer';
import thunk from 'redux-thunk';
import photoReducer from './photoReducer';

const reducers = combineReducers({
  photosPage: photosReducer,
  showPhoto: photoReducer,
});

export default store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
