import React from "react";
import { Navbar, Nav, Container, Carousel, Card, Button } from 'react-bootstrap';
import SobreNosotros from "./Subcomponentes/SobreNosotros";
import Caro from "./Subcomponentes/Carousel";

function Inicio() {

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
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/psd-gratis/plantilla-portada-facebook-autos-alquiler-autos_106176-2473.jpg?w=1800&t=st=1701843919~exp=1701844519~hmac=49bd9428edbaef25282af1f2ee64943073523e77b0cc77309e26f026f95dd94b"
                        alt="slide"
                    />
                </Carousel.Item>

            </Carousel>

            <Container className="my-4">
                <h2 className="text-center mb-4">Nuestra flota</h2>
                <div className="d-flex flex-wrap justify-content-around">
                    {carros.map((carro, index) => (
                        <Card key={index} style={{ width: '18rem' }} className="mb-4">
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
      
      <SobreNosotros/>

      <Caro/>
    </div>
  );
}

export default Inicio;
