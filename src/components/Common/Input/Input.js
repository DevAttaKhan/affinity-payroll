import React from 'react';

const Input = ({ name, label, errors, type, data }) => {
  return (
    <div className="form-group row my-3 px-3">
      <label className="col-form-label col-md-2">{label}</label>
      <div className="col-md-10">
        <input className="form-control" type={type} {...data} />
        {Object.keys(errors).find((key) => key === name) && (
          <small className="error-input">Please enter {label}</small>
        )}
      </div>
    </div>
  );
};

export default Input;
