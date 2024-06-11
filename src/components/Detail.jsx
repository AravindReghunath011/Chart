

import React from 'react';
import { Link } from 'react-router-dom';


const Detail = () => {

  let data = {
    opportunities: ['Jeddah Stadium', 'Dammam Stadium', 'Exit 15', 'The Blade', 'Raffles Hotel'],
    client: [
      { name: '1000000 Ministry Of Sports', relation: 'No' },
      { name: '4000000 Ministry Of Sports', relation: 'New' },
      { name: '5000000 Seven', relation: 'Good' },
      { name: '4000000 Qiddiya', relation: 'Bad' },
      { name: '12000000 Diriyah', relation: 'Good' },
    ],
    consultant:[{name:'Khatib and Alami',relation:'New'},{name:'Dar Al Handassah',relation:'Good'},{name:'Dar Al Handassah',relation:'Bad'},{name:'Dar Al Handassah',relation:'Good'},{name:'Dar Al Handassah',relation:'Good'}],
    projectManagement:[{name:'Mace',relation:'Good'},{name:'Mace',relation:'Bad'}]
  };
  

  return (
    <Link className='link' to={'/project-details'}>
    <div className="flower-container">
      <div className="flower-main">
        <div className="flower-center">Center</div>
        {data.opportunities.map((obj, index) => {
          const angle = (360 / data.opportunities.length) * index;
          const styles = {
            transform: `rotate(${angle}deg) translate(85px) `,
          };

          return (
            <div key={index} className="flower-petal" style={styles}>
              
              <div className="petal-inner">
                {obj}
                <div className='inner-elm'>
                  <div>{data.client[index].name}</div>
                  <div>{data.consultant[index].name}</div>
                  
                  <div>hlo</div>
                </div>
                
                
              </div>
             
              
            </div>  
          );
        })}
      </div>
    </div>
    </Link>
  );
};

export default Detail;