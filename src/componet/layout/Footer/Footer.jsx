import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>About Us</h3>
        <p>Bawa ji Buhat Tight</p>
      </div>
      <div className="footer-column">
        <h3>Contact Us</h3>
        <p>Email: example@example.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <div className="footer-column">
        <h3>Follow Us</h3>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} M.S.T. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
