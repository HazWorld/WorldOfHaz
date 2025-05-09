import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
      <Container>
        <LinkContainer to="/" onClick={() => setExpanded(false)}>
          <Navbar.Brand>HazWorld</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <LinkContainer to="/" onClick={() => setExpanded(false)}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects" onClick={() => setExpanded(false)}>
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" onClick={() => setExpanded(false)}>
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;