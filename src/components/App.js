import React from "react";
import "../css/App.css";
import { Navbar, Nav } from "react-bootstrap";
import gitHubLogo from "../assets/GitHub-Mark-Light-64px.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Main";
// import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Gabe Deml</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="art">ART</Nav.Link>
          <Nav.Link href="code">Code</Nav.Link>
          <a href="https://github.com/GabrielDeml">
            <img src={gitHubLogo} alt="GitHub" width="40" height="40" />
          </a>
        </Nav>
      </Navbar>
      <header className="App-header">
          <Main />
      </header>
    </div>
  );
}

export default App;
