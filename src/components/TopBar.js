import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./TopBar.css";
import logo from '../assets/logo.png';

const TopBar = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchPages = async () => {
      const res = await axios.get("https://mental-backend-8ia0.onrender.com/api/pages");
      setPages(res.data);
    };
    fetchPages();
  }, []);

  return (
    <nav className="topbar">
      <div className="logo">
  <img src={logo} alt="شعار منصة روح" className="topbar-logo" />
  <span>منصة روح</span>
</div>


      <div className="logo">
        <Link to="/">منصة روح للصحة النفسية </Link>
      </div>
      <ul className="menu">
        {pages.map((page) => (
          <li key={page._id} className="menu-item">
            <span>{page.title}</span>
            <ul className="dropdown">
              {page.subPages.map((sub, i) => (
                <li key={i}>
                  <Link to={`/page/${page._id}/${i}`}>{sub.title}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopBar;
