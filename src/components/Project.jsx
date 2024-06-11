import React, { useState } from 'react';


const Project = () => {
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

  const getBackgroundColor = (relation) => {
    switch (relation) {
      case 'Good':
        return 'green';
      case 'New':
        return 'yellow';
      case 'Bad':
        return 'red';
      default:
        return 'gray';
    }
  };
  

  const [projects, setProjects] = useState(data.opportunities);

  return (
    <div className='scale-project'>

    
    <div className="container">
      
      <div className="flower">
       <div className='center'>Seven</div>
        {projects.map((obj, index) => {
          const numberOfProjects = projects.length;
          const angle = (360 / numberOfProjects) * index;
          const styles = {
            transform: `rotate(${angle}deg) translateY(-80px)`,
          };

          return (
            <div key={index} className="petal" style={styles}>
              <div className="inner">
              <div className='additional-content' style={{ outlineColor: getBackgroundColor(data.projectManagement?.[index]?.relation) }}>
                  {data.projectManagement?.[index]?.name  }
                </div>
                <div className='additional-content' style={{ outlineColor: getBackgroundColor(data.consultant?.[index]?.relation) }}>
                  {data.consultant?.[index]?.name  }
                </div>  

              <div className='additional-content' style={{ outlineColor: getBackgroundColor(data.client?.[index]?.relation) }}>
                  {data.client?.[index]?.name }
                </div>
                
                

                
              </div>
              <div className="projects">
                <p>{obj}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Project;
