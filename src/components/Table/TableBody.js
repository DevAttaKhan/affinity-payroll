import React from 'react';
import './TableBody.scss';

const TableBody = ({ columns, data }) => {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return item[column.path];
  };

  return (
    <tbody>
      {data.map((item, i) => (
        <tr key={i}>
          {columns.map((column, i) => (
            <td key={column.path}>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
