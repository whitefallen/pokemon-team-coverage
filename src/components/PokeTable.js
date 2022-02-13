import { Col, Container, Row, Table } from "react-bootstrap";
import PokemonSelect from "./PokemonSelect";
import Types from "../data/types.json";
import React, { useState } from "react";
import PokeTypes from "../data/pokemon_types.json";
import TypeEfficacy from "../data/type_efficacy.json";
function PokeTable() {
  const [pokes, setPokes] = useState([]);
  const handleChange = (selected, index) => {
    let tempArr = [...pokes];
    tempArr[index] = pokemonTypeAndEfficacy(selected[0]);
    setPokes(tempArr);
  };

  const pokemonTypeAndEfficacy = (pokemon) => {
    pokemon.types = PokeTypes.filter(
      (pokeObj) => pokeObj.pokemon_id === pokemon.id
    ).map((pokeObj) => pokeObj.type_id);
    let typeEff;
    typeEff = pokemon.types.map((t_id) =>
      TypeEfficacy.filter((typeObj) => typeObj.target_type_id === t_id)
    );
    let tempArr = [];
    typeEff.flat().forEach((typeObj) => {
      if (!tempArr.find((e) => e.id === typeObj.damage_type_id)) {
        let obj = {
          id: typeObj.damage_type_id,
          damage_factor: typeObj.damage_factor,
        };
        tempArr.push(obj);
      } else {
        let index = tempArr.findIndex((e) => e.id === typeObj.damage_type_id);
        tempArr[index].damage_factor =
          tempArr[index].damage_factor * (typeObj.damage_factor / 100);
      }
    });
    pokemon.typeeff = tempArr;
    return pokemon;
  };
  return (
    <>
      <Row>
        <Col>
          <PokemonSelect index={0} handleChange={handleChange} />
          <PokemonSelect index={1} handleChange={handleChange} />
          <PokemonSelect index={2} handleChange={handleChange} />
        </Col>
        <Col>
          <PokemonSelect index={3} handleChange={handleChange} />
          <PokemonSelect index={4} handleChange={handleChange} />
          <PokemonSelect index={5} handleChange={handleChange} />
        </Col>
      </Row>
      <Row>
        <Table responsive>
          <thead>
            <tr>
              <th>Attack-Type</th>
              {pokes.map((poke, index) => {
                if (poke) {
                  return <th key={index}>{poke.identifier}</th>;
                }
                return null;
              })}
            </tr>
          </thead>
          <tbody>
            {Types.map((type, indexR) => (
              <tr key={indexR}>
                <td>{type.identifier}</td>
                {pokes.map((poke, index) => {
                  if (poke) {
                    return (
                      <td key={`${indexR}-${index}`}>
                        {poke.typeeff[indexR].damage_factor} %
                      </td>
                    );
                  }
                  return null;
                })}
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </>
  );
}
export default PokeTable;
