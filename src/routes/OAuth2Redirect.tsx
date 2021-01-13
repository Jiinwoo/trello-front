import React from 'react'
import useQuery from '../hooks/useQuery'
import { Redirect } from 'react-router-dom'

function OAuth2Redirect() {
    const query = useQuery()
    const token = query.get('token')
    if (token) {
        window.sessionStorage.setItem('accessToken', token)
        return <Redirect to={'/'} />
    } else {
        return <Redirect to={'/login'} />
    }
}
export default OAuth2Redirect
