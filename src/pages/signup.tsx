import React from 'react'
import SignupForm from '../components/organisms/SignupForm'
import styled from 'styled-components'

function SignupPage() {
    return (
        <Wrapper>
            <SignupForm />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    &.fade-enter {
        opacity: 0;
    }

    &.fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 1s ease-in;
    }
`

export default SignupPage
