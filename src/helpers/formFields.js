// Core
import React from "react";

// Antd
import {Input, InputNumber, Select} from "antd";

export const renderFormInput = ({input, label, placeholder, type, meta: {touched, error, warning}}) => (
    <div>
      <label>{label}</label>
      <div>
        <Input className={touched && error ? 'validationError' : ''} placeholder={placeholder} type={type} {...input}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
);

export const renderFormInputNumber = ({input, label, placeholder, type, meta: {touched, error, warning}}) => (
    <div>
      <label>{label}</label>
      <div>
        <InputNumber style={{width: '100%'}} className={touched && error ? 'validationError' : ''}
                     placeholder={placeholder} type={type} {...input}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
);

export const renderFormSelect = ({input, label, placeholder, type, children, meta: {touched, error, warning}}) => (
    <div>
      <label>{label}</label>
      <div>
        <Select className={touched && error ? 'validationError' : ''} placeholder={placeholder}
                type={type} {...input}>{children}</Select>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
);

