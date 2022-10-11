import React, {useState, useEffect} from "react";
import CardContainer from "../Layout/CardContainer";
import Table from "../Table/Table";
import EditeIcon from "../../assets/Icons/EditeIcon";
import advanceCategory from '../../data/advanceCategory.json'

const columns = [
  { path: "id", lable: "S.NO" },
  {
    path: "advanceCategory",
    lable: "Advance Category",
  },
  {
    path: "allowedAmount",
    lable: "Allowed Amount",
  },

  {
    path: "status",
    lable: "Status",
  },

  {
    path: "edit",
    lable: "Edit",
    content: (leave) => (
      <button>
        <EditeIcon width={16} />
      </button>
    ),
  },
];

const AdvancesConfigTable = () => {

  const [empExpense, setEmpExpense] = useState({});
  let tableData = [];

  useEffect(() => {
    if (advanceCategory.length > 0) {
      // eslint-disable-next-line
      tableData = advanceCategory.map(dataItem => {
        const { id, advanceCategory, allowedAmount,status } = dataItem;
        return { id, advanceCategory, allowedAmount,status }

      });
      setEmpExpense(tableData)
    }
    // eslint-disable-next-line
  }, [advanceCategory])

  return (
    <CardContainer title="Advance Category">
            {empExpense.length > 0 ? (<Table data={empExpense} columns={columns} />
      ) : (<></>)}
    </CardContainer>
  );
};

export default AdvancesConfigTable;
