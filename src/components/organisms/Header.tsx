import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Wrapper>
            <div>로고</div>
            <div>logo</div>
            <div>유저 정보</div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #19647e;
    height: 40px;
    align-items: center;
    display: flex;
    justify-content: space-between;
`

export default Header
