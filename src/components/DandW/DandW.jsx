import './DandW.scss'
import faq from '../../../public/svg/faq.json'
import Lottie from 'react-lottie'
import Dropdown from '../Dropdown/Dropdown';
import Corousel from '../corousel/Corousel';
// import { useState,useEffect } from 'react';


const DandW = () => {

    const FAQOptions = {
        loop: true,
        autoplay: true,
        animationData: faq,
      }; 

  return (
    <div>
        <div className="texts">
         <h6>Latest Transactions</h6>
         <h2>Our Latest  Deposits and Withdraws</h2>
         <p>Nisi voluptates, neque animi velit inventore quidem omnis. Quo veritatis aliquam aspernatur nihil consequatur? delectus facilis!</p>

         <div className="buttons">
            <button>Deposit</button>
            <button>Withdraw</button>
         </div>

         <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Wallet</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='firstRow'>2022-10-23  10:28:06</td>
          <td className='secondRow'>TRj2YuCsrhTJSdf84IB59Lsn466Bd2&82FsvHea36Gv9Lsn466Bd2&82FsvHea36Gv</td>
          <td>30 TRX</td>
        </tr>
        <tr>
          <td className='firstRow'>2022-10-23  10:28:06</td>
          <td className='secondRow'>TRj2YuC84IB59466Bd2&82FsvHea36Gerhv9Lsn466Bd2&82FsvHea36Gv</td>
          <td>15 TRX</td>
        </tr>
        <tr>
          <td className='firstRow'>2022-10-23  10:28:06</td>
          <td className='secondRow'>TRj2YuC84IBehTYK59Lsn466Bd2&82FsvHea36Gv9Lsn466Bd2&82FsvHea36Gv</td>
          <td>20 TRX</td>
        </tr>
        <tr>
          <td className='firstRow'>2022-10-23  10:28:06</td>
          <td className='secondRow'>TRj2YuC84IBehTYK59Lsn466Bd2&82FsvHea36Gv9Lsn466Bd2&82FsvHea36Gv</td>
          <td>20 TRX</td>
        </tr>
       </tbody>
       </table>
      </div>

        <div className="FAQ">
         <Lottie options={FAQOptions} height={100} width={100} />
        <h2>Frequently asked questions</h2>
        <Dropdown heading={'What is the minimum deposit?'} content={'Minimum deposit on the platform is 40 TRX or 20 USD'}/>
        <Dropdown heading={'What makes our platform unique?'} content={'Something about unique'}/>
        <Dropdown heading={'Can i make more than one deposite?'} content={'Something about unique'}/>
        </div>

       <Corousel/>

    </div>
  )
}

export default DandW