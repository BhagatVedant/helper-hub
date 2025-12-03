import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer footer-row">
      <div className="container footer-inner">
        <div className="copyright">© {new Date().getFullYear()} Helpers Hub</div>
        <div className="socials">
          <button className="icon-btn" aria-label="Facebook"><FaFacebookF /></button>
          <button className="icon-btn" aria-label="Twitter"><FaTwitter /></button>
          <button className="icon-btn" aria-label="Instagram"><FaInstagram /></button>
        </div>
      </div>
    </footer>
  )
}
