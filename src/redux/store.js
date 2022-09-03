import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import rootReducer from './rootReducer'

const composeEnhancers = composeWithDevTools({ trace: true })

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
)

export default store