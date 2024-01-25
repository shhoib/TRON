import './Navbar.scss';
import {useNavigate} from 'react-router-dom'
import { CgMenuLeftAlt } from "react-icons/cg";
import { useState } from 'react';


const Navbar = () => {

    const navigate = useNavigate();

    const [menuOpened, setMenuOpened] = useState(false);

    const handleNavigate = (e)=>{
        navigate('/' + e.target.getAttribute('name'));
    }

    const handleMenuClick=()=>{
        setMenuOpened(!menuOpened);
    }

  return (
    <nav>
        <div className="imageContainer">
            <img src="/img/tronLogo.webp" alt="" loading='lazy'/>
            <img src="/img/tron.webp" alt="" loading='lazy' className='TronImg'/>
        </div>

        <div className="LI">
            <p name='dashboard' onClick={handleNavigate}>Dashboard</p>
            <p name='deposit' onClick={handleNavigate}>Deposit</p>
            <p name='withdraw' onClick={handleNavigate}>Withdraw</p>
            <p name='referral' onClick={handleNavigate}>Referral</p>
            <p className='Logout'>Logout</p>
        </div>
        <h6 onClick={handleMenuClick}><CgMenuLeftAlt/></h6>
        {menuOpened &&
        <div className="menuLists">
            <p name='dashboard' onClick={handleNavigate}>Dashboard</p>
            <p name='deposit' onClick={handleNavigate}>Deposit</p>
            <p name='withdraw' onClick={handleNavigate}>Withdraw</p>
            <p name='referral' onClick={handleNavigate}>Referral</p>
            <p className='Logout'>Logout</p>
        </div>
        }
    </nav>
  )
}

export default Navbar