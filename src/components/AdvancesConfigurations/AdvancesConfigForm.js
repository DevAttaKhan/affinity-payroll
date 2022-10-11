import React, { useState } from "react";
import Form from "../Common/Form/Form";
import CardContainer from "../Layout/CardContainer";

const inputs = [
  {
    label: "Advance Category",
    name: "advanceCategory",
    type: "text",
    value: "",
  },
  {
    label: "Allowed Amount ",
    name: "allowedAmount",
    type: "text",
    value: "",
  },
  {
    label: "Status",
    name: "status",
    type: "text",
    value: "",
  },
];

const AdvancesConfigForm = () => {
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

export default AdvancesConfigForm;
