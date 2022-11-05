import React from "react";
import "./Footer.css";
import ZuriLogo from "../../assets/svgs/zuri_logo.svg";
import FourteenG from "../../assets/svgs/fourteeng.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <img src={ZuriLogo} alt="zuri-intership-logo" />
        </div>
        <p>HNG Internship 9 Frontend Task</p>
        <div>
          <img src={FourteenG} alt="14g-pic" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
