

import React from 'react';
import { Link } from 'react-router-dom';


const Detail = () => {
  const petals = Array(10).fill(0); // Array to create 8 petals

  return (
    <Link className='link' to={'/project-details'}>
    <div className="flower-container">
      <div className="flower-main">
        <div className="flower-center">Center</div>
        {petals.map((_, index) => {
          const angle = (360 / petals.length) * index;
          const styles = {
            transform: `rotate(${angle}deg) translate(80px) `,
          };

          return (
            <div key={index} className="flower-petal" style={styles}>
              <div className="petal-inner">Project {index + 1}</div>
            </div>  
          );
        })}
      </div>
    </div>
    </Link>
  );
};

export default Detail;