import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import Contact from "../Contact/Contact";
import HomeContentLoad from "../HomeContentLoad/HomeContentLoad";
import HomeCategoryLoad from "../HomeCategoryLoad/HomeCategoryLoad";
import Search from "../../Search/Search";
import Timeline from "../Timeline/Timeline";
import HeroSecond from "../HeroSecond/HeroSecond";
import Faq from "../../Faq/Faq";
import AddProductUsingReactState from "../../dashboardPages/AddProductUsingReactState";

export default function Home() {


  return (<div>

    <div className="grid grid-cols-1 m min-h-screen">
      <div>
        <Banner></Banner>
      </div>
      <div>
        {/* <AddProductUsingReactState></AddProductUsingReactState> */}
      </div>
      <div>
        <HowItWorks></HowItWorks>
      </div>

      <div className="p-10"> <HomeCategoryLoad></HomeCategoryLoad></div>
      <div className="p-20">
        <HeroSecond></HeroSecond>
      </div>

      <HomeContentLoad></HomeContentLoad>
      {/* load all course */}

      <div className="p-20">
        <span className="text-5xl flex justify-center">Offer Time</span>
        <div className="p-10"><Timeline></Timeline></div>
      </div>


      <div>
        <Contact></Contact>
      </div>
      <div className="p-20">
        <Faq></Faq>
      </div>
    </div>

  </div>);
}
