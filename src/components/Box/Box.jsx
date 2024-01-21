import { useState } from 'react';
import './Box.scss';

const Box = ({ title, details }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="box">
      <div className="box-header" onClick={toggleExpanded}  style={{ backgroundColor: !expanded ? 'grey' : '' }}>
        {title}
        {expanded ? '-' : '+'}
      </div>
      {expanded && <div className="box-details">{details}</div>}
    </div>
  );
};

export default Box;
