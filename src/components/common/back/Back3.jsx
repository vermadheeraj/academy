import React from 'react'
import { useLocation } from "react-router-dom"


const Back3 = ({ title }) => {
    const location = useLocation()
  
    return (
      <>
        <section className='back3'>
          <h2>Home / {location.pathname.split("/")[1]}</h2>
          <h1>Daily Blog</h1>
        </section>
        <div className='margin'></div>
      </>
    )
  }


export default Back3
