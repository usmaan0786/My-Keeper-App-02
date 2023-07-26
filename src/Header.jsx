import React from "react";
import logo from "./Images/book.png"
function Header() {
  return (
    <>
      <header>
      <img src={logo} alt="logo"/>
        <h1>My keeper App</h1>
      </header>
    </>
  );
}

export default Header;
