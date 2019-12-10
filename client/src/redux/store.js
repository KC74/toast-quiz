import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const configStore = initialState => {
    const middleware =
        process.env.NODE_ENV !== 'production'
            ? [thunk, createLogger()]
            : [thunk]

    const createStoreWithMiddleware = applyMiddleware(...middleware)(
        createStore
    )

    const store = createStoreWithMiddleware(
        rootReducer,
        composeWithDevTools(),
        initialState
    )

    return store
}

export default configStore
