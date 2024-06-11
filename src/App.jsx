import React from 'react'
import './App.css';
import Project from './components/Project';
import Country from './components/Country';
import Main from './components/Main';
import { Routes,Route } from 'react-router-dom';
import Detail from './components/Detail';


const App = () => {
  return (
    <>
  
  <Routes>
    <Route path='/project-details' element={<Project/>}/>
    <Route path='/projects' element={<Main/>}/>
    <Route path='/' element={<Country/>}/>
  </Routes>
  

  
    </>
  )
}

export default App