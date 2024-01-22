import { useState,useEffect } from 'react'
import './Table.scss'
import Box from '../Box/Box';
import {motion} from 'framer-motion'


const Table = () => {

  const [isButtonClicked,setIsButtonClicked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/public/img/dogecoin.webp',
    '/public/img/paypal.webp',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  const handleButtonClick=()=>{
    setIsButtonClicked(!isButtonClicked);
  }

  return (
    <div className='TableContainer'>
      <p className='chatIcon'>Latest Transactions</p>
      <h4>Our Latest Deposits and Withdraws</h4>  
      <p>Nisi voluptates, neque animi velit inventore quidem omnis. Qou veritatis aliquam aspernature nihil consequatur? delectus facilis!</p>
      <div className="buttons">
        <button onClick={handleButtonClick}>Deposit</button>
        <button onClick={handleButtonClick}>Withdraw</button>
      </div>

      <table>
    <tr>
      <th>Time</th>
      <th>Wallet</th>
      <th>Amount</th>
    </tr>
    <tr>
      <td>2022-10-23  10.28.06</td>
      <td className='center'>TRj3YCfo8Fu7tieiuguoihwofhwgoijnwrgihwrgoiwngkjwnrgouwghowe;jkglnwgwporighoiwg;hlwkgnwrgiohwrogi;aergluihrgl;khnrg;lkrngopiurghpoiwhg;lkwgnw;rlkgnworighoiwrgh</td>
      <td>32 TRX</td>
    </tr>
    <tr>
      <td>2022-10-23  10.28.06</td>
      <td className='center'>TRj3YCfo8Fu7t</td>
      <td>40 TRX</td>
    </tr>
    <tr>
      <td>2022-10-23  10.28.06</td>
      <td className='center'>TRj3YCfo8Fu7tieiuguoihwofhwgoijnwrgihwrgoiwngkjwnrgouwghowe;jkglnwgwporighoiwg;hlwkgnwrgiohwrogi;aergluihrgl;khnrg;lkrngopiurghpoiwhg;lkwgnw;rlkgnworighoiwrgh</td>
      <td>32 TRX</td>
    </tr>
    <tr>
      <td>2022-10-23  10.28.06</td>
      <td className='center'>TRj3YCfo8Fu7tieiuguoihwofhwgoijnwrgihwrgoiwngkjwnrgouwghowe;jkglnwgwporighoiwg;hlwkgnwrgiohwrogi;aergluihrgl;khnrg;lkrngopiurghpoiwhg;lkwgnw;rlkgnworighoiwrgh</td>
      <td>32 TRX</td>
    </tr>
  </table>

      <Box title="What is the minimum deposit?" details="Minimun deposite on the platform is 40trx or 2USD" />
      <Box title="What makes out platform unique?" details="Full details for Box 2" />
      <Box title="Can i make nore than one deposite" details="Full details for Box 3" />

    <motion.img src={images[currentIndex]} alt=""/> 

    </div>
  )
}

export default Table;