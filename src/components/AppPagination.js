// Core
import React from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

// Antd
import {Pagination} from 'antd';

// Store
import {setFilterPagination} from "../store/filter/actions";

// Selectors
import {getProducts, getFilter} from "../store/selectors";

// PropTypes
AppPagination.propTypes = {
  products: PropTypes.object,
  filter: PropTypes.object,
  setFilterPagination: PropTypes.func,
};

function AppPagination({products: {items, page, perPage, totalItems}, filter, setFilterPagination}) {
  function onShowSizeChange(current, pageSize) {
    setFilterPagination({
      page: current,
      perPage: pageSize
    })
  }

  function onPageNumberChange(current, pageSize) {
    setFilterPagination({
      page: current,
      perPage: pageSize
    })
  }

  return (
      <>
        {filter.reload && items.length > 0 &&
        (<Pagination
            style={{textAlign: 'center', padding: '16px 24px'}}
            showSizeChanger
            onChange={onPageNumberChange}
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={page}
            total={totalItems}
            pageSize={perPage}
        />)}
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
    setFilterPagination: data => {
      dispatch(setFilterPagination(data))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppPagination);
