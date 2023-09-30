import React from 'react'
import Home from './home/home'
import Header from './header/header'
import Footer from './footer/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
        
        <Header/>
        {/* <Home/> */}
        <Outlet/>
        <Footer/>
        </>
        
    )
}

export default Layout
