import React from 'react'

import '../CSS/style.css'

const DashboardItem = (props) => {
      const details = props.eachProduct;
      return (
            <div className='cards-container'>
                  <li className="product">
                        <img src={details.image} alt={details.name} />
                        <h3>{details.name}</h3>
                        <p>{details.category}</p>
                        <p>items available: {details.items}</p>
                  </li>
            </div>
      )
}

export default DashboardItem
