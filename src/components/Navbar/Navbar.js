import React, { useState } from "react";
import CartWidgets from "../CartWidgets/CartWidgets";
import { Link, NavLink } from "react-router-dom";
import { getCategories } from "../../utils/firebaseFetching";
import { useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleLeave = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <nav className="header__nav">
      <Link to="/" className="nav__link">
        Inicio
      </Link>
      <NavLink to="/shop" className="nav__link">
        Productos
      </NavLink>

      <NavLink to="/about" className="nav__link">
        Contacto
      </NavLink>
      <CartWidgets />
    </nav>
  );
};

export default Navbar;
