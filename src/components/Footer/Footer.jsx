import LogoSVG from '../../../public/svg/logoSVG';
import './Footer.scss';
import { FaTelegram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer'>
        <hr />
        <div className="logo">
          <LogoSVG/>
          <img src="/public/img/tron.webp" alt="" loading='lazy'/>
        </div>
         <div className='telegram'><FaTelegram/></div>
        <div className="policy">
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <p className='copyright'>&copy; All rights reserved by Tron mining</p>
    </div>
  )
}

export default Footer;