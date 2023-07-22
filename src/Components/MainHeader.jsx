import React from 'react'
import '../pages/home/home.css'
import { Link } from 'react-router-dom'
import Image from "../images/main_header.png"
const MainHeader = () => {
  return (
    <header className='main__header'>
     <div className="container main__header-container">
      <div className="main__header-left">
        <h4>#100daysofworkout</h4>
        <h1>Join The Legends Of Fitness World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nam quo alias tempora! Quas, aperiam.</p>
          <Link to="/plans" className='btn lg'>Get Started</Link>
      </div>
      <div className="main__header-right">
        <div className="main__header-cricle"></div>
        <div className="main__header-image">

          <img src={Image} alt="" />
        </div>
      </div>
     </div>
    </header>
  )
}

export default MainHeader
