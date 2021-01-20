import React, { useCallback, useRef } from 'react'
import styled from 'styled-components'
import { history } from '../store'
import HomeLayout from '../components/templates/HomeLayout'
import WebtoonDrawer from '../components/organisms/WebtoonDrawer'
import Footer from '../components/organisms/Footer'
import Header from '../components/organisms/Header'
import SockJsClient from 'react-stomp'

function HomePage() {
    let clientRef = useRef()
    const onMessageReceive = useCallback((msg: any, topic: string) => {
        console.log(msg, topic)
    }, [])

    return (
        <HomeLayout
            header={<Header />}
            footer={<Footer />}
            side={<WebtoonDrawer />}
        >
            <button
                onClick={() =>
                    (clientRef as any).sendMessage('/topics/all', 'zzz')
                }
            >
                클릭
            </button>
            <SockJsClient
                url={'http://localhost:8080/chatting'}
                topics={['/topic/public']}
                onMessage={onMessageReceive}
                ref={(client: any) => {
                    clientRef = client
                }}
            />
        </HomeLayout>
    )
}

export default HomePage
