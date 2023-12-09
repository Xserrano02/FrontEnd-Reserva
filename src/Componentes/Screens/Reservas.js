import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Table } from 'react-bootstrap';

function Reservas() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
    fetchPersonas();
  }, []);

  const fetchPersonas = async () => {
    try {
      const response = await fetch('http://localhost:8080/VisualizarTransacciones', {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidHJhbnNhY2Npb25yZXNvdXJjZWlkIl0sInVzZXJfbmFtZSI6ImNjYWx6YWRpYUB1ZmcuZWR1LnN2IiwiYXV0aG9yaXRpZXMiOlsiVVNFUiJdLCJqdGkiOiJmNDlkMmM5NS0wYjE3LTQ4Y2QtYThjNy0yZTEwNThlZTE1N2IiLCJjbGllbnRfaWQiOiJ0cmFuc2FjY2lvbmFwcCIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdfQ.1XHGAEQPomXv28sT5nivkig5TIyh5Aq_G64SUZu9HCk'
          // Incluye otros encabezados aquí si es necesario
        }
      });
      const data = await response.json();
      const transformedData = data.map(item => ({
        ...item.cliente,
        carrosAlquilados: item.idVehiculo
      }));
      setPersonas(transformedData);
    } catch (error) {
      console.error("Error al obtener datos de la API", error);
    }
  };
  

  return (
    <div>
      <Container className="my-4" data-aos="fade-right">
        <h2 className="text-center mb-4">Nuestra flota</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Nacionalidad</th>
              <th>Carros Alquilados</th>
            </tr>
          </thead>
          <tbody>
            {personas.map((persona, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{persona.nombre}</td>
                <td>{persona.nacionalidad}</td>
                <td>{persona.carrosAlquilados}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Reservas;
