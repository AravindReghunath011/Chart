import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({pages}) => {
  return (
    <div className='menu-container'>
        {pages.map((page)=>{
            return(
                <Link to={page.link}>{page.name} /</Link> 
            )
        })}
    </div>
  )
}

export default Menu