// frontend/src/components/Footer.js

/**
 * @fileOverview Component Footer hiển thị chân trang (phiên bản được thiết kế lại).
 */

import React from 'react';
import '../index.css'; // Đảm bảo CSS được cập nhật tương ứng
import { FaGoogle, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Cột Về chúng tôi & Liên hệ */}
        <div className="footer-col footer-about-contact">
          <h3>Về Nhóm17 Shop</h3>
          <p className="about-text">
            Mang thiên nhiên vào không gian sống của bạn với những loại cây cảnh độc đáo và chất lượng.
          </p>
          <div className="contact-details">
            <p><FaMapMarkerAlt /> 180 Cao Lỗ, P4, Q8, TP.HCM</p>
            <p><FaEnvelope /> nhom17@gmail.com</p>
            <p><FaPhoneAlt /> 0335106271</p>
          </div>
          
        </div>

        {/* Cột Hỗ trợ khách hàng */}
        <div className="footer-col">
          <h3>Hỗ trợ</h3>
          <ul>
            <li><a href="/contact">Liên hệ</a></li>
            <li><a href="/faq">Câu hỏi thường gặp</a></li>
            <li><a href="/shipping">Chính sách giao hàng</a></li>
            <li><a href="/returns">Chính sách đổi trả</a></li>
          </ul>
        </div>

        {/* Cột Tài khoản */}
        <div className="footer-col">
          <h3>Tài khoản</h3>
          <ul>
            <li><a href="/user">Tài khoản của tôi</a></li>
            <li><a href="/user/orders">Lịch sử đơn hàng</a></li>
            <li><a href="/cart">Giỏ hàng</a></li>
            <li><a href="/wishlist">Danh sách yêu thích</a></li>
          </ul>
        </div>

        {/* Cột Đăng ký nhận tin (Tùy chọn) */}
        <div className="footer-col newsletter-col">
          <h3>Đăng ký nhận tin</h3>
          <p>Nhận thông tin về sản phẩm mới và ưu đãi đặc biệt.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Nhập email của bạn" aria-label="Email for newsletter"/>
            <button type="submit">Đăng ký</button>
          </form>
        </div>
      </div>

      
    </footer>
  );
}

export default Footer;
