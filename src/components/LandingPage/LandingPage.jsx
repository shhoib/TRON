import './LandingPage.scss';
import globe from '../../../public/svg/globe.json'
import lock from '../../../public/svg/lock.json'
import card from '../../../public/svg/card.json'
import peoples from '../../../public/svg/peoples.json'
import Lottie from 'react-lottie'


const LandingPage = () => {

  const globeOptions = {
    loop: true,
    autoplay: true,
    animationData: globe,
  };
  const lockOptions = {
    loop: true,
    autoplay: true,
    animationData: lock,
  };
  const cardOptions = {
    loop: true,
    autoplay: true,
    animationData: card,
  };
  const peoplesOptions = {
    loop: true,
    autoplay: true,
    animationData: peoples,
  };

  const cardData = [
    {
      animation : <Lottie options={globeOptions} height={100} width={100} />,
      text : ' Globally known for our transperancy and at Tron pool you can monitor and follow all deposits ans payouts of any user i real time at any time'
    },
    {
      animation : <Lottie options={lockOptions} height={100} width={100} />,
      text : ' We use highly secured software to provide maximum security for your asset.'
    },
    {
      animation : <Lottie options={cardOptions} height={100} width={100} />,
      text : 'All Payouts/Payments are automated.We use fast and fault-tolerant server solutions. There are no delays in our system.'
    },
    {
      animation : <Lottie options={peoplesOptions} height={100} width={100} />,
      text : `Referral program Earn a high 25% commission instantly paid to your wallet from every referral's deposits`
    },
  ]
  return (
    <div>
     <div className="landingBanner">
       <div className="bannerTexts">
        <h3>Welcome to <span>TronPanda</span></h3>
        <p>Our crypto mining allos you to increase your earnings within 48hrs by a percentage increase of 150.Paste your Tron wallet and ready to go.</p>
       </div>
       <div className="inputContainer">
       <input type="text" placeholder='Enter Your Tron Wallet Address' />
       <button>ENTER</button>
       </div>
     </div>

    <div className="cards">
      {
        cardData.map((card,i)=>(
          <div className="card" key={i}>
            {card.animation}
            <p>{card.text}</p>
          </div>
        ))
      }       
      </div>

    </div>
  )
}

export default LandingPage