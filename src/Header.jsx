import React from "react";
import "./Header.css"
function Header() {
  return (
    <div className="Header">
        <div className="logo1">
            <h5>Disconnect </h5>
            <h5>Solution</h5>
        </div>
      <div className="links">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Blogs</a>
        <a href="">Contact</a>  
      </div>
      <div className="logo2">
        <button id="btn_1">Log in</button>
      </div>
    </div>
  );
}
export default Header;
