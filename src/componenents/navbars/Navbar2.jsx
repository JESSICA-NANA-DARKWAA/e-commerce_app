import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import "./Navbar2.css";

const Navbar = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [cartItemCount, setCartItemCount] = useState(2); // Example cart item count

  return (
    <div>
      <nav className="navbar">
        <span className="logo">LOGO</span>

        <span>
          username
          <img
            src="https://images.unsplash.com/photo-1613005798967-632017e477c8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="profile-image"
          />
        </span>
      </nav>
      {children}
    </div>
  );
};

export default Navbar;
