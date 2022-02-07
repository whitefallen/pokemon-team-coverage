import PropTypes from "prop-types";
import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import Pokemon from "../data/pokemon.json";
import Stack from "./Stack";

function PokemonSelect({ handleChange, index }) {
  return (
    <Typeahead
      id={"PkmSelect1"}
      onChange={(selected) => {
        handleChange(selected, index);
      }}
      labelKey={"identifier"}
      options={Pokemon}
    />
  );
}

Stack.propTypes = {
  handleChange: PropTypes.func,
};

export default PokemonSelect;
