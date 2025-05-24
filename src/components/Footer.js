import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>© 2025 منصة روح للصحة النفسية. جميع الحقوق محفوظة.</p>
      <ul className="footer-links">
        <li><Link to="/about">عنّا</Link></li>
        <li><Link to="/terms">الشروط والأحكام</Link></li>
        <li><Link to="/privacy">سياسة الخصوصية</Link></li>
        <li><Link to="/contact">تواصل معنا</Link></li>
      </ul>
    </footer>
  );
};

export default Footer;
