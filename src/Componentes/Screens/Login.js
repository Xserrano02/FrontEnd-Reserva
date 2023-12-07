import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Keycloak from 'keycloak-js';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import '../../Componentes/Estilos/Login.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const keycloak = new Keycloak({
    url: 'http://localhost:9595/',
    realm: 'Reservacion-ID',
    clientId: 'Reservation-app'
});

function Login() {
    const [keycloakAuth, setKeycloakAuth] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 2000 });

        const initKeycloak = async () => {
            try {
                const authenticated = await keycloak.init({ onLoad: 'login-required' });
                if (authenticated) {
                    setKeycloakAuth(keycloak);
                    navigate('/'); 
                } else {
                    console.log('Usuario no autenticado');
                }
            } catch (error) {
                console.error('Error al inicializar Keycloak:', error);
            }
        };

        initKeycloak();
    }, [navigate]);

    if (!keycloakAuth) {
        return <div>Cargando...</div>; 
    }

    return (
         <Container fluid className="p-0 vh-100 login-container">
            <Row className="g-0 vh-100">
                <Col md={6} className="d-flex align-items-center justify-content-center">
                    <div className="login-form" data-aos="zoom-in">
                        <h2 className="text-center mb-4">Iniciar Sesión</h2>
                        <Form>
                            <Form.Group id="email" className="mb-3">
                                <Form.Label>Correo Electrónico</Form.Label>
                                <Form.Control className="form-control-lg" type="email" placeholder="Ingresa tu correo" required />
                            </Form.Group>
                            <Form.Group id="password" className="mb-3">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control className="form-control-lg" type="password" placeholder="Ingresa tu contraseña" required />
                            </Form.Group>
                            <Button className="w-100 mb-3 custom-login-button" type="submit">
                                Ingresar
                            </Button>
                            <Button className="w-100 mb-2 btn-google" type="button">
                                Iniciar Sesión con Google
                            </Button>
                            <Button className="w-100 btn-facebook" type="button">
                                Iniciar Sesión con Facebook
                            </Button>
                        </Form>
                    </div>
                </Col>
                <Col md={6} className="login-image"></Col>
            </Row>
        </Container>
    );
}

export default Login;
