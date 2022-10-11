// import React, { useEffect, useState } from 'react';
// import CardContainer from '../Layout/CardContainer';
// import Table from '../Table/Table';
// // import Avatar from "../Avatar/Index";
// import empData from '../../data/empDB.json';

// const columns = [
//   { path: 'id', lable: 'S.NO' },
//   {
//     path: 'employeeName',
//     lable: 'Name',
//     // content: (emp) => (
//     //   <Avatar name={emp.name} designation={emp.designation} img={emp.src} />
//     // ),
//   },
//   {
//     path: 'department',
//     lable: 'Department',
//   },
// ];

// const EmployeesTable = () => {
//   const [empState, setEmpState] = useState([]);
//   let tableData = [];

//   useEffect(() => {
//     if (empData.length > 0) {
//       // eslint-disable-next-line
//       tableData = empData.map((dataItem) => {
//         const { id, employeeName, department } = dataItem;
//         return { id, employeeName, department };
//       });
//       setEmpState(tableData);
//     }
//     // eslint-disable-next-line
//   }, [empData]);

//   return (
//     <CardContainer title="Employees">
//       {/* {empState.length > 0 ? (<Table data={empState} columns={columns} />
//       ) : (<></>)} */}
//     </CardContainer>
//   );
// };

// export default EmployeesTable;
