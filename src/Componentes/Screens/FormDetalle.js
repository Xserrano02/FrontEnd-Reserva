import React, { useState } from 'react';
import { Form, Button,img } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { useLocation } from 'react-router-dom';



function FormDetalle() {
    const [emailEnviado, setEmailEnviado] = useState(false);
    const [mensajeError, setMensajeError] = useState('');
    const location = useLocation();
    const { carroSeleccionadoId } = location.state || {};

    console.log(carroSeleccionadoId); // Para ver específicamente el ID del carro
    console.log('Estado recibido en FormDetalle:', location.state);


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dc078ni', 'template_t50iyy6', e.target, 'GWyvQMqNtUo0fxveb')
            .then((result) => {
                console.log(result.text);
                // Manejar confirmación aquí
                setEmailEnviado(true);
                setMensajeError('');
            }, (error) => {
                console.log(error.text);
                // Manejar errores aquí
                setMensajeError('Error al enviar el correo. Por favor, inténtelo de nuevo.');
                setEmailEnviado(false);
            });
    }



    const [formData, setFormData] = useState({
        nombre: '',
        tipo: '',
        nacionalidad: '',
        email: '',
        tiempo: '',
        empresaOpersona: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, como enviar los datos a un servidor
        console.log(formData);
    };

    return (

        <div className='container mb-5 col-4' style={{marginTop: "5rem", borderRadius:"10px",padding:"3rem",background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 29%, rgba(93,3,0,1) 63%)"    }}>
            <Form onSubmit={sendEmail} >

            <div className="card-header" style={{color: "white"}}>{carroSeleccionadoId}</div>
            <img src="https://www.elcarrocolombiano.com/wp-content/uploads/2022/01/kia-ev6-what-car-carro-del-an%CC%83o.jpg" className="img-thumbnail mb-2" alt="..."/>


            <Form.Group className="mb-3">
                <Form.Label style={{color: "white"}} >Nombre:</Form.Label>
                <Form.Control
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label style={{color: "white"}}>Tipo:</Form.Label>
                <Form.Select name="tipo" value={formData.tipo} onChange={handleChange}>
                    <option value="">Seleccione una opción</option>
                    <option value="tipo1">Tipo 1</option>
                    <option value="tipo2">Tipo 2</option>
                    {/* Más opciones */}
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label style={{color: "white"}}>Nacionalidad:</Form.Label>
                <Form.Control
                    type="text"
                    name="nacionalidad"
                    value={formData.nacionalidad}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label style={{color: "white"}}>Email:</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label style={{color: "white"}}>Tiempo:</Form.Label>
                <Form.Control
                    type="text"
                    name="tiempo"
                    value={formData.tiempo}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label style={{color: "white"}}>Empresa o Persona:</Form.Label>
                <Form.Control
                    type="text"
                    name="empresaOpersona"
                    value={formData.empresaOpersona}
                    onChange={handleChange}
                />
            </Form.Group>
        {emailEnviado && <div style={{ color: 'white' }}>Correo enviado exitosamente.</div>}
        {mensajeError && <div style={{ color: 'white' }}>{mensajeError}</div>}

            <Button className='custom-button' type="submit">
                Enviar
            </Button>
        </Form>
        </div>


    );
}

export default FormDetalle;