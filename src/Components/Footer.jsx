import { Link } from "react-router-dom"
import Logo from "../images/logo.png"
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"





const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
           <article>
           <Link to="/" className="logo">
                <img src={Logo} alt="Footer logo" />
            </Link>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, a! Illum quasi quia soluta, provident illo delectus eum perspiciatis veniam!</p>
            <div className="footer__socials">
                <a href="https://linkedin.com" target="_blank" rel="noreffer noopener"><FaLinkedin/></a>
                <a href="https://facebook.com" target="_blank" rel="noreffer noopener"><FaFacebookF/></a>
                <a href="https://twitter.com" target="_blank" rel="noreffer noopener"><FaTwitter/></a>
                <a href="https://instagram.com" target="_blank" rel="noreffer noopener"><FaInstagram/></a>
            </div>
           </article>
           <article>
            <h4>Permalinks</h4>
            <Link to='/about'>About</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/plans'>Plans</Link>
            <Link to='/traineers'>Traineers</Link>
            <Link to='/contact'>Contact</Link>
           </article>
           <article>
            <h4>Insights</h4>
            <Link to='/s'>Blog</Link>
            <Link to='/s'>Gallery</Link>
            <Link to='/s'>Case Studies</Link>
            <Link to='/s'>Communities</Link>
            <Link to='/s'>FAQs</Link>
           </article>
           <article>
            <h4>Get In Touch</h4>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/s'>Support</Link>
           
           </article>
        </div>
        <div className="footer__copyright">
            <small>2023 Ab Ghafoor &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer