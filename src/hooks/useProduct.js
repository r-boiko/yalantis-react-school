// Core
import {useState, useEffect} from "react";

// Api
import {urlProducts} from '../api/urls';

export const useProduct = productId => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(
        `${urlProducts}/${productId}`
    )
        .then(res => res.json())
        .then(product => {
          setProduct(product);
        });
  }, [productId]);

  return {
    product
  };
};
