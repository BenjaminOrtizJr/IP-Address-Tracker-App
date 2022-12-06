import React from 'react'
import './Header.css'
import ArrowSign from '../../assets/images/icon-arrow.svg'

const Header = () => {
  return (
      <header className="header__wrapper">
          <div className="header__background">
              <div className="header__title">
                  <h1>IP Address Tracker</h1>
              </div>
              <form className="header__form">
                  <input type="text" placeholder="Search for any IP address or domain"/>
                  <button type="submit"><img src={ArrowSign} style={{background: "black"}} alt="arrow for button"/></button>
              </form>
          </div>
      </header>
  )
}

export default Header