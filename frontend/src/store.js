import { createStore, combineReducers, applyMiddleware } from 'redux'
import {configureStore} from 'rtk'
import thunk from 'redux-thunk'
import { composeWithDevtools } from 'redux-thunk'

const reducer = combineReducers({})
const initialState = {}
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevtools(applyMiddleware([...middleware]))
)

export default store
