import React from 'react'
import styled from 'styled-components'
function WebtoonCardList() {
    return (
        <Wrapper>
            <MintWrapper>
                웹툰
                <br />
                알림
            </MintWrapper>
            <div>asd</div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
`

const MintWrapper = styled.div`
    background-color: #28afb0;
    padding: 20px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    //min-height: 200px;
    //max-height: 2000px;
    height: 300px;
    margin-top: 30px;
`

export default WebtoonCardList
