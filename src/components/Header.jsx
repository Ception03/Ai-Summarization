import React from 'react'
import "./Header.scss"
import logo from "../assets/logo.svg"


function Header() {
  return (
    <>

    <div className="wrapper">
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
                <h4>Summarize</h4>
            </div>
            <button className='git-btn'>Github</button>
        </div>
    </div>

    </>
  )
}

export default Header