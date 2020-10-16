import { combineReducers } from 'redux'
import todos from './todos'
import VisibilityFilter from '../Reducers/VisibilityFilter'

export default combineReducers({
    todos,
    VisibilityFilter
})