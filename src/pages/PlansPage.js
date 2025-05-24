// src/pages/PlansPage.js
import React from "react";

const PlansPage = () => {
  return (
    <div style={{ padding: "40px 20px", maxWidth: 800, margin: "auto" }}>
      <h2 style={{ color: "#1e3a8a", marginBottom: 20 }}>خطط الدفع والاستشارات</h2>

      <div style={{ background: "#f1f5f9", padding: 20, borderRadius: 12, marginBottom: 20 }}>
        <h3>🟢 استشارة فردية</h3>
        <p>مدة: 30 دقيقة</p>
        <p>السعر: 100 ل.س</p>
      </div>

      <div style={{ background: "#f1f5f9", padding: 20, borderRadius: 12, marginBottom: 20 }}>
        <h3>🟣 جلسة جماعية</h3>
        <p>مدة: 60 دقيقة</p>
        <p>السعر: 150 ل.س</p>
      </div>

      <div style={{ background: "#f1f5f9", padding: 20, borderRadius: 12 }}>
        <h3>⭐ باقة شهرية</h3>
        <p>4 جلسات فردية + دعم أسبوعي</p>
        <p>السعر: 350 ل.س</p>
      </div>
    </div>
  );
};

export default PlansPage;
