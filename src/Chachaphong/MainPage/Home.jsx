import React from "react"
import "./Home.css"
import Navbar from "../../Metha/sup-compo/navbar/navbarMain"
import Tipchumporn from "../../Availability/pages/Home"

const Home = ({t,i18n}) => {


  return (
    <>
        <Navbar t={t} i18n={i18n}/>
      <section className='home'>
        <div className='container d_flex'>
          <Tipchumporn/>
        </div>
      </section>
    </>
  )
}

export default Home
