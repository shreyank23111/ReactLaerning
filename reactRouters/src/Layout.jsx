import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import {Outlet} from "react-router-dom"
import React from 'react'

function Layout(){
  return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout