import React, {useState} from 'react'
import Banner from '../Components/Banner'
import Collections from '../Components/Collections'
import Footer from '../Components/Footer'
import Header from '../Components/Header'


import {Gents} from '../data'


const Mainpage = () => {

const [mensCloth, setmensCloth] = useState(Gents)


    return (
    <>
    <Header/>
    <Banner/>
    <Collections Gentsfashion={mensCloth}/>
    <Footer/>
 
    </>
  )
}

export default Mainpage