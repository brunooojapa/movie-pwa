import { combineReducers } from 'redux';
import list from './listReducers';
import itemDetails from './detailsReducers';
export default combineReducers({ list, itemDetails });
