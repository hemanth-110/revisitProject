import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

function SideBar() {
  return (
    <div className='sidebar-container'>
      <ul className='links'>
        <li className='page-link'>
          <Link className='link-text' to='/'>Dashboard</Link>
        </li>
        <li className='page-link'>
          <Link className='link-text' to='/orders'>Orders</Link>
        </li>
        <li className='page-link'>
          <Link className='link-text' to='/categories'>Categories</Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
