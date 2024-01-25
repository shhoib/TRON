import './Dash.scss';
import Coin from '../../../public/svg/TronCoin.json'
import profit from '../../../public/svg/profit.json'
import speed from '../../../public/svg/speed.json'
import target from '../../../public/svg/target.json'
import Lottie from 'react-lottie'
import { IoMdCopy } from "react-icons/io";


const Dash = () => {

  const coinOptions = {
    loop: true,
    autoplay: true,
    animationData: Coin,
  };
  const profitOptions = {
    loop: true,
    autoplay: true,
    animationData: profit,
  };
  const speedOptions = {
    loop: true,
    autoplay: true,
    animationData: speed,
  };
  const targetOptions = {
    loop: true,
    autoplay: true,
    animationData: target,
  };

  return (
    <div className='Dashboard'>

      <div className="dashBanner">
        <div className="balanceContainer">
          <div className="balanceTexts">
           <h6>My Balance</h6>
           <p>TRjCfyo8f6Kyw74Tksnf39uQAXfm48f </p>
           <h5>67.846497950 <span>TRX</span></h5>
          </div>
          <Lottie options={coinOptions} width={150}/>
         </div>
           <h2>My Referral Link</h2>
        
        <div className="inputContainer">
          <input type="text" value='http://tronpool.tech?ref=71246hTRXjb'/>
          <button>COPY <IoMdCopy className='copy'/></button>
        </div>
       </div>

        <div className="cards">
            <div className="dashCard">
              
            </div>
        </div>
    </div>
  )
}

export default Dash