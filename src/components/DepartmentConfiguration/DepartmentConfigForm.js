import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../Common/Form/Form';
import CardContainer from '../Layout/CardContainer';
import { postDepartment } from '../../store/feature/department/department';
import { getOffices } from '../../store/feature/office/office';

const inputs = [
  {
    label: 'Department Name',
    name: 'name',
    type: 'text',
    value: '',
  },
  {
    label: 'Offices',
    name: 'office_id',
    type: 'dropdown',
    value: '',
    options: [],
  },
];

const DepartmentConfigForm = () => {
  const dispatch = useDispatch();

  const [departmentState, setDepartmentState] = useState();
  const { data } = useSelector((state) => state.offices);

  useEffect(() => {
    if (data) inputs[inputs.length - 1].options = data;
  }, [data]);
  if (departmentState) {
    dispatch(postDepartment(departmentState));
  }

  useEffect(() => {
    dispatch(getOffices());
    // eslint-disable-next-line
  }, []);

  return (
    <CardContainer title="Departments Configurations" form>
      {data && <Form inputs={inputs} setState={setDepartmentState} />}
    </CardContainer>
  );
};

export default DepartmentConfigForm;
