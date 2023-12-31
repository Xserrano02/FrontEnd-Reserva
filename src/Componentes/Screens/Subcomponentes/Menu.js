import React, { useState, useEffect,useContext } from "react";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../Estilos/Menu.css';
import keycloak from '../../Context/ContextKeyClock';
import { AuthContext } from '../../Context/AuthContext';

function Menu() {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLoginLogoutClick = () => {
        if (isAuthenticated) {
            keycloak.logout({ redirectUri: window.location.origin });
        } else {
            navigate('/Login');
        }
    };

    return (
        <Navbar className={`${scrolled ? "scrolled-navbar" : "custom-navbar"} fixed-top`} expand="lg">
            <Container>
                <Navbar.Brand className="letter-custom" href="/">Reserva Geektech</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="letter-custom" href="/">Inicio</Nav.Link>
                        {isAuthenticated && <Nav.Link className="letter-custom" href="/reservas">Tus reservas</Nav.Link>}
                        {isAuthenticated && <Nav.Link className="letter-custom" href="/usuarios">Usuarios</Nav.Link>}
                    </Nav>
                    <Button className="custom-button" onClick={handleLoginLogoutClick}>
                        {isAuthenticated ? 'Cerrar Sesión' : 'Iniciar Sesión'}
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;
