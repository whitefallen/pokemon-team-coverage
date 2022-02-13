import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Container } from "react-bootstrap";
import PokeTable from "./components/PokeTable";

function App() {
  return (
    <Container>
      <PokeTable />
    </Container>
  );
}

export default App;
