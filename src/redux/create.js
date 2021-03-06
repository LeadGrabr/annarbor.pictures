import { createStore as _createStore, applyMiddleware, compose } from 'redux'
import clientMiddleware from './middleware/clientMiddleware'
import storageMiddleware from 'redux-simplestorage'
import { middleware as awaitMiddleware } from 'redux-await'
import { routerMiddleware } from 'react-router-redux'
import reducer from './modules/reducer'
import { DevTools } from '../components'
import { persistState } from 'redux-devtools'
import createLogger from 'redux-logger'

export default function createStore(client, browserHistory) {
    const middleware = [
        clientMiddleware(client),
        awaitMiddleware,
        storageMiddleware,
        routerMiddleware(browserHistory)
    ]

    if (process.env.LOGGER) {
        middleware.push(createLogger())
    }

    let finalCreateStore
    if (typeof window !== 'undefined' && process.env.DEVELOPMENT && process.env.DEVTOOLS) {
        finalCreateStore = compose(
            applyMiddleware(...middleware),
            window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
            persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
        )(_createStore)
    } else {
        finalCreateStore = applyMiddleware(...middleware)(_createStore)
    }

    const store = finalCreateStore(reducer)

    if (process.env.DEVELOPMENT && module.hot) {
        module.hot.accept('./modules/reducer', () => {
            store.replaceReducer(require('./modules/reducer')) // eslint-disable-line global-require
        })
    }

    return store
}
