import React from "react";
import "./TableHeader.scss";

const TableHeader = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((el) => (
          <th key={el.path}>{el.lable}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
