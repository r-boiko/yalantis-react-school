// Core
import React from "react";
import {useParams} from "react-router-dom";

// Components
import Product from "../components/Product";
import ProductSpin from "../components/ProductSpin";

// Hooks
import {useProduct} from "../hooks/useProduct";

export default function ProductRoute() {
  const {productId} = useParams();
  const {product} = useProduct(productId);
  if (!product) return <ProductSpin/>;

  return <Product single {...product} />;
}