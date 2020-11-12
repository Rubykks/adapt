import React from "react";
import Navbar from "../components/Navbar";

const Layout = (props) => {
  return (
    <div>
      {props.children}
      <Navbar />
    </div>
  );
};

export default Layout;
