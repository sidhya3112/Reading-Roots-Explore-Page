import React, {useState} from 'react';
import './Navbar.css'
import logo from '../../images/logo.png';
import messages from '../../images/envelope.png';
import notification from '../../images/bell.png';
import community from '../../images/customer.png';
import downArrow from '../../images/down-arrow.png';
import profile from '../../images/profile.png';

const Navbar = (props) => {
    const [profilePopUp, setProfilePopUp] = useState(false);
    const [notificationPopUp, setNotificationPopUp] = useState(false);

    const notifications = ['You have a new notification. Check out!', 'New books available. Go check them out now!',]
    
    const displayNotification = notifications.map((notification)=>{
      return <li className='notification-list-items'>{notification}</li>;
    });

  return (
    <div className='navbar'>
        <div className='navbar-container'>
            <div className='logo'>
                <img className='logo-img' src={logo} alt="" />
                
                <a className='logo-text' href='/'>
                    <div className='logo-main-text'>
                        <li className='company-name'>ReadingRoots</li>
                        <li className='company-tagline'>Read. Share. Grow.</li>
                    </div>
                    <li className='beta-version'>Beta</li>
                </a>
            </div>

            <ul className='navbar-component-list'>

                <a className='navbar-components' href="/">Home</a>

                <a className='navbar-components' href="/about-us">About Us</a>

                <a className='navbar-components' href="/add-books">Add Books</a>

                <a className='navbar-components' href="/all-books">All Books</a>

                <a className='navbar-icons' href="/messages">
                    <img className='icons' src={messages} alt="" />
                </a>


                <div className='popup-menus'>
                    <a className='navbar-icons' onClick={() => setNotificationPopUp(!notificationPopUp)}>
                        <img className='icons' src={notification} alt="" />
                    </a>
                    {
                        notificationPopUp && (
                            <ul className='pop-up notification'>
                                <li className='menu-heading'>Your Notifications!</li>
                                {displayNotification}
                            </ul>
                        )
                    }
                </div>


                <a className='navbar-icons' href="/community">
                    <img className='icons' src={community} alt="" />
                </a>


                <div className='popup-menus'>
                    <a className='navbar-profile-icon' onClick={() => setProfilePopUp(!profilePopUp)}>
                        {props.userName}
                        {
                            profilePopUp 
                            ? (<img className='down-arrow' style={{transform: 'rotateX(180deg)'}} src={downArrow} alt="" />)
                            : (<img className='down-arrow' src={downArrow} alt="" />)
                        }
                        
                    </a>
                    {
                    profilePopUp && (
                        <div className='pop-up  profile'>
                            <li className='profile-list-items edit-profile'>
                                <img className='profile-photo' src={profile} alt="" />
                                Edit Profile
                            </li>
                            <li className='line-break'></li>
                            <li className='profile-list-items'>Settings</li>
                        </div>
                       )
                    }
                </div>

            </ul>
        </div>
    </div>
  )
}

export default Navbar