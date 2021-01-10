import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { history } from '../store'
import Home from '../pages'
import LoginPage from '../pages/login'
import SignupPage from '../pages/signup'

function AppRouter() {
    const location = useLocation()
    return (
        <TransitionGroup>
            <CSSTransition timeout={100} classNames={'fade'} key={location.key}>
                <Switch location={location}>
                    <Route path={'/social/login/kakao'} />
                    <Route path={'/login'} component={LoginPage} />
                    <Route path={'/sign-up'} component={SignupPage} />
                    <Route path={'/'} exact={true} component={Home} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default AppRouter
