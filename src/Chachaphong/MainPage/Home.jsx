import React from "react"
import "./Home.css"
import Navbar from "../../Metha/sup-compo/navbar/navbarMain"
import Tipchumporn from "../../Availability/pages/Home"
import SliderHome from "./Slider"
import Categories from "./Categories"

const Home = ({t,i18n}) => {


  return (
    <>
        <Navbar t={t} i18n={i18n}/>
      <section className='home'>
        <div className='container d_flex'>
        <Categories t={t} i18n={i18n} />
          <SliderHome />
        </div>
      </section>
    </>
  )
}

export default Home
