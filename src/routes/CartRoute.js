// Core
import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

// Antd
import {Table} from 'antd';
import Button from "antd/es/button";

// Store
import {addProductsToCart, decreaseProductsFromCart, removeProductsFromCart} from "../store/cart/actions";

// Selectors
import {getCart} from "../store/selectors";

// PropTypes
CartRoute.propTypes = {
  cart: PropTypes.object,
  addProductsToCart: PropTypes.func,
  decreaseProductsFromCart: PropTypes.func,
  removeProductsFromCart: PropTypes.func,
};

function CartRoute({cart: {items, totalPrice}, addProductsToCart, decreaseProductsFromCart, removeProductsFromCart}) {

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      key: 'name',
      render: item => (
          <Link key="star" to={`/products/${item.id}`}>
            {item.name}
          </Link>
      )
      ,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Origin',
      dataIndex: 'origin',
      key: 'origin',
    },
    {
      title: 'Count',
      dataIndex: 'count',
      key: 'count',
    },
    {
      title: 'Options',
      key: 'options',
      render: item => (
          <>
            <Button type="primary" onClick={() => addProductsToCart({...item})}>
              +
            </Button>
            <Button style={{margin: '0 5px'}} type="primary" onClick={() => decreaseProductsFromCart({id: item.id})}>
              -
            </Button>
            <Button type="primary" onClick={() => removeProductsFromCart({id: item.id})}>
              x
            </Button>
          </>
      )
      ,
    }
  ];

  const data = items.map(item => {
    return {
      ...item,
      key: item.id
    }
  });

  return (
      <>
        <Table style={{margin: '0 24px'}} columns={columns} dataSource={data} pagination={false}/>
        {totalPrice > 0 && (
            <p style={{textAlign: 'right', padding: '30px 24px 0 0'}}>Total price: {totalPrice}$</p>
        )}
      </>
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
    decreaseProductsFromCart: id => {
      dispatch(decreaseProductsFromCart(id))
    },
    removeProductsFromCart: id => {
      dispatch(removeProductsFromCart(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartRoute);