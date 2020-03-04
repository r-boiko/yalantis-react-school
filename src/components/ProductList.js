// Core
import React from "react";
import PropTypes from 'prop-types';

// Components
import Product from "./Product";

// PropTypes
ProductList.propTypes = {
  products: PropTypes.array,
};

export default function ProductList({products}) {
  return (
      <div className="content">
        <div className="products">
          {products.length === 0 ? 'No data' : products.map((product) => <Product key={product.id} {...product} />)}
        </div>
      </div>
  );
}
