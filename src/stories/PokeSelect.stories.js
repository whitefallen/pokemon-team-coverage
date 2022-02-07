import PokemonSelect from "../components/PokemonSelect";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-typeahead/css/Typeahead.css";

export default {
  title: "Components/PokeSelect",
  component: PokemonSelect,
};

const Template = (args) => <PokemonSelect {...args} />;

export const Select = Template.bind({});
