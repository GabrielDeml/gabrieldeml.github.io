import React from "react";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import gitHubLogo from "./assets/GitHub-Mark-Light-64px.png";
import "bootstrap/dist/css/bootstrap.min.css";
import MyTest from "./Test";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Gabe Deml</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Projects">Projects</Nav.Link>
          <a href="https://github.com/GabrielDeml">
            <img src={gitHubLogo} alt="GitHub" width="40" height="40" />
          </a>
        </Nav>
      </Navbar>
      <MyTest />
    </>
  );
}

export default App;
