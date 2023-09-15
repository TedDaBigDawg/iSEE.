import React from 'react'
import "./navbar.css"
import notificationIcon from "../../Icons/notification.png"
import profileimage from "../../Images/luffy2.jpg"
import searchIcon from "../../Icons/search.png"
export default function Navbar() {
  return (
    <div className='MainNavbar'>
      <div className='NavitemContainer'>  
          <div className='searchItems'>
                    <img src={`${searchIcon}`} className="searchIcon" alt='' />
                    <input type="search" className='searchbar' placeholder='Search for movie...'/>
          </div>
          <div className='profileContainer'>
            <img src={`${notificationIcon}`} className='notificationIcon' alt='' />
            <img src={`${profileimage}`} className='profileimage' alt='' />
            <p className='profilename'>Teddy.O</p>

          </div>
      </div>
    </div>
  )
}
