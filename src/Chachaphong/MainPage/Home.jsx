import React from "react"
import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./Slider"
import Navbar from "../../Metha/sup-compo/navbar/navbarMain"

const Home = () => {
  return (
    <>
        <Navbar/>
      <section className='home'>
        <div className='container d_flex'>
          <Categories />
          <SliderHome />
        </div>
      </section>
    </>
  )
}

export default Home
