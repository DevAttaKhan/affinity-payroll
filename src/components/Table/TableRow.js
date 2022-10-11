import React from "react";
import Avatar from "../Avatar/Index";

const TableRow = ({ sNo, name, department, img, amount, balence, dueDate }) => {
  return (
    <tr>
      <td>{sNo}</td>
      <td>
        <Avatar name={name} img={img} />
      </td>
      {department && <td>{department}</td>}
      {amount && <td>{amount}</td>}
      {balence && <td>{balence}</td>}
      {dueDate && <td>{dueDate}</td>}
    </tr>
  );
};

export default TableRow;
