import React, { useState, useEffect } from 'react';
import CardContainer from '../Layout/CardContainer';
import Table from '../Table/Table';
import EditeIcon from '../../assets/Icons/EditeIcon';
import { useDispatch, useSelector } from 'react-redux';
import { getOffices } from '../../store/feature/office/office';

const columns = [
  { path: 'id', lable: 'S.NO' },
  {
    path: 'name',
    lable: 'Office Name',
  },
  {
    path: 'address',
    lable: 'Office Address',
  },
  {
    path: 'edit',
    lable: 'Edit',
    content: (leave) => (
      <button>
        <EditeIcon width={16} />
      </button>
    ),
  },
];

const OfficeConfigTable = () => {
  const dispatch = useDispatch();
  const [officeState, setOfficeState] = useState([]);
  const officeData = useSelector((state) => state.offices);

  useEffect(() => {
    dispatch(getOffices());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (officeData) setOfficeState(officeData.data);
  }, [officeData]);

  return (
    <CardContainer title="Offices List">
      {officeState && officeState.length > 0 ? (
        <Table data={officeState} columns={columns} />
      ) : (
        <></>
      )}
    </CardContainer>
  );
};

export default OfficeConfigTable;
