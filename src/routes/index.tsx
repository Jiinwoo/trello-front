import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { history } from '../store'
import HomePage from '../pages'
import LoginPage from '../pages/login'
import SignupPage from '../pages/signup'
import PrivateRoute from './PrivateRoute'
import OAuth2Redirect from './OAuth2Redirect'

function AppRouter() {
    const location = useLocation()
    return (
        <TransitionGroup>
            <CSSTransition timeout={100} classNames={'fade'} key={location.key}>
                <Switch location={location}>
                    <Route
                        path={'/oauth2/redirect'}
                        component={OAuth2Redirect}
                    />
                    <Route path={'/login'} component={LoginPage} />
                    <Route path={'/sign-up'} component={SignupPage} />
                    <PrivateRoute
                        path={'/'}
                        exact={true}
                        component={HomePage}
                    />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default AppRouter
