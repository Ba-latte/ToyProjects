import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ReactComponent as Ricola_logo } from "../../src/assets/ricola_logo.svg";


// 내비게이션 컴포넌트
function Navigation() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <Ricola_logo height="30" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        {/* <Nav.Link href="#link">Detail</Nav.Link> */}
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#products/all-products">All Products</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#products/original-natural-herb">Original Natural Herb</NavDropdown.Item>
                            <NavDropdown.Item href="#products/lemon-mint">Lemon Mint</NavDropdown.Item>
                            <NavDropdown.Item href="#products/cranberry">Cranberry</NavDropdown.Item>
                            <NavDropdown.Item href="#products/glacier-fresh-mint">Glacier Fresh Mint</NavDropdown.Item>
                            <NavDropdown.Item href="#products/apple-mint">Apple Mint</NavDropdown.Item>
                            {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
