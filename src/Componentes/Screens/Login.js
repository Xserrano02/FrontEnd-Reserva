import React from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import '../../Componentes/Estilos/Login.css'; // Asegúrate de que este archivo CSS está correctamente enlazado

function Login() {
  return (
    <Container fluid className="p-0 vh-100 login-container">
      <Row className="g-0 vh-100">
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <div className="login-form">
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
