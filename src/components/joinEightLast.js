import React from "react";
import "./styles/joinEightLast.css";

const Footer = () => {
  return (
    <footer className="FOOter">
      <div className="footer-links">
        <ul className="footer-column">
          <li><a href="#home">Home</a></li>
          <li><a href="#support">Support articles</a></li>
          <li><a href="#guidelines">Medical guidelines</a></li>
        </ul>
        <ul className="Footer-column">
          <li><a href="#terms">Terms of use</a></li>
          <li><a href="#privacy">Privacy policy</a></li>
          <li><a href="#contact">Contact us</a></li>
        </ul>
      <div className="footer-info">
        <p className="NEw">
          <strong>NMDP</strong>℠ is entrusted and under contract to operate the federally authorized C.W. Bill Young Cell Transplantation Program.
        </p>
        <p>© 2024 National Marrow Donor Program. All Rights Reserved.</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
