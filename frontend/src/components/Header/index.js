import React from 'react'

import './index.css'

const Header = () => {
  return (
    <div className='header d-flex align-items-center p-3'>
      <h1 className=''>Revisit</h1>
      <div className=''>
        <input className='searchInput' typr="search" placeholder='Search' />
      </div>
      <p className='account-holder'>H</p>
    </div>
  )
}

export default Header