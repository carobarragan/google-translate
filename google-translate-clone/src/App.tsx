import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { type State } from "./types.d";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useReducer } from "react";
import { useStore } from "./hooks/useStore";
import { Form } from "react-bootstrap";
import { AUTO_LANGUAGE } from "./constants";
import { ArrowsIcon } from "./components/Icons";
import { LanguageSelector } from "./components/LanguageSelector";

function App() {
  const {
    fromLanguage,
    setFromLanguage,
    toLanguage,
    interChangeLanguages,
    setToLanguage,
  } = useStore();
  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <LanguageSelector onChange={setFromLanguage}></LanguageSelector>
          {fromLanguage}
        </Col>
        <Col>
          <Button
            variant="link"
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interChangeLanguages}
          >
            <ArrowsIcon />
          </Button>
        </Col>
        <Col>
          <LanguageSelector onChange={setToLanguage}></LanguageSelector>
          {toLanguage}
        </Col>
      </Row>

      {/* <button onClick={() => setFromLanguage("es")}>Cambiar a Español</button>
      {fromLanguage} */}
    </Container>
  );
}

export default App;
