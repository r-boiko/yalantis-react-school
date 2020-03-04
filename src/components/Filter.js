// Core
import React, {useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

// Antd
import {Select, Typography} from 'antd';
import InputNumber from "antd/es/input-number";

// Store
import {setFilterOrigins, setFilterMinPrice, setFilterMaxPrice} from "../store/filter/actions";
import {getDataFromLocalStorage, getProductsAsync, getProductsOriginsAsync} from "../store/saga/actions";

// Selectors
import {getProducts, getFilter} from "../store/selectors";

// PropTypes
Filter.propTypes = {
  products: PropTypes.object,
  filter: PropTypes.object,
  getDataFromLocalStorage: PropTypes.func,
  getProductsAsync: PropTypes.func,
  getProductsOriginsAsync: PropTypes.func,
  setFilterOrigins: PropTypes.func,
  setFilterMinPrice: PropTypes.func,
  setFilterMaxPrice: PropTypes.func,
};

function Filter({products, filter, getDataFromLocalStorage, getProductsAsync, getProductsOriginsAsync, setFilterOrigins, setFilterMinPrice, setFilterMaxPrice}) {
  const {Title} = Typography;
  const {Option} = Select;
  const children = products.origins.items.map(origin => <Option key={origin.value}>{origin.displayName}</Option>);

  useEffect(() => {
    if (!filter.reload) {
      getDataFromLocalStorage();
    }
    getProductsOriginsAsync();
    getProductsAsync();
  }, [filter]);

  function originsChange(value) {
    setFilterOrigins(value);
  }

  function minPriceChange(value) {
    setFilterMinPrice(value);
  }

  function maxPriceChange(value) {
    setFilterMaxPrice(value);
  }

  return (
      <>
        {filter.reload && (
            <div className='filter' style={{padding: '16px 24px'}}>
              <div className='filter__title'>
                <Title level={4}>Filter</Title>
              </div>
              <div className='filter__item'>
                <Select
                    style={{width: '100%', minWidth: '150px'}}
                    mode="multiple"
                    placeholder="Select origins"
                    defaultValue={filter.origins.length === 0 ? [] : filter.origins.split(',')}
                    onChange={originsChange}
                >
                  {children}
                </Select>
              </div>
              <div className='filter__item'>
                <InputNumber
                    style={{width: '100%', minWidth: '150px'}}
                    defaultValue={filter.minPrice}
                    onChange={minPriceChange}
                    placeholder="Input min price"/>
              </div>
              <div className='filter__item'>
                <InputNumber
                    style={{width: '100%', minWidth: '150px'}}
                    defaultValue={filter.maxPrice}
                    onChange={maxPriceChange}
                    placeholder="Input max price"/>
              </div>
            </div>
        )}
      </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: getProducts(state),
    filter: getFilter(state),
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getDataFromLocalStorage: data => {
      dispatch(getDataFromLocalStorage(data));
    },
    getProductsAsync: data => {
      dispatch(getProductsAsync(data));
    },
    getProductsOriginsAsync: data => {
      dispatch(getProductsOriginsAsync(data));
    },
    setFilterOrigins: data => {
      dispatch(setFilterOrigins(data))
    },
    setFilterMinPrice: data => {
      dispatch(setFilterMinPrice(data))
    },
    setFilterMaxPrice: data => {
      dispatch(setFilterMaxPrice(data))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);