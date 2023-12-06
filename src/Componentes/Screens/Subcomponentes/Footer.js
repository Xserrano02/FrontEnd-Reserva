import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Form } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-black text-white py-4">
            <Container>
                <Row>
                    <Col md={3}>
                        <h5>Detalles de informacion</h5>
                        <p>Para mas informacion sobre cualquier incidente contactarnos al corre reservasgeekTeck.info@tech.com</p>
                    </Col>
                    <Col md={3}>
                        <h5>Enlaces Rápidos</h5>
                        <ListGroup variant="flush">
                            <ListGroupItem action href="#" className="bg-black text-white border-0">Inicio</ListGroupItem>
                            <ListGroupItem action href="#" className="bg-black text-white border-0">Servicios</ListGroupItem>
                            <ListGroupItem action href="#" className="bg-black text-white border-0">Productos</ListGroupItem>
                            <ListGroupItem action href="#" className="bg-black text-white border-0">Contacto</ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <h5>Sobre nuestras promociones puedes suscribirte a nuestr Newsletter aqui</h5>
                        <Form.Control type="text" placeholder="Ingresa tu correo" />
                    </Col>
                    <Col md={3}>
                        <h5>Redes Sociales</h5>
                        <ListGroup variant="flush">
                            <ListGroupItem action href="#" className="bg-black text-white border-0">
                                Facebook
                            </ListGroupItem>
                            <ListGroupItem action href="#" className="bg-black text-white border-0">
                                Twitter
                            </ListGroupItem>
                            <ListGroupItem action href="#" className="bg-black text-white border-0">
                                Instagram
                            </ListGroupItem>
                            <ListGroupItem action href="#" className="bg-black text-white border-0">
                                LinkedIn
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-4">
                        <p>&copy; {new Date().getFullYear()} GeekTech Reservaciones - Todos los derechos reservados</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
