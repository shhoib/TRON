import './Dash.scss';
import Coin from '../../../public/svg/TronCoin.json'
import profit from '../../../public/svg/profit.json'
import speed from '../../../public/svg/speed.json'
import target from '../../../public/svg/target.json'
import wallet from '../../../public/svg/wallet.json'
import withdraw from '../../../public/svg/withdraw.json'
import referral from '../../../public/svg/referral.json'
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
  const walletOptions = {
    loop: true,
    autoplay: true,
    animationData: wallet,
  };
  const withdrawOptions = {
    loop: true,
    autoplay: true,
    animationData: withdraw,
  };
  const referralOptions = {
    loop: true,
    autoplay: true,
    animationData: referral,
  };

  const cardData = [
    {
      cardTitle : 'Daily Profit',
      cardData: '75%',
      animation : <Lottie options={profitOptions} width={100}/>
    },
    {
      cardTitle : 'My Speed',
      cardData: '1.3 TRX/H',
      animation : <Lottie options={speedOptions} width={100}/>
    },
    {
      cardTitle : '48hrs Target',
      cardData: '1 TRON',
      animation : <Lottie options={targetOptions} width={100}/>
    },
  ]
  const card2Data = [
    {
      cardTitle : 'Deposits',
      number: 2,
      cardData: '40 TRON',
      animation : <Lottie options={walletOptions} width={100}/>
    },
    {
      cardTitle : 'Withdrawals',
      number: 1,
      cardData: '30 TRON',
      animation : <Lottie options={withdrawOptions} width={100}/>
    },
    {
      cardTitle : 'Referrals',
      number: 0,
      cardData: '0 TRON',
      animation : <Lottie options={referralOptions} width={100}/>
    },
   
  ]
  return (
    <div className='Dashboard'>

      <div className="dashBanner">
        <div className="balanceContainer">
          <div className="balanceTexts">
           <h6>My Balance</h6>
           <p>TRjCfyo8f6Kyw74Tksnf39uQAXfm48f </p>
           <h5>67.846497950 <span>TRX</span></h5>
          </div>
           <h4 className='animation'><Lottie options={coinOptions}/></h4>
         </div>
           <h2>My Referral Link</h2>
        
        <div className="inputContainer">
          <input type="text" value='http://tronpool.tech?ref=71246hTRXjb'/>
          <button>COPY <IoMdCopy className='copy'/></button>
        </div>
       </div>

        <div className="cards">

          <div className="cards1">
          { cardData.map((value,i)=>(
            <div className="dashCard" key={i}>
              <h4>{value.animation}</h4>
              <h5>{value.cardTitle}</h5>
              <p>{value.cardData}</p>
              <hr />
            </div>
           ))}
          </div>

           <div className="cards2">
          { card2Data.map((value,i)=>(
            <div className="dashCard" key={i}>
             {/* <div className="cards2Texts"> */}
               <h5 className='card2Title'>{value.cardTitle}</h5>
               <p>{value.cardData}</p>
               {/* <h4 className='cardNumber'>{value.number}</h4> */}
             {/* </div> */}
              <h4>{value.animation}</h4>
            </div>
           ))}
          </div>
        </div>
    </div>
  )
}

export default Dash;