import React, { useState, useEffect } from 'react';
import { Table, Button, Form, Modal } from 'react-bootstrap';

function Vehiculos() {
    const [vehiculos, setVehiculos] = useState([]);
    const [nuevoVehiculo, setNuevoVehiculo] = useState({ marca: '', modelo: '', anio: '', urlImagen: '', precio_por_dia: 0 });
    const [vehiculoEditar, setVehiculoEditar] = useState({});
    const [showModal, setShowModal] = useState(false);

    const obtenerVehiculos = () => {
        fetch('https://localhost:44379/vehiculos/Listar')
            .then(response => response.json())
            .then(data => setVehiculos(data))
            .catch(error => console.error('Error:', error));
    };

    const agregarVehiculo = (e) => {
        e.preventDefault();
        fetch('https://localhost:44379/vehiculos/Agregar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevoVehiculo),
        }).then(() => {
            obtenerVehiculos();
            setNuevoVehiculo({ marca: '', modelo: '', anio: '', urlImagen: '', precio_por_dia: 0 });
        });
    };

    const mostrarModalEditar = (vehiculo) => {
        setVehiculoEditar(vehiculo);
        setShowModal(true);
    };

    const actualizarVehiculo = () => {
        fetch('https://localhost:44379/vehiculos/Actualizar', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(vehiculoEditar),
        }).then(() => {
            obtenerVehiculos();
            setShowModal(false);
        });
    };

    const eliminarVehiculo = (id) => {
        fetch(`https://localhost:44379/vehiculos/Eliminar/${id}`, {
            method: 'DELETE',
        }).then(() => obtenerVehiculos());
    };

    useEffect(() => {
        obtenerVehiculos();
    }, []);

    return (
        <div className='container' style={{marginTop:'100px', marginBottom:'100px'}}>
            <h3>Agrega un nuevo vehiculo</h3>
            <Form onSubmit={agregarVehiculo}>
                <Form.Group style={{ margin: '20px 0' }}>
                    <Form.Label>Marca</Form.Label>
                    <Form.Control
                        type="text"
                        value={nuevoVehiculo.marca}
                        onChange={(e) => setNuevoVehiculo({ ...nuevoVehiculo, marca: e.target.value })}
                    />
                    <Form.Label>Modelo</Form.Label>
                    <Form.Control
                        type="text"
                        value={nuevoVehiculo.modelo}
                        onChange={(e) => setNuevoVehiculo({ ...nuevoVehiculo, modelo: e.target.value })}
                    />
                    <Form.Label>Modelo</Form.Label>
                    <Form.Control
                        type="text"
                        value={nuevoVehiculo.anio}
                        onChange={(e) => setNuevoVehiculo({ ...nuevoVehiculo, anio: e.target.value })}
                    />
                </Form.Group>

                <Button style={{ margin: '10px 0' }} variant="primary" type="submit">Agregar Vehículo</Button>
            </Form>

            <Table striped bordered hover>
    <thead>
        <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Año</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>
        {vehiculos.map((vehiculo) => (
            <tr key={vehiculo.iD_Vehiculo}>
                <td>{vehiculo.marca}</td>
                <td>{vehiculo.modelo}</td>
                <td>{vehiculo.anio}</td>
                <td>
                    <Button onClick={() => mostrarModalEditar(vehiculo)}>Editar</Button>
                    {' '} 
                    <Button onClick={() => eliminarVehiculo(vehiculo.iD_Vehiculo)} variant="danger">Eliminar</Button>
                </td>
            </tr>
        ))}
    </tbody>
</Table>


            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Vehículo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group style={{ margin: '20px 0' }}>
                        <Form.Control
                            type="text"
                            value={vehiculoEditar.marca}
                            onChange={(e) => setVehiculoEditar({ ...vehiculoEditar, marca: e.target.value })}
                        />
                        <Form.Control
                            type="text"
                            value={vehiculoEditar.modelo}
                            onChange={(e) => setVehiculoEditar({ ...vehiculoEditar, modelo: e.target.value })}
                        />
                        <Form.Control
                            type="text"
                            value={vehiculoEditar.anio}
                            onChange={(e) => setVehiculoEditar({ ...vehiculoEditar, anio: e.target.value })}
                        />

                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={actualizarVehiculo}>
                        Guardar Cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Vehiculos;
