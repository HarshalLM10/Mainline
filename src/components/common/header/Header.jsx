import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'; // Import NavLink
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));

  console.log(user);

  const navigate = useNavigate()
  const logout = () =>{
    localStorage.clear('user')
    navigate('/login')
}

  return (
    <>
    <div className="backp">
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <NavLink to='/' exact activeClassName='active'>Home</NavLink> {/* Use NavLink */}
            </li>
            <li>
              <NavLink to='/courses' activeClassName='active'>All Courses</NavLink> {/* Use NavLink */}
            </li>
            <li>
              <NavLink to='/about' activeClassName='active'>About</NavLink> {/* Use NavLink */}
            </li>
            
            <li>
              <NavLink to='/pricing' activeClassName='active'>Pricing</NavLink>
            </li>

            <li>
              <NavLink to='/contact' activeClassName='active'>Contact</NavLink> {/* Use NavLink */}
            </li>
            {/* <li>
              <NavLink to='/login' activeClassName='active'>Login</NavLink> 
            </li>
            <li>
              <NavLink to='/signup' activeClassName='active'>Signup</NavLink> 
            </li> */}

            {user && <li onClick={logout}  activeClassName='active'>Logout</li>}
          </ul>
          <div className='start'>
            <div className='button'>GET STARTED NOW</div>
          </div>
        </nav>
      </header>
      </div>
    </>
  );
}

export default Header;
