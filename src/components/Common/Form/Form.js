import React, { useState, useEffect } from 'react';
import Input from '../Input/Input';
import Button from '../../Button/Index';
import { useForm } from 'react-hook-form';

const Form = ({ inputs, setState }) => {
  const [formData, setFormData] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    if (inputs) {
      setFormData(inputs);
    }
  }, [inputs]);

  const onSubmit = (data, e) => {
    setState(data);
    reset();
  };

  return (
    <>
      <form className="form">
        {formData &&
          formData.map((input, i) => {
            let { type, options, name, label } = input;
            if (type === 'dropdown') {
              return (
                <div key={i} className="form-group row my-3 px-3">
                  <label className="col-form-label col-md-2">{label}</label>
                  <div className="col-md-10">
                    <select
                      className="form-control"
                      {...register(`${name}`, { required: true })}
                    >
                      <option value="">Select {label}</option>
                      {options.length > 0 &&
                        options.map((el) => (
                          <option key={el.id} value={el.id}>
                            {el.name}
                          </option>
                        ))}
                    </select>
                    {errors.name && (
                      <small className="error-input">
                        Please enter {label}
                      </small>
                    )}
                  </div>
                </div>
              );
            }
            return (
              <Input
                key={i}
                name={input.name}
                type={input.type}
                label={input.label}
                data={{ ...register(`${input.name}`, { required: true }) }}
                errors={errors}
              />
            );
          })}
      </form>
      <div className="table_footer">
        <Button btnText="Add" onClick={handleSubmit(onSubmit)} />
      </div>
    </>
  );
};

export default Form;
