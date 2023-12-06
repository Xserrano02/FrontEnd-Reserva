import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function SobreNosotros() {
    return (
        <>
                <Container fluid style={{ backgroundColor: 'black', color: 'white', padding: '100px', textAlign: "justify" }}>
            <Row>
                <Col md={6} style={{ textAlign: 'justify', padding: 50 }}>  
                    <h2 style={{textAlign: 'center' }}>Sobre Nosotros</h2>
                    <p>
                        Fundada en [año de fundación], nuestra empresa se ha destacado en [tu especialidad o servicio]. A lo largo de los años, hemos crecido y evolucionado, siempre manteniendo nuestro compromiso con la calidad y la innovación. Nuestro equipo de profesionales altamente calificados se dedica a [alguna actividad específica o servicio destacado].
                    </p>
                    <p>
                        Con una fuerte presencia en [mercados o ubicaciones], nos hemos convertido en una referencia en el sector. Valoramos las relaciones a largo plazo con nuestros clientes y nos esforzamos por superar sus expectativas en cada proyecto.
                    </p>
                </Col>
                <Col md={6} className="text-justify" style={{ textAlign: 'justify', padding: 50 }}>
                    <h2 style={{ textAlign: 'center'}}>Misión</h2>
                    <p>
                        Nuestra misión es proporcionar La mejor experiencia. Nos enfocamos en [aspectos clave de tu misión, como la innovación, sostenibilidad, servicio al cliente, etc.]. 
                    </p>
                    <p>
                        Creemos en [valores fundamentales de la empresa, como la integridad, la responsabilidad social, la excelencia, etc.]. Estamos comprometidos con [objetivos a largo plazo o visiones de la empresa].
                    </p>
                </Col>
            </Row>
        </Container>


        <Container fluid style={{ 
            background: 'linear-gradient(to right, #8b0000, #000000)',
            color: 'white', 
            padding: '150px', 
            textAlign: 'justify' 
        }}>
            <h2 style={{ textAlign: 'center' }}>
                Nuestro deber es poder mantenerte cómodo, confortable y seguro durante tu estancia con nosotros y no tengas que preocuparte de nada más que disfrutar. GeekTech Rent a Car 20 años siendo los mejores
            </h2>
        </Container>
        </>




    );
}

export default SobreNosotros;
