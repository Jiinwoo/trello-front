import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useSpring, animated } from 'react-spring'

function WebtoonDrawer() {
    const [open, setOpen] = useState(false)
    const props = useSpring({
        transform: open ? 'translateX(0)' : 'translateX(80vw)',
    })
    const toggleSide = useCallback(() => {
        setOpen((state) => !state)
    }, [])
    return (
        <AnimatedWrapper style={props}>
            <MintWrapper>
                <MoreButton
                    icon={
                        open ? (
                            <DoubleRightOutlined style={{ color: 'black' }} />
                        ) : (
                            <DoubleLeftOutlined style={{ color: 'black' }} />
                        )
                    }
                    onClick={toggleSide}
                />
            </MintWrapper>
            <WebtoonWrapper>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                commodi dignissimos eum libero maiores maxime pariatur provident
                quibusdam repudiandae soluta unde veritatis voluptas voluptatem,
                voluptatibus, voluptatum. Hic optio perferendis placeat.
            </WebtoonWrapper>
        </AnimatedWrapper>
    )
}

const AnimatedWrapper = styled(animated.div)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 100%;
`

const MintWrapper = styled.div`
    background-color: #28afb0;
    padding: 20px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    height: 300px;
    margin-top: 30px;
    width: 5vw;
    display: flex;
    align-items: center;
    justify-content: center;
`
const WebtoonWrapper = styled.div`
    height: 80%;
    background-color: #28afb0;
    width: 80vw;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 20px;
`

const MoreButton = styled(Button)`
    background-color: #28afb0;
    border: none;
    &:active,
    &:focus,
    &:hover {
        background-color: #28afb0;
    }
    color: black;
`

export default WebtoonDrawer
