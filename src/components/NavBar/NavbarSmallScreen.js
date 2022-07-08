import React, {useState} from 'react';
import './NavbarSmallScreen.css';
import menu from '../../images/menu.png';
import close from '../../images/close.png';
import profile from '../../images/account.png';

const NavbarSmallScreen = () => {
    

    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
      }

  return (
    <div className='navbar-small-screen'>
            <button className='small-screen-nav-menu' onClick={handleToggle}>
                <img className='menu-img' src={menu} alt="" />
            </button>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                <button className='navbtn-inside-menu'  onClick={handleToggle}>
                    <img className='menu-close-img' src={close} alt="" />
                </button>
                <img className='profile-photo' src={profile} alt="" />
                <a className='navbar-components components-inside-menu' href="/edit-profile">Edit Profile</a>
                <a className='navbar-components components-inside-menu' href="/">Home</a>
                <a className='navbar-components components-inside-menu' href="/about-us">About Us</a>
                <a className='navbar-components components-inside-menu' href="/add-books">Add Books</a>
                <a className='navbar-components components-inside-menu' href="/all-books">All  Books</a>
                <a className='navbar-components components-inside-menu' href="/messages">Messages</a>
                <a className='navbar-components components-inside-menu' href="/notifications">Notifications</a>
                <a className='navbar-components components-inside-menu' href="/community">Community</a>
                <a className='navbar-components components-inside-menu' href="/settings">Setting</a>
            </ul>
        </div>
  )
}

export default NavbarSmallScreen