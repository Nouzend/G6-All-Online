import React from "react"
import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./Slider"
import Navbar from "../../Metha/sup-compo/navbar/navbarMain"
import Tipchumporn from "../../Availability/pages/Home"

const Home = ({t,i18n}) => {


  return (
    <>
        <Navbar/>
      <section className='home'>
        <div className='container d_flex'>
          <Categories t={t} i18n={i18n} />
          <SliderHome />
          <Tipchumporn/>
        </div>
      </section>
    </>
  )
}

export default Home
