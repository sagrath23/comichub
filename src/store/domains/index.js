import { combineReducers } from 'redux';
import comicReducer from './comic';
import comicListReducer from './comicList';

const rootReducer = combineReducers({
  comic: comicReducer,
  comicList: comicListReducer
});

export default rootReducer;
