import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Router, Routes } from 'react-router-dom'
import { Layout } from 'antd'
import Navbar from './components/Navbar'
import Shop from './pages/Shop'
import MainPage from './components/MainPage'
import Foooter from './components/Footer'
import Productview from './pages/Productview'

const { Footer, Header, Content } = Layout

function App() {

  return (
    <div className='container font-farsi'>
      <Layout className='bg-white'>
        <header className='flex  justify-center'>
          <Navbar />
        </header>
        <Content className='bg-white'>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<Productview />} />
            <Route path="/shopingcart" />
            <Route path="/checkout" />
          </Routes>
        </Content>
        
        <Footer className='mt-24 px-0!'>
          <Foooter />
        </Footer>
      </Layout>

    </div>
  )
}

export default App
