import { combineReducers} from 'redux'
import userreducer from './users'


export default combineReducers({
    userred: userreducer
})
