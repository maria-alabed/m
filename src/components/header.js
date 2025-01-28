import React from "react";
const Header=()=>{
    return(
        <header className="header">
          <div className="logo">
            <img src="little lemon.png" className="logo-image"/>
            <h1 className="name">Little Lemon</h1>
          </div>
          <nav className="nav">
            <ul>
            <li><a href="/Home">Home</a></li>
            <li><a href="/Menu">Menu</a></li>
            <li><a href="/reservation">Book Table</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>
    )

}
export default Header;