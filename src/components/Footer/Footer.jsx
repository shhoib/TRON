import './Footer.scss'
import { FaTelegram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
       <div className="logo">
         <img src="/public/img/tronLogo.webp" alt="" loading='lazy'/>
         <img src="/public/img/tron3.png" alt="" loading='lazy'/>
       </div>
       <hr />

       <FaTelegram className='telegram'/>

       <div className="policy">
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
       </div>

       <hr className='lastHR'/>

       <p className='copyright'>{'\u00A9'} All rights reserved by Tron mining</p>


    </footer>
  )
}

export default Footer