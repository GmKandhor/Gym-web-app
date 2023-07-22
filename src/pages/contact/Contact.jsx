import Header from '../../Components/Header'
import {IoLogoWhatsapp} from "react-icons/io"
import {MdEmail} from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import HeaderImage from "../../images/header_bg_2.jpg"
import "./contact.css"
const Contact = () => {
  return (
    <>
    <Header title="Contact Us" image={HeaderImage}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus odio itaque ad magni animi blanditiis quo ipsam eaque! Odio, doloribus.
    </Header>
    <section className='contact'>
      <div className="container contact__container">
        <div className="contact__wrapper">
        <a href="mailto:gnkandhro182@gmail.com" target='_blank'><MdEmail/></a>
        <a href="https://m.me/abdulghafoor.kandhro.790" target='_blank'><BsMessenger/></a>
        <a href="mailto:gnkandhro182@gmail.com" target='_blank'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact