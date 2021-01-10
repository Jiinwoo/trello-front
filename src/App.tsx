import React from 'react'
import AppRouter from './routes'
import store, { history } from './store'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import GlobalStyles from './style/GlobalStyles'

function App() {
    return (
        <>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <GlobalStyles />
                    <AppRouter />
                </ConnectedRouter>
            </Provider>
        </>
    )
}

export default App
