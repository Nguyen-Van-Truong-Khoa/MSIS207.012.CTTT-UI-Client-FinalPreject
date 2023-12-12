import React from 'react'
import  Navbar  from '../../components/navbar/Navbar'
import { Header } from '../../components/header/Header'
import MailList from "../../components/mailList/MailList";
// import PropertyList from "../../components/propertyList/PropertyList";
import Featured from "../../components/featured/Featured";
// import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";

import "./home.css"

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Header/>
        <div className="homeContainer">
          <Featured/>

          <MailList/> 
          <Footer/>
        </div>
    </div>
  )
}
