import React from 'react'
import './Navbar.scss'
import '../App.scss'
import HeartIcon from './HeartIcon'
import Searchbar from "./Searchbar";

const Navbar = () => {

    return (
        <nav className='navbar'>
            <div className="container">
                <div className="logo-container">
                    <img className='logo' src="/logo.svg" alt="logo" />
                </div>
                <div className="hidden-on-mobile">
                <Searchbar />
                </div>
                <HeartIcon />
            </div>
        </nav>
  )
}

export default Navbar