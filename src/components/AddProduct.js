// Core
import React, {useState} from "react";
import {compose} from 'redux'
import {Field, reduxForm} from 'redux-form'
import {connect} from "react-redux";
import PropTypes from 'prop-types';

// Antd
import {Button, Select, Modal} from "antd";

// Api
import {key} from '../api/key';
import {urlProducts} from '../api/urls';

// Helpers
import {validators} from "../helpers/validators";
import {renderFormInput, renderFormInputNumber, renderFormSelect} from "../helpers/formFields";

// Selectors
import {getProducts} from "../store/selectors";

// PropTypes
AddProduct.propTypes = {
  handleSubmit: PropTypes.func,
  products: PropTypes.object,
};

function AddProduct({handleSubmit, products}) {
  const [modalState, setModalState] = useState({
    message: '',
    visible: false,
    confirmLoading: false,
  });
  const {Option} = Select;
  const children = products.origins.items.map(origin => <Option key={origin.value}>{origin.displayName}</Option>);

  const showModal = () => {
    setModalState({
      ...modalState,
      visible: true,
    });
  };

  const handleCancel = () => {
    setModalState({
      ...modalState,
      visible: false,
    });
  };

  const submitForm = (data) => {
    setModalState({
      ...modalState,
      confirmLoading: true,
    });
    fetch(
        urlProducts, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'Authorization': key
          },
          body: JSON.stringify({
            "product": {
              "name": data.name,
              "price": Number(data.price),
              "origin": data.origin
            }
          })
        }
    )
        .then(res => res.json())
        .then(json => {
          const responseMessage = json.error === undefined ? 'Your product was successfully added.' : json.error.message;
          setModalState({
            ...modalState,
            message: responseMessage,
            confirmLoading: false,
          });
        });
  };

  return (
      <div key="modal" style={{display: 'inline-block'}}>
        <Button type="primary" onClick={showModal}>
          Add product
        </Button>
        <Modal
            title="New product"
            visible={modalState.visible}
            confirmLoading={modalState.confirmLoading}
            onCancel={handleCancel}
            footer={[
              <Button key="close" onClick={handleCancel}>
                Close
              </Button>,
              <Button key="submit" type="primary" loading={modalState.confirmLoading}
                      onClick={handleSubmit(submitForm)}>
                Submit
              </Button>,
            ]}
        >
          <form>
            <div>
              <Field
                  name="name"
                  type="text"
                  label="First Name"
                  placeholder="Input name"
                  component={renderFormInput}
                  validate={[validators.required]}
              />
            </div>
            <div style={{margin: '15px 0'}}>
              <Field
                  name="price"
                  type="number"
                  label="Price"
                  placeholder="Input number"
                  component={renderFormInputNumber}
                  validate={[validators.required, validators.number]}
              />
            </div>
            <div>
              <Field
                  name="origin"
                  type="select"
                  label="Origins"
                  placeholder="Select origins"
                  children={children}
                  component={renderFormSelect}
                  validate={[validators.required]}
              />
            </div>
            <p>{modalState.message}</p>
          </form>
        </Modal>
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: getProducts(state),
  }
};

export default compose(
    reduxForm({
      form: 'addProduct'
    }),
    connect(mapStateToProps)
)(AddProduct)
