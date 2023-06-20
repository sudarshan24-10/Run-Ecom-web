import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
export default function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>amazona</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route
                path="/product/:slug"
                element={<ProductScreen></ProductScreen>}
              ></Route>
              <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
            </Routes>
          </Container>
        </main>
        <div className="text-center">
          <footer>All rights reserved</footer>
        </div>
      </div>
    </BrowserRouter>
  );
}
