import React from 'react'
import  Navbar  from '../../components/navbar/Navbar'
import  Header  from '../../components/header/Header'
import MailList from "../../components/mailList/MailList";
import Trenddestinate from "../../components/trenddestinate/Trenddestinate";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";

import "./home.css"

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Header/>
        <div className="homeContainer">
          <h1 className="homeTitle">Trending destination</h1>
          <Trenddestinate/>
          <h1 className="homeTitle">Homes guests love</h1>
          <FeaturedProperties/>
          <MailList/> 
          <Footer/>
        </div>
    </div>
  )
}
