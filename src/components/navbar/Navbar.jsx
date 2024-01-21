import { useState } from "react";
import "./Navbar.scss";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import {motion} from 'framer-motion'
import {useNavigate} from 'react-router-dom'


const Navbar = () => {

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const navigate = useNavigate();

  const handleMenuClicked=()=>{
    setIsMenuOpened(!isMenuOpened)
  }

  const handleNavigate =(e)=>{
    setIsMenuOpened(!isMenuOpened)
    const routeName = e.target.getAttribute('value');
    navigate(`${routeName}`)
  }

  return (
    <nav>
      <div className="logos">
        <img src="/img/tronLogo.webp" alt="tron"  loading="lazy" />
        <img className="textImg" src="/img/tron3.png" alt=""  loading="lazy"/>
      </div>
       { !isMenuOpened? <FiMenu className="menuIcon" onClick={handleMenuClicked}/> : <RxCross2 onClick={handleMenuClicked} className="menuIcon"/> }
        { isMenuOpened && 
        <motion.div initial={{x:'100px'}} whileInView={{x:'0'}} transition={{duration:.5}} className="menu">
        <div className="menuLists" value='dashboard' onClick={handleNavigate}>Dashboard</div>
        <div className="menuLists" value='Deposit' onClick={handleNavigate}>Deposit</div>
        <div className="menuLists" value='withdraw' onClick={handleNavigate}>Withdraw</div>
        <div className="menuLists" value='referral' onClick={handleNavigate}>Referral</div>
        <div className="logout">Logout</div>
       </motion.div>
      }
    </nav>
  );
};

export default Navbar;
