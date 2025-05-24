import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import CountUp from 'react-countup';
import mentalHealthImage from '../assets/mental-health.avif';



const Home = () => {
  const [homePages, setHomePages] = useState([]);

  useEffect(() => {
    const fetchHomePages = async () => {
      const res = await axios.get("https://mental-backend-8ia0.onrender.com/api/pages");
      const filtered = res.data
        .filter(p => p.showOnHome)
        .sort((a, b) => a.order - b.order);
      setHomePages(filtered);
    };
    fetchHomePages();
  }, []);

  return (
    <div className="home-container">

      {/* القسم الترحيبي */}

     

      <header className="hero-section">
        <div className="hero-content">
          <h1>مرحبًا بك في منصة الصحة النفسية</h1>
          <p>اكتشف خدمات الدعم النفسي والعلاج السلوكي التي نقدمها</p>
          <Link to="/plans" className="cta-button">ابدأ استشارتك الآن</Link>
        </div>
      </header>

      <section className="about-section">
  <div className="about-text">
    <h2>منصة روح للصحة النفسية</h2>
    <p>
      نحن نعتني بصحة مرضانا ونقدم أفضل طرق العلاج النفسي بسرية تامة.
    </p>
    <div className="stats">
  <div className="stat">
    <h3><CountUp end={150} duration={2} suffix="+" /></h3>
    <p>جلسة علاجية</p>
  </div>
  <div className="stat">
    <h3><CountUp end={15} duration={2} /></h3>
    <p>أخصائي نفسي</p>
  </div>
</div>
  </div>
  <div className="about-image">
  <img
    src={mentalHealthImage}
    alt="MENTAL HEALTH MATTERS"
  />
</div>
</section>


      {/* بطاقات الأقسام */}
      <section className="sections-grid">
        {homePages.map((page) => (
          <Link key={page._id} to={`/page/${page._id}/0`} className="section-card">
            <img
              src={`http://localhost:5000${page.imageUrl}`}
              alt={page.title}
            />
            <h3>{page.title}</h3>
            <p>{page.subPages?.[0]?.content?.slice(0, 80) || "بدون وصف"}</p>
          </Link>
        ))}
      </section>

    </div>
  );
};

export default Home;
