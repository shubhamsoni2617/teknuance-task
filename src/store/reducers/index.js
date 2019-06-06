import { combineReducers } from 'redux';
import personReducer from './personReducer';
import singlePersonReducer from './singlePersonReducer'



export default combineReducers({
    persons: personReducer,
    singlePerson: singlePersonReducer
})