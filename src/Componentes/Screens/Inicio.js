import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Carousel, Card, Button } from 'react-bootstrap';
import SobreNosotros from "./Subcomponentes/SobreNosotros";
import Caro from "./Subcomponentes/Carousel";

function Inicio() {
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
            <Carousel data-aos="fade-up">                
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://img.freepik.com/psd-gratis/plantilla-diseno-banner-alquiler-coches-realista_23-2149438682.jpg?w=1480&t=st=1701977527~exp=1701978127~hmac=2d90c7946e7d2576f2a6fd0aa27ac2f7fea317f680d3c0da7358937a02e6ec8b"
                    alt="slide"
                />
            </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/psd-gratis/plantilla-portada-facebook-autos-alquiler-autos_106176-2473.jpg?w=1800&t=st=1701977413~exp=1701978013~hmac=332f85ed01697eac90111dd1657f01af8013d1848e723d826a1febe69bbd6404"
                        alt="slide"
                    />
                </Carousel.Item>

            </Carousel>

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
      
            <SobreNosotros data-aos="fade-left"/>
            <Caro data-aos="fade-right"/>
        </div>
    );
}

export default Inicio;
