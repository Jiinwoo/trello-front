import React from 'react'
import {ConnectedRouter} from "connected-react-router";
import {history} from "../store";
import {Switch, Route} from "react-router-dom";
import Home from "../pages";


function AppRouter () {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route path={'/social/login/kakao'}/>
                <Route path={'/login'}/>
                <Route path={'/signup'}/>
                <Route path={'/'} component={Home}/>
            </Switch>
        </ConnectedRouter>
    )
}

export default AppRouter