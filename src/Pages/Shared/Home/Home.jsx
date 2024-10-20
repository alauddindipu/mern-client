import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import { NavLink } from "react-router-dom";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import Contact from "../Contact/Contact";
import HomeContentLoad from "../Navbar/HomeContentLoad/HomeContentLoad";
import HomeCategoryLoad from "../HomeCategoryLoad/HomeCategoryLoad";
import Search from "../../Search/Search";

export default function Home() {


  return (<div>
    <Navbar></Navbar>

    <div className="grid grid-cols-1 m min-h-screen">
      <div>
        <Banner></Banner>
      </div>
      {/* <Search></Search> */}
      <div>
        <HowItWorks></HowItWorks>
      </div>

      <div className="p-10"> <HomeCategoryLoad></HomeCategoryLoad></div>

      <HomeContentLoad></HomeContentLoad>
      {/* load all course */}

      <div>
        <Contact></Contact>
      </div>
    </div>

    <Footer></Footer>
  </div>);
}
