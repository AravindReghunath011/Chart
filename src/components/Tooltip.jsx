// src/Tooltip.js
import React, { useState } from 'react';


const Tooltip = ({ children, content }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <div className="tooltip-content">{content}</div>}
    </div>
  );
};

export default Tooltip;
