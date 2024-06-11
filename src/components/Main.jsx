import React, { useContext, useEffect } from 'react';
import Detail from './Detail';
import Project from './Project';
import { Link } from 'react-router-dom';
import { MyContext } from '../main';


const Main = () => {
  let context = useContext(MyContext)
  
  let {state,setState} = context

  let pages = [{name:'Home',link:'/'},{name:'Projects',link:'/projects'}]
  useEffect(()=>{
    setState(pages)
  },[])
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
    
    
      
   
   
  </div>
  )
  
}
  
export default Main;
