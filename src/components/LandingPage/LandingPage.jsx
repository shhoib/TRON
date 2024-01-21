import './LandingPage.scss';
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";
import { IoLockClosedOutline } from "react-icons/io5";
import { PiUsersLight } from "react-icons/pi";



const LandingPage = () => {

  const cardDatas = [
    {
      icon : <HiGlobeAsiaAustralia/>,
      text : 'Globally known for our transparency and at Tron Pool you can monitor and follow all deposits and payouts of any user in real-time at any time'
    },
    {
      icon : <IoLockClosedOutline/>,
      text : 'We use highly secured software to provide maximum security for your asset'
    },
    {
      icon : <BsCreditCard2FrontFill/>,
      text : 'All payouts/payments are automated.We use fast and fault-tolerant server soulutions.There are no delay in our system'
    },
    {
      icon : <PiUsersLight/>,
      text : `Referral program earn a high 25% commission instanlty paid to your wallet from every referral's deposit`
    },
  ]
  return (
    <div>
      <div className="landingBanner">
        <div className='textContainer'>     
          <h5>Welcome To</h5>
          <h3>Tron Pool</h3>
          <h6>Our cryptomining allows you to increase your earnings within 48hrs by a percentage increase of 150.
            Paste your Tron wallet and be ready to go.</h6>
        </div>

        <div className="inputGroup">
            <input type="text" placeholder='Your Tron Wallet Address'/>
            <button>ENTER</button>
         </div>
      </div>

      <div className="cardContainer">
        {cardDatas.map((card,i)=>(
          <div className="card" key={i}>
            <h6>{card.icon}</h6>
            <p>{card.text}</p>
          </div>

        ))
        }
      </div>

    </div>
  )
}

export default LandingPage