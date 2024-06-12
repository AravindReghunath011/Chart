import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../main'

const Country = () => {
  let context = useContext(MyContext)
  let pages = [{name:'Home',link:'/'}]
  let {state,setState} = context
  useEffect(()=>{
    setState(pages)
  },[])
  return (
    <div style={{display:'flex',gap:'10px'}}>

        <div className='country'><Link className='link' to={'/projects'}>Qatar</Link></div>
        <div className='country'><Link className='link' to={'/projects'}>KSA</Link></div>
    </div>
  )
}

export default Country