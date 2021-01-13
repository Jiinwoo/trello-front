import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

function PrivateRoute({ component: Component, ...rest }: RouteProps) {
    if (!Component) {
        return (
            <Redirect
                to={{
                    pathname: '/404',
                }}
            />
        )
    }
    return (
        <Route
            {...rest}
            render={(props) => {
                return window.sessionStorage.getItem('accessToken') ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
                )
            }}
        />
    )
}

export default PrivateRoute
