import React from 'react'
import styled from 'styled-components'
import { Col, Layout, Row } from 'antd'

interface HomeLayoutProps {
    header: React.ReactNode
    children: React.ReactNode
    footer: React.ReactNode
    side: React.ReactNode
}

function HomeLayout({ header, children, footer, side }: HomeLayoutProps) {
    return (
        <>
            <HeaderRow>
                <Col span={24}>{header}</Col>
            </HeaderRow>
            <ContentRow>
                <Col sm={16} xs={24}>
                    {children}
                </Col>
                <Aside>{side}</Aside>
            </ContentRow>
            <FooterRow>
                <Col>{footer}</Col>
            </FooterRow>
        </>
    )
}

const HeaderRow = styled(Row)`
    height: 40px;
`

const ContentRow = styled(Row)`
    min-height: 100vh;
    padding-top: 40px;
    padding-bottom: 40px;
    margin-top: -40px;
    margin-bottom: 40px;
    position: relative;
    overflow-x: hidden;
`
const FooterRow = styled(Row)`
    height: 40px;
`

const Aside = styled.div`
    position: fixed;
    right: 0;
    z-index: 10;
    top: 0;
    bottom: 0;
`

export default HomeLayout
