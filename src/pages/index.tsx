import React from 'react'
import styled from 'styled-components'
import { history } from '../store'

function Home() {
    return (
        <Wrapper>
            hello world
            <button onClick={() => history.push('/login')}>
                로그인페이지로이동
            </button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 100vh;
    &.fade-enter {
        opacity: 0;
    }

    &.fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 2s ease-in;
    }
`

export default Home
