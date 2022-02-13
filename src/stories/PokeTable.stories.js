import PokeTable from "../components/PokeTable";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-typeahead/css/Typeahead.css";

export default {
  title: "Components/PokeTable",
  component: PokeTable,
};

const Template = (args) => <PokeTable {...args} />;

export const Select = Template.bind({});
