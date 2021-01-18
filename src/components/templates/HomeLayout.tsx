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
                <Col sm={8} xs={24}>
                    {side}
                </Col>
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
`
const FooterRow = styled(Row)`
    height: 40px;
`

export default HomeLayout
