import {combineReducers} from 'redux'
import countReducer from './count-reducer'

const reducers=combineReducers({
    counter:countReducer
})

export default reducers;