import React from "react";
import CardContainer from "../Layout/CardContainer";
import Table from "../Table/Table";
import Avatar from "../Avatar/Index";

const columns = [
  { path: "no", lable: "S.NO" },
  {
    path: "name",
    lable: "Employee Name",
    content: (emp) => (
      <Avatar name={emp.name} designation={emp.designation} img={emp.src} />
    ),
  },
  {
    path: "amount",
    lable: "Amount",
  },
  {
    path: "dueDate",
    lable: "Due Date",
  },
];

const data = [
  {
    no: 1,
    name: " Barry Allen",
    amount: "2310",
    dueDate: "02-0-2022",
    src: "https://smarthr-ci.dreamguystech.com/template/orange/public/assets/img/profiles/avatar-19.jpg",
  },
  {
    no: 2,
    name: " Barry Cuda",
    amount: "231",
    dueDate: "02-0-2022",
    src: "https://smarthr-ci.dreamguystech.com/template/orange/public/assets/img/profiles/avatar-10.jpg",
  },
];

const LoanTable = () => {
  return (
    <CardContainer title="Advances">
      <Table data={data} columns={columns} />
    </CardContainer>
  );
};

export default LoanTable;
