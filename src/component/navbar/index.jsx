import React from "react";
import { Navbar, Container, Button, Form, Nav, NavDropdown } from "react-bootstrap";
import { BsFillPersonLinesFill, BsFillCartPlusFill, BsFillHeartFill } from "react-icons/bs";

const index = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" style={{ marginLeft: 20, marginRight: 20 }}>
            <img src="https://cdn.shoplightspeed.com/shops/645035/files/40417680/logo-estetico-horizontal-1.svg" style={{ width: 150 }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#action1" style={{ textAlign: "center" }}>
                <BsFillPersonLinesFill style={{ fontSize: 25 }} />
                <div>Login</div>
              </Nav.Link>

              <Nav.Link href="#" disabled style={{ textAlign: "center" }}>
                <BsFillHeartFill style={{ fontSize: 24 }} />
                <div>WishList</div>
              </Nav.Link>

              <Nav.Link href="#" disabled style={{ textAlign: "center" }}>
                <BsFillCartPlusFill style={{ fontSize: 25 }} />
                <div>Cart</div>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default index;
