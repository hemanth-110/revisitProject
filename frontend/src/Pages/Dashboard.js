import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

import DashboardItems from './DashboardItems'

import '../CSS/style.css'


function Dashboard() {

  const [productDetails, setProductDetails] = useState([]);
  
  useEffect(() => {
        axios.get('http://localhost:5000/api/products')
        .then(res => {
          setProductDetails(res.data)
        })
        .catch(error => {
          console.log(error)
        })
      })

  return (
    <div className='dashboard-container'>
      <h1>Dashboard</h1>
      <div className='dashboard-items'>
        <ul className='product-items'>
            {
                productDetails.map(eachItem => (
                    <DashboardItems key={eachItem.id} eachProduct={eachItem} />
                ))
            }
        </ul>
      </div>
    </div>
  )
}

export default Dashboard
