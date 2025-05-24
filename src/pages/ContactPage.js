import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2>📞 تواصل معنا اليوم</h2>
        <p>
          لأي استفسارات أو دعم، لا تتردد في التواصل معنا. نحن هنا لمساعدتك في رحلتك نحو الصحة النفسية.
        </p>

        <div className="contact-info">
          <p><strong>استفسار:</strong> 1234567890</p>
          <p><strong>دعم:</strong> contact@rooh.com</p>
        </div>

        <form className="contact-form">
          <label>اسمك الكامل</label>
          <input type="text" placeholder="أدخل اسمك هنا" />

          <label>البريد الإلكتروني*</label>
          <input type="email" placeholder="أدخل بريدك الإلكتروني" required />

          <label>رسالتك*</label>
          <textarea rows="4" placeholder="اكتب رسالتك هنا" required></textarea>

          <button type="submit">📨 إرسال</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
