import Menu from "./Menu";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar key={""} bg="light" expand={""} className="mb-3">
        <Container>
          <Navbar.Brand href="#">Marvelous Munchies</Navbar.Brand>
        </Container>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
