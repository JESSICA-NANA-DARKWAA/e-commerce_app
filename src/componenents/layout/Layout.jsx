import React from "react";
import Navbar from "../navbars/Navbar";
import SecondaryNavbar from "../navbars/SecondaryNavbar";
import Footer from "../footer/Footer";
import "./Layout.css";

const Layout = ({ pageNumber, children }) => {
  return (
    <div>
      <Navbar />
      <SecondaryNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
