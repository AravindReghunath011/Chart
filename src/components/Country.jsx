import React from 'react'
import { Link } from 'react-router-dom'

const Country = () => {
  return (
    <div style={{display:'flex',gap:'10px'}}>

        <div className='country'><Link className='link' to={'/projects'}>Qatar</Link></div>
        <div className='country'><Link className='link' to={'/projects'}>KSA</Link></div>
    </div>
  )
}

export default Country