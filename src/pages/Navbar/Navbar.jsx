import React, { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <p>Shopper</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <link to="/">Shop</link>
          {menu === "shop" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <link to="/">Men</link>
          {menu === "shop" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <link to="/">Women</link>
          {menu === "shop" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <link to="/">Kids</link>
          {menu === "shop" ? <hr /> : <></>}{" "}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
