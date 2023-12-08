import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Table, Button } from 'react-bootstrap';

function Usuarios() {



  React.useEffect(() => {
    AOS.init({ duration: 2000 });
}, []);
  const personas = [
    {
        nombre: "Carlos",
        apellido: "González",
        nacionalidad: "Mexicana",
        carrosAlquilados: 2
    },
    {
        nombre: "Sarah",
        apellido: "Smith",
        nacionalidad: "Británica",
        carrosAlquilados: 4
    },
    {
        nombre: "Amit",
        apellido: "Patel",
        nacionalidad: "India",
        carrosAlquilados: 1
    },
    {
        nombre: "Yasmin",
        apellido: "Bouziane",
        nacionalidad: "Marroquí",
        carrosAlquilados: 3
    },
    {
        nombre: "Kenji",
        apellido: "Takahashi",
        nacionalidad: "Japonesa",
        carrosAlquilados: 5
    },
    {
      nombre: "Liam",
      apellido: "O'Brien",
      nacionalidad: "Irlandesa",
      carrosAlquilados: 6
  },
  {
      nombre: "Sophia",
      apellido: "Lopez",
      nacionalidad: "Española",
      carrosAlquilados: 2
  },
  {
      nombre: "Hiroshi",
      apellido: "Sato",
      nacionalidad: "Japonesa",
      carrosAlquilados: 8
  },
  {
      nombre: "Fatima",
      apellido: "Al Fassi",
      nacionalidad: "Marroquí",
      carrosAlquilados: 1
  },
  {
      nombre: "Dmitri",
      apellido: "Ivanov",
      nacionalidad: "Rusa",
      carrosAlquilados: 3
  },
  {
      nombre: "Chen",
      apellido: "Wei",
      nacionalidad: "China",
      carrosAlquilados: 4
  },
  {
      nombre: "Isabella",
      apellido: "Rossi",
      nacionalidad: "Italiana",
      carrosAlquilados: 5
  },
  {
      nombre: "Samuel",
      apellido: "Johnson",
      nacionalidad: "Estadounidense",
      carrosAlquilados: 2
  },
  {
      nombre: "Aisha",
      apellido: "Khan",
      nacionalidad: "Pakistaní",
      carrosAlquilados: 7
  },
  {
      nombre: "Pierre",
      apellido: "Dubois",
      nacionalidad: "Francesa",
      carrosAlquilados: 3
  }
];


    return (
      <div>
        <Container className="my-4" data-aos="fade-right">
    <h2 className="text-center mb-4">Nuestra flota</h2>
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Nacionalidad</th>
                <th>Carros Alquilados</th>
            </tr>
        </thead>
        <tbody>
            {personas.map((persona, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{persona.nombre}</td>
                    <td>{persona.apellido}</td>
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
  



  export default Usuarios;