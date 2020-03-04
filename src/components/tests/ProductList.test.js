// Core
import React from "react";

// Components
import ProductList from "../ProductList";
import Product from "../Product";

// Enzyme
import {shallow} from 'enzyme';

const defaultProps = {
  products: [{
    isEditable: false,
    id: "4052c0d6-8eae-4237-b1be-9e02033c8799",
    name: "Handmade Frozen Pizza",
    price: 439,
    origin: "asia",
    createdAt: "2020-01-31T09:31:06.618Z",
    updatedAt: "2020-01-31T09:31:06.618Z"
  }]
};

describe('ProductList', () => {
  it('Initial', () => {
    const ProductListContainer = shallow(<ProductList {...defaultProps}/>);
    expect(ProductListContainer).toMatchSnapshot();
  });

  it('Render', () => {
    const ProductListContainer = shallow(<ProductList {...defaultProps}/>);
    expect(ProductListContainer.find(Product)).toHaveLength(1);
  });

  it('No data', () => {
    const props = {
      products: []
    };
    const ProductListContainer = shallow(<ProductList {...props}/>);
    expect(ProductListContainer.text()).toEqual('No data');
  })
});