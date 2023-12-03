import React from "react";
import Navbar from "../Navbar/Navbar";
import logo from "../../assets/logo.png"

const Header = ({ showAs }) => {
  return (
    <header
      className={`${showAs === "Shadow" ? "header header--shadow" : "header"}`}
    >
      <img src={logo} alt="" className="header__logo" />
      <Navbar />
    </header>
  );
};

export default Header;
