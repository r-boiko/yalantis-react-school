// Core
import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

// Antd
import {PageHeader, Button} from "antd";

// Components
import AddProduct from "./AddProduct";

// Selectors
import {getCart} from "../store/selectors";

// PropTypes
AppHeader.propTypes = {
  cart: PropTypes.object,
};

function AppHeader({cart: {totalPrice}}) {
  return (
      <PageHeader
          className="page-header"
          title="App"
          subTitle="Product App"
          extra={[
            <AddProduct key="modal"/>,
            <Link key="favorites" to="/favorites">
              <Button type={"default"}>
                Favorites
              </Button>
            </Link>,
            <Link key="cart" to="/cart">
              <Button type={"default"}>
                Cart ({totalPrice}$)
              </Button>
            </Link>
          ]}
      />
  );
}

const mapStateToProps = (state) => {
  return {
    cart: getCart(state)
  }
};

export default connect(mapStateToProps)(AppHeader);