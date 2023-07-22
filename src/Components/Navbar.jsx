import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from "../images/logo.png"
import {links} from "../data"
import {GoThreeBars} from "react-icons/go"
import {AiOutlineClose} from "react-icons/ai"
import "./navbar.css"
// import "../index.css"

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)
  return (
    <nav>
      <div className="container nav__container">
        <Link to='/' className='logo' >
          <img src={Logo} alt="NAv logo" onClick={()=> setIsNavShowing(false)} />
        </Link>
        <ul className={`nav__links ${isNavShowing ? "show__nav":"hide__nav"}`}>
          {links.map(({name,path}, index )=>{
            return(
              <li key={path}>
                <NavLink to={path}  onClick={()=> setIsNavShowing(prev => !prev)} className={({isActive})=> isActive ? "nav__active": ""}>{name}</NavLink>
              </li>
            )
          })} 
        </ul>
        <button className='nav__toggle-btn' onClick={()=> setIsNavShowing(prev => !prev)}>
          {
            isNavShowing? <AiOutlineClose/> : <GoThreeBars/>
          }
        </button>
      </div>
    </nav>
  )
}

export default Navbar
