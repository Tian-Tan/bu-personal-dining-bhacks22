import { Navbar, Nav, Container, Dropdown, DropdownButton } from "react-bootstrap";


// Navbar to control navigation to different dining hall pages
function Navibar() {

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto align-items-center" color="black">
              <Nav.Link href="/" className="me-3 fs-4">Home</Nav.Link>
              <Nav.Link href="/dhall/marciano">Marciano</Nav.Link>
              <Nav.Link href="/dhall/warren">Warren</Nav.Link>
              <Nav.Link href="/dhall/west">West</Nav.Link>
              <Nav.Link href="/recommendation">Recommendations</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <DropdownButton 
            title="Settings" 
            size="sm" 
            variant="secondary"
            menuVariant="dark"
            drop="down"
            align="end"
            className="me-4"
          >
              <Dropdown.Item href="/account">Account</Dropdown.Item>
          </DropdownButton>

        </Container>
      </Navbar>
    </div>
  );
}

export default Navibar;