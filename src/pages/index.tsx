import React from 'react'
import styled from 'styled-components'
import { history } from '../store'
import HomeLayout from '../components/templates/HomeLayout'
import WebtoonCardList from '../components/organisms/WebtoonCardList'
import Footer from '../components/organisms/Footer'
import Header from '../components/organisms/Header'

function HomePage() {
    return (
        <HomeLayout
            header={<Header />}
            footer={<Footer />}
            side={<WebtoonCardList />}
        >
            sad
        </HomeLayout>
    )
}

export default HomePage
