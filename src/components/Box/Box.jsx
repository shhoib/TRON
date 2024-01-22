import { useState } from 'react';
import './Box.scss';
import { FiPlus,FiMinus } from "react-icons/fi";
import {motion} from 'framer-motion'

const Box = ({ title, details }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="box">
      <div className="box-header" onClick={toggleExpanded}  style={{ background: !expanded ? '#dddddd' : '',color: !expanded? 'rgb(14,36,83)' : '' }}>
      <div className="box-title">{title}</div>
        <div className="box-details-toggle">{expanded ? <FiMinus/> : <FiPlus/>}</div>
      </div>
      {expanded &&
       <motion.div className="box-details" >
        {details}</motion.div>}
    </div>
  );
};

export default Box;
