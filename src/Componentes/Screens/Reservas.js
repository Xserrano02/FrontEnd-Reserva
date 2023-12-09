import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Card, Button } from 'react-bootstrap';


function Reservas() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
}, []);
const carros = [
    {
        imagen: "https://www.elcarrocolombiano.com/wp-content/uploads/2022/01/kia-ev6-what-car-carro-del-an%CC%83o.jpg",
        nombre: "Nombre del Carro 1",
        modelo: "Modelo 1",
        año: "2021",
        descripcion: "Descripción breve del carro 1."
    },

    {
        imagen: "https://www.elcarrocolombiano.com/wp-content/uploads/2022/01/kia-ev6-what-car-carro-del-an%CC%83o.jpg",
        nombre: "Nombre del Carro 2",
        modelo: "Modelo 2",
        año: "2021",
        descripcion: "Descripción breve del carro 2."
    },

    {
        imagen: "https://www.elcarrocolombiano.com/wp-content/uploads/2022/01/kia-ev6-what-car-carro-del-an%CC%83o.jpg",
        nombre: "Nombre del Carro 2",
        modelo: "Modelo 2",
        año: "2021",
        descripcion: "Descripción breve del carro 2."
    },

];


  return (
      <div >
        <Container className="my-4" data-aos="fade-right">
                <h2 className="text-center mb-4">Nuestra flota</h2>
                <div className="d-flex flex-wrap justify-content-around">
                    {carros.map((carro, index) => (
                        <Card key={index} style={{ width: '18rem' }} className="mb-4" data-aos="zoom-in">
                            <Card.Img variant="top" src={carro.imagen} />
                            <Card.Body>
                                <Card.Title>{carro.nombre}</Card.Title>
                                <Card.Text>
                                    Modelo: {carro.modelo}<br />
                                    Año: {carro.año}<br />
                                    {carro.descripcion}
                                </Card.Text>
                                <Button variant="primary">Reservar</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Container>
      </div>
    );
  }
  
  export default Reservas;
  