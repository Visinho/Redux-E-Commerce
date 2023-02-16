import React from 'react'
import { useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';

const ProductLising = () => {
    const products = useSelector((state) => state);
    console.log(products);
  return (
    <div className='ui grid container'>
      <ProductComponent/>
    </div>
  )
}

export default ProductLising
