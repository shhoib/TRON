import './Dropdown.scss';
import question from '../../../public/svg/question.json'
import Lottie from 'react-lottie'
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';


const Dropdown = ({heading, content}) => {

    const [isOpened, setIsOpened] = useState(false);

    const handleArrowClick = ()=>{
        setIsOpened(!isOpened);
    }

    const questionOptions = {
        loop: true,
        autoplay: true,
        animationData: question,
      };

  return (
    <div className='qContainer'>
     <div className="qheader">
      <Lottie options={questionOptions} width={80}/>
      <div className="htexts">
        <div className="htext">
        <h6>{heading}</h6>
        <IoIosArrowDown onClick={handleArrowClick} className='arrow'/>
        </div>
     {isOpened && <div className='content'>{content}</div>}
      </div>
     </div>
    </div>
  )
}

export default Dropdown