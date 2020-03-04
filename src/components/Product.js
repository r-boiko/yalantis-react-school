// Core
import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

// Antd
import {Card, Icon} from "antd";

// Components
import UpdateProduct from "./UpdateProduct";

// Store
import {addProductsToCart, removeProductsFromCart} from "../store/cart/actions";

// Selectors
import {getCart} from "../store/selectors";

// PropTypes
Product.propTypes = {
  single: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  origin: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  isEditable: PropTypes.bool,
  cart: PropTypes.object,
  addProductsToCart: PropTypes.func,
  removeProductsFromCart: PropTypes.func,
};

function Product({single, id, name, price, origin, createdAt, updatedAt, isEditable, addProductsToCart, removeProductsFromCart, cart}) {
  const productFromCart = cart.items.find(item => item.id === id);

  const actions = [
    !isEditable ? (<span>
            <Icon
                key="shopping-cart"
                type="shopping-cart"
                onClick={() => addProductsToCart({id, name, price, origin, createdAt, updatedAt})}
            />
      {productFromCart && productFromCart.count}
        </span>) : (
        <UpdateProduct id={id} name={name} price={price} origin={origin}/>
    )
    ,
    !isEditable && (
        <Icon
            key="delete"
            type="delete"
            onClick={() => removeProductsFromCart({id})}
        />
    )
    ,
    !single && (
        <Link key="star" to={`/products/${id}`}>
          <Icon type="link"/>
        </Link>
    )
  ].filter(Boolean);

  return (
      <Card style={{width: 300, margin: 20}} actions={actions}>
        <p>Name: {name}</p>
        <p>Price: {`${price}$`}</p>
        <p>Origin: {origin}</p>
        <p>Created: {new Date(createdAt).toDateString()}</p>
        <p>Updated: {new Date(updatedAt).toDateString()}</p>
      </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: getCart(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addProductsToCart: product => {
      dispatch(addProductsToCart(product))
    },
    removeProductsFromCart: id => {
      dispatch(removeProductsFromCart(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);