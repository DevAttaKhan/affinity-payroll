import React from "react";
import TableBody from "./TableBody";
// import Avatar from "../Avatar/Index";
import TableHeader from "./TableHeader";

const Table = ({ columns, data }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
