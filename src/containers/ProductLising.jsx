import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";


const ProductLising = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchproducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
      dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchproducts();
  }, []);

  console.log("Products: ", products);

  return (
    <div className="ui container">
      <div className="ui three column doubling stackable grid container ">
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductLising;
