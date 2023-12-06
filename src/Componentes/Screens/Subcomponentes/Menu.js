import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../Estilos/Menu.css';

function Menu() {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

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

    const handleLoginClick = () => {
        navigate('/Login');
    };


    return (
        <Navbar className={`${scrolled ? "scrolled-navbar" : "custom-navbar"} fixed-top`} expand="lg">
            <Container>
                <Navbar.Brand className="letter-custom" href="/">Reserva Geektech</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="letter-custom" href="#home">Inicio</Nav.Link>
                        <Nav.Link className="letter-custom" href="#reservas">Tus reservas</Nav.Link>
                    </Nav>
                    <Button className="custom-button" onClick={handleLoginClick}>Iniciar Sesión</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;

