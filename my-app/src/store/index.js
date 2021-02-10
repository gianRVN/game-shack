import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import heroReducer from './reducers/heroReducer'
import favoriteReducer from './reducers/favoriteReducer'

const store = createStore((combineReducers({
  hero: heroReducer,
  favorite: favoriteReducer
})), applyMiddleware(thunk))

export default store