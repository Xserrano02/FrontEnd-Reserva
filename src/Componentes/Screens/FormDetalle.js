
import React, { useState } from 'react';
import { Form, Button,img } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { useLocation } from 'react-router-dom';



function FormDetalle() {
    const [emailEnviado, setEmailEnviado] = useState(false);
    const [mensajeError, setMensajeError] = useState('');
    const location = useLocation();
    //const { carroSeleccionadoId } = location.state || {};
    const { carroSeleccionado } = location.state || {};
    //console.log(carroSeleccionadoId); // Para ver específicamente el ID del carro
    console.log('Estado recibido en FormDetalle:', location.state);


    const sendEmail = async (e) => {
        e.preventDefault();
    
        // Crear el objeto de datos para enviar
        const emailData = {
            nombre: "nombre", // Aquí podrías querer usar una variable real en lugar de un string estático
            nombreVehiculo: carroSeleccionado.marca + ' ' + carroSeleccionado.modelo,
            email: formData.email,
            reply_to: "GeekTeam", // Asegúrate de que este campo es correcto según tu plantilla de EmailJS
        };
    
        try {
            const result = await emailjs.send('service_dc078ni', 'template_t50iyy6', emailData, 'GWyvQMqNtUo0fxveb');
            console.log(result.text);
            console.log(emailData);
            setEmailEnviado(true);
            setMensajeError('');
        } catch (error) {
            console.error(error.text);
            setMensajeError('Error al enviar el correo. Por favor, inténtelo de nuevo.');
            setEmailEnviado(false);
        }
    }
    



    const [formDatasend, setFormDatasend] = useState({
        clienteId: '2',
        idVehiculo: '2',
        diasReserva: '',
        direccionEntrega: '',    
        transaccionRealizada:"false"
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Llamar a sendEmail y luego a sendPostRequest
        try {
            await sendEmail(e);
            await sendPostRequest();
        } catch (error) {
            console.error('Error durante el envío del formulario:', error);
        }
    };

    const sendPostRequest = async () => {
        const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJjQGdtYWlsLmNvbSIsIm5iZiI6MTcwMjExNzcwNywiZXhwIjoxNzMzNjUzNzA3LCJpYXQiOjE3MDIxMTc3MDd9.FE-v1GE50ng4Oty7xVZEEX6etoUdGKm6lzANyA85NGU";  // Reemplaza esto con tu token real
    
        try {
            const response = await fetch('http://localhost:8080/Reserva', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`  // Agregar el token aquí
                },
                body: JSON.stringify(formDatasend)
            });
    
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
    
            const result = await response.json();
            console.log('Respuesta del servidor:', result);
            // Manejar la respuesta exitosa aquí
        } catch (error) {
            console.error('Error al enviar la solicitud POST:', error);
            // Manejar errores aquí
        }
    };
    

    const [formData, setFormData] = useState({
        nombre: 'NombreEjemplo',
        email: '',
        diasReserva: '',
        direccionEntrega: '',
        nombreVehiculo: carroSeleccionado.marca + ' '+carroSeleccionado.modelo,
        urlCarro:carroSeleccionado.urlImagen
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        // Actualiza formData
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    
        // Decide qué campos deben actualizarse también en formDatasend
        if (name === 'diasReserva' || name === 'direccionEntrega') {
            setFormDatasend(prevFormDatasend => ({
                ...prevFormDatasend,
                [name]: value // Asegúrate de que las claves coincidan con las del objeto formDatasend
            }));
        }
    };

    

    return (

        <div className='container mb-5 col-4' style={{marginTop: "5rem", borderRadius:"10px",padding:"3rem",background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 29%, rgba(93,3,0,1) 63%)"    }}>
            <Form onSubmit={handleSubmit} >

            <div name="nombreVehiculo" className="card-header" style={{color: "white"}}>{carroSeleccionado.marca + ' '+carroSeleccionado.modelo}</div>
            <img src={carroSeleccionado.urlImagen} className="img-thumbnail mb-2" alt="..."/>


            
            
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
                    type="number"
                    name="diasReserva"
                    value={formData.diasReserva}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label style={{color: "white"}}>Direccion de entrega:</Form.Label>
                <Form.Control
                    type="text"
                    name="direccionEntrega"
                    value={formData.direccionEntrega}
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
