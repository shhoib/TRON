import './Dash.scss';
import { IoIosCopy } from "react-icons/io";
import { useState } from "react";



const Dash = () => {

  const [referralCode, setReferralCode] = useState("https://tronpool.tech?referral=712846588");
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    const textField = document.createElement("textarea");
    textField.innerText = referralCode;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    document.body.removeChild(textField);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const cardValues=[
    {
      text : 'Daily Profit',
      value : '75%',
      img : '/public/img/profit.webp'
    },
    {
      text : 'Your Speed',
      value : '0.3 TRX/H',
      img : '/public/img/speed.webp'
    },
    {
      text : '48hrs Target',
      value : '45 TRON',
      img : '/public/img/clock.webp'
    },
  ]

  return (
    // <div>
      <div className="dashBanner">
        <h2>Dashboard</h2>

        <div className="balanceContainer">
          <p className='tronID'>TRjCy3f9ORT84vh4T9mBX3weCF47GeydbSR</p>
          <div className="TRXIMGContainer">
          <div className="TRXContainer">
            <h3>Balance</h3>
            <p>67.76587t8587 TRX</p>
          </div>
          <img src="/public/img/tronLogo.webp" alt="TRON" loading='lazy'/>
         </div>
        </div>

        <div className="referralContainer">
          <h5>Your Referral Link</h5>
          <hr />
          <div className="linkContainer">
            <input type="text" readOnly
            value='https://tronpool.tech?referral=712846588' />
            <button onClick={handleCopyClick} disabled={isCopied}>
              {isCopied ? "Copied!" : (<><IoIosCopy />Copy</> )}
            </button>
          </div>
        </div>

        {cardValues.map((value,i)=>(
            <div className="card" key={i}>
              <div className="texts">
                <h5>{value.text}</h5>
                <p>{value.value}</p>
              </div>
              <img src={value.img} alt="" />
            </div>
          ))
        }

      </div>
    // </div>
  )
}

export default Dash