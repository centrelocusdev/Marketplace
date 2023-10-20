import React from 'react'
import Nav from './nav';
import Footer from './footer';
const layout = ({children}) => {
  return (
    <>
    <Nav/>
    <main>{children}</main>
    <Footer/>
    </>
    
  )
}

export default layout;