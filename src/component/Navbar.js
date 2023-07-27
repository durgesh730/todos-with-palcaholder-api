import React, { useState } from 'react'
import "./navbar.css"
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsArrowReturnLeft, BsFillPersonFill, BsBoxArrowRight } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md'

const Navbar = () => {
  var [isShown] = useState(false);
  const [dropdown, setdropdown] = useState(false);

  const handleClick = () => {
    if (isShown === false) {
      document.getElementById('SideNav').style.width = "170px"
      isShown = true;
    } else {
      document.getElementById('SideNav').style.width = "0px"
      isShown = false;
    }
  };


  function handledropdown() {
    if (dropdown === false) {
      document.getElementById("profileOption").style.height = "fit-content";
      setdropdown(true);
    } else {
      document.getElementById("profileOption").style.height = "0px";
      setdropdown(false);
    }
  }

  const CloseNav = () => {
    document.getElementById('SideNav').style.width = "0px"
  }

  const handleLogout = () => {
  }

  return (
    <>
      <div className='Navbar'>
        <div className='container'>
          <nav>
            <div className='logo'><Link to="/" >ArcTech</Link></div>
            <div className='RightNav'>
              <Link to='/login' className='logintab' >Login</Link>
              <Link to='/signup' className='signuptab' > Signup <BsBoxArrowRight /> </Link>
              <span className='Bars' onClick={handleClick}><FaBars /></span>
            </div>
          </nav>
        </div>

        <div className="profile-options" id="profileOption">
          <ul>
            <li>
              <Link style={{ cursor: "pointer" }} to="/profiledetails"  >My Profile</Link>
            </li>
            <li >
              <Link onClick={handleLogout} id='logout' >Logout</Link>
            </li>
          </ul>
        </div>

        <div className='Sidenav' id='SideNav'>
          <span onClick={CloseNav} id="Close" style={{ fontSize: "1.5rem" }} ><BsArrowReturnLeft /></span>
          <Link to='/signup'><BsFillPersonFill /><small >Durgesh</small> </Link>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
          <Link onClick={handleLogout} id='logout' >Logout</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
