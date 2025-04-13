import React from 'react'
import {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import DashboardItems from './DashboardItems'

import '../CSS/style.css'

// let productsList = [
//   {
//     "name": "Breezy Linen Shirt",
//     "image": "public/summer-wear.jpg",
//     "category": "Summerwear",
//     "items": 22
//   },
//   {
//     "name": "Thermal Puffer Jacket",
//     "image": "public/Images/fashionable-man-winter-knitted-clothes.jpg",
//     "category": "Winterwear",
//     "items": 25
//   },
//   {
//     "name": "Quick-Dry Running Shorts",
//     "image": "https://m.media-amazon.com/images/I/61z7G+eKz6L._AC_UX679_.jpg",
//     "category": "Sportswear",
//     "items": 15
//   },
//   {
//     "name": "Silk Evening Gown",
//     "image": "https://m.media-amazon.com/images/I/71vG+F9z8nL._AC_UY741_.jpg",
//     "category": "Functionwear",
//     "items": 30
//   },
//   {
//     "name": "Classic Denim Jeans",
//     "image": "https://m.media-amazon.com/images/I/81Y5WuARqpL._AC_UX679_.jpg",
//     "category": "Casualwear",
//     "items": 10
//   },
//   {
//     "name": "Formal Blazer",
//     "image": "https://m.media-amazon.com/images/I/61v5+9f5XLL._AC_UX679_.jpg",
//     "category": "Formalwear",
//     "items": 20
//   },
//   {
//     "name": "Comfort Fit Pajamas",
//     "image": "https://m.media-amazon.com/images/I/71F5v5Z5+eL._AC_UX679_.jpg",
//     "category": "Loungewear",
//     "items": 25
//   },
//   {
//     "name": "Beach Sarong Wrap",
//     "image": "https://m.media-amazon.com/images/I/71v5+9f5XLL._AC_UX679_.jpg",
//     "category": "Resortwear",
//     "items": 22
//   }
// ]

// const getData = async () => {
//   let url = `http://localhost:5000/api/products`;
//   let data = {};
//   try{
//     const response = await fetch(url);
//     if(response.ok) {
//       let data = await response.json();
//     }
//   } catch (error) {
//     console.log({message: error.message});
//   }
//   console.log(data)
// }

function Dashboard() {
    const [openPopup, setOpenPopup] = useState(false);
    const [productDetails, setProductDetails] = useState([]);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [items, setItems] = useState('');

    useEffect(() => {
      axios.get('http://localhost:5000/api/products')
      .then(res => {
        setProductDetails(res.data)
      })
      .catch(error => {
        console.log(error)
      })
    })

    const onChangeName = (e) => {
      setName(e.target.value)
    }

    const onChangeImage = (e) => {
      setImage(e.target.value)
    }

    const onChangeCategory = (e) => {
      setCategory(e.target.value)
    }

    const onChangeItems = (e) => {
      setItems(e.target.value)
    }

    const onAddCategory = (e) => {
      e.preventDefault()
      const newCategory = {
        id: uuidv4(),
        name, 
        image,
        category, 
        items
      }
      setProductDetails(prevDetails => [...prevDetails, newCategory]);
    }

  return (
    <div className='categories-container'>
        <div className='categories-addCategories'>
            <h1 className='category-text'>Categories</h1>
            <button onClick={() => setOpenPopup(true)}>Add Category</button>

            {openPopup && 
                <div className='popup-container'>
                  <div className='close-btn-container'>
                  <button className='close-button' onClick={() => setOpenPopup(false)}>X</button>
                  </div>
                    <div className='title-close'>
                        <h1>Add a Category</h1>
                    </div>
                    <div>
                        <form className='form-container' onSubmit={onAddCategory}>
                            <input className='input-field' value={name} onChange={onChangeName} type='text' placeholder='Name'  />
                            <input className='input-field' value={image} onChange={onChangeImage} type='text' placeholder='Image Url'  />
                            <input className='input-field' value={category} onChange={onChangeCategory} type='text' placeholder='Category'  />
                            <input className='input-field' value={items} onChange={onChangeItems} type='number' placeholder='Items'  />
                            <button type="submit">Add</button>
                        </form>
                    </div>
                </div>
            }
        </div>
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
