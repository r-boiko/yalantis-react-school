// Core
import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';

// Components
import ProductList from "../components/ProductList";
import ProductSpin from "../components/ProductSpin";

// Store
import {getDataFromLocalStorage, getProductsAsync} from "../store/saga/actions";

// Selectors
import {getProducts} from "../store/selectors";

// PropTypes
MainRoute.propTypes = {
  products: PropTypes.object,
  getDataFromLocalStorage: PropTypes.func,
  getProductsAsync: PropTypes.func,
};

function MainRoute({products: {items, pending}, getDataFromLocalStorage, getProductsAsync}) {
  const location = useLocation();

  useEffect(() => {
    getDataFromLocalStorage();
    getProductsAsync();
  }, [location]);

  return pending
      ? <ProductSpin/>
      : <ProductList products={items}/>;
}

const mapStateToProps = (state) => {
  return {
    products: getProducts(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getDataFromLocalStorage: data => {
      dispatch(getDataFromLocalStorage(data));
    },
    getProductsAsync: data => {
      dispatch(getProductsAsync(data));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainRoute);