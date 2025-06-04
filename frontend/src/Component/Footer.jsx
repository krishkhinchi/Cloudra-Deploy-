import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col about">
          <h4>What is Cloudra?</h4>
          <p>
            Cloudra is a cloud storage services based on Blockchain and Web3 technology,
            designed to help teams collaborate and file sharing in a completely private like never before.
          </p>
          <div className="footer-badges">
            <img src="/badges/gdpr.svg" alt="GDPR" />
            <img src="/badges/norton.svg" alt="Norton" />
            <img src="/badges/stripe.svg" alt="Stripe" />
            <img src="/badges/paypal.svg" alt="PayPal" />
          </div>
        </div>

        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li>Features</li>
            <li>Solutions</li>
            <li>Pricing</li>
            <li>Token</li>
            <li>Security</li>
            <li>Comparison</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Resource</h4>
          <ul>
            <li>Whitepaper</li>
            <li>Developer</li>
            <li>Brand Kits</li>
            <li>Compliance</li>
            <li>Privacy Policy</li>
            <li>Terms of service</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Community</h4>
          <ul>
            <li>Guide</li>
            <li>Blog</li>
            <li>FAQs</li>
            <li>Forum</li>
            <li>Help center</li>
            <li>Support desk</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Cloudra. Powered by</p>
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
