import { combineReducers } from 'redux';
import todos from './todos';
import todoSegment from './todoSegment';

export default combineReducers({
    todos,
    todoSegment
});