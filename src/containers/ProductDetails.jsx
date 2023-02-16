import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { selectedProduct } from '../redux/actions/productActions';
import { useDispatch } from 'react-redux';

const ProductDetails = () => {
 const { productId } = useParams();
 const product = useSelector((state) => state.product);
 const dispatch = useDispatch();
 console.log(productId);

 const fetchProductDetails = async () => {
  const response = await axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .catch((err) => {
      console.log("Err", err);
    });
    dispatch(selectedProduct(response.data));
};


  return (
    <div className='ui padded segment'>
      <h1>Product Details</h1>
    </div>
  )
}

export default ProductDetails
