import React, { useState } from 'react';
import Form from '../Common/Form/Form';
import CardContainer from '../Layout/CardContainer';

const inputs = [
  {
    label: 'Employee Name',
    name: 'name',
    type: 'text',
    value: '',
  },
  {
    label: 'Employee Email',
    name: 'email',
    type: 'text',
    value: '',
  },
  {
    label: 'Cell No.',
    name: 'cell',
    type: 'text',
    value: '',
  },
  {
    label: 'Employment Type',
    name: 'empType',
    type: 'text',
    value: '',
  },
  {
    label: 'Grade',
    name: 'grade',
    type: 'text',
    value: '',
  },
  {
    label: 'Designation',
    name: 'designation',
    type: 'text',
    value: '',
  },
  {
    label: 'Department',
    name: 'department',
    type: 'text',
    value: '',
  },
  {
    label: 'Location',
    name: 'location',
    type: 'text',
    value: '',
  },
  {
    label: 'Division',
    name: 'division',
    type: 'text',
    value: '',
  },
  {
    label: 'Cost Center',
    name: 'constCenter',
    type: 'text',
    value: '',
  },
  {
    label: 'Unit',
    name: 'unit',
    type: 'text',
    value: '',
  },
  {
    label: 'Line Manager I.D',
    name: 'lmID',
    type: 'text',
    value: '',
  },
  {
    label: 'Line Managert',
    name: 'lm',
    type: 'text',
    value: '',
  },
];

const EmployeeModalForm = () => {
  const [state, setState] = useState(inputs);

  const handleChange = (e) => {
    const config = [...state];
    const index = config.findIndex((el) => el.name === e.target.name);
    config[index] = { ...config[index], value: e.target.value };
    setState(config);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <CardContainer title="Advances Confiuration " onClick={handleSubmit} form>
      <Form inputs={state} onChange={handleChange} />
    </CardContainer>
  );
};

export default EmployeeModalForm;
