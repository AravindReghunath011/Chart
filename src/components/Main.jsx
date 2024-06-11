import React from 'react';
import Detail from './Detail';
import Project from './Project';
import { flushSync } from 'react-dom';
import { Link } from 'react-router-dom';


const Main = () => {
  return(
    <div className='project-main'>
      
    <Link to={'/project-details'}>
    <div className='scaled-container'>
    <Project/>
    
  </div>
    </Link>
    <Link to={'/project-details'}>
    <div className='scaled-container'>
    <Project/>
    
  </div>
    </Link>
    <Link to={'/project-details'}>
    <div className='scaled-container'>
    <Project/>
    
  </div>
    </Link>
    <Link to={'/project-details'}>
    <div className='scaled-container'>
    <Project/>
    
  </div>
    </Link>
    <Link to={'/project-details'}>
    <div className='scaled-container'>
    <Project/>
    
  </div>
    </Link>
    
    
      
   
   
  </div>
  )
  
}
  
export default Main;
