import React from 'react'
import styled from 'styled-components'
import { Layout } from 'antd'
import WebtoonCardList from '../organisms/WebtoonCardList'

const { Header, Footer, Sider, Content: AntdContent } = Layout

function HomeLayout() {
    return (
        <Layout>
            <Header></Header>
            <InnerLayout>
                <Content>asd</Content>
                <Sider>
                    <WebtoonCardList />
                </Sider>
            </InnerLayout>
            <Footer></Footer>
        </Layout>
    )
}

const InnerLayout = styled(Layout)`
    min-height: 100vh;
    padding-top: 64px;
    padding-bottom: 48px;
    margin-top: -64px;
    margin-bottom: -48px;
`

const Content = styled(AntdContent)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.fade-enter {
        opacity: 0;
    }

    &.fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 1s ease-in;
    }
`

export default HomeLayout
