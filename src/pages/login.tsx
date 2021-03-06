import React from 'react'
import styled from 'styled-components'
import LoginForm from '../components/organisms/LoginForm/LoginForm'

function LoginPage() {
    return (
        <Wrapper>
            <LoginForm />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    &.fade-enter {
        opacity: 0;
        z-index: 1;
    }

    &.fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 1s ease-in;
    }
`

export default LoginPage
