import React, { useContext, useEffect } from 'react'
import './App.css';
import Project from './components/Project';
import Country from './components/Country';
import Main from './components/Main';
import { Routes,Route } from 'react-router-dom';
import Detail from './components/Detail';
import Tooltip from './components/Tooltip';
import { MyContext } from './main';
import Menu from './components/Menu';


const App = () => {
 
  let context = useContext(MyContext)
  let pages = [{name:'Home',link:'/'}]
  let {state,setState} = context
  useEffect(()=>{
    setState(pages)
  },[])
  console.log(context)
  
  return (
    <>
     <Menu pages={state}/>
  
  <Routes>
    <Route path='/project-details' element={<Project/>}/>
    <Route path='/tooltip' element={<Tooltip/>}/>
    <Route path='/projects' element={<Main/>}/>
    <Route path='/' element={<Country/>}/>
  </Routes>
  

  
    </>
  )
}

export default App




