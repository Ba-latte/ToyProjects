import '../css/Navbars.css';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ReactComponent as Ricola_logo } from "../../src/assets/ricola_logo.svg";
import { CartFill, CircleFill } from 'react-bootstrap-icons';


// 내비게이션 컴포넌트
function Navigation() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">
                    {/* <Ricola_logo height="30" /> */}
                    HerbVista Sweets
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        {/* <Nav.Link href="#link">Detail</Nav.Link> */}
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#All-Products">All Products</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#Herb-Series">Herb Series</NavDropdown.Item>
                            <NavDropdown.Item href="#Fruit-Series">Fruit Series</NavDropdown.Item>
                            <NavDropdown.Item href="#Cocktail-Series">Cocktail Series</NavDropdown.Item>
                            {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                    <button className="button-cart">
                        <CartFill /> Cart <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                    </button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
