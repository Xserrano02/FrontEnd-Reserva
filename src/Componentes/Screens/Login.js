// Login.js
import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import '../../Componentes/Estilos/Login.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import keycloak from '../Context/ContextKeyClock'; // Asegúrate de que la ruta sea correcta

function Login() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 2000 });

        const updateAuthenticationStatus = () => {
            setIsAuthenticated(keycloak.authenticated);
            if (keycloak.authenticated) {
                // Redirige y recarga la página
                window.location.href = '/';
            }
        };

        keycloak.onAuthSuccess = updateAuthenticationStatus;
        keycloak.onAuthLogout = updateAuthenticationStatus;

        updateAuthenticationStatus();
    }, []);

    const handleLogin = () => {
        if (!isAuthenticated) {
            keycloak.login();
        }
    };

    if (!keycloak) {
        return <div>Cargando...</div>;
    }

    return (
        <Container fluid className="p-0 vh-100 login-container">
            <Row className="g-0 vh-100">
                <Col md={6} className="d-flex align-items-center justify-content-center">
                    <div className="login-form" data-aos="zoom-in">
                        <h2 className="text-center mb-4">Iniciar Sesión</h2>
                        <Form>
                            {/* Tus campos de formulario aquí */}
                            <Button className="w-100 mb-3 custom-login-button" onClick={handleLogin}>
                                Iniciar Sesión
                            </Button>
                            {/* Tus otros botones de inicio de sesión aquí */}
                        </Form>
                    </div>
                </Col>
                <Col md={6} className="login-image"></Col>
            </Row>
        </Container>
    );
}

export default Login;
