import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarCarousel = () => {
    const carImages = [
        'https://img.freepik.com/foto-gratis/vista-coche-3d_23-2150796904.jpg?size=626&ext=jpg',
        'https://img.freepik.com/foto-gratis/vista-coche-3d_23-2150796894.jpg?w=826&t=st=1701977957~exp=1701978557~hmac=79909f78820e0fb3e6fd1f0cdcd44328fea1e7a3cf5fc1f3aa1d7207effdeb25',
        'https://img.freepik.com/foto-gratis/coche-3d-fondo-simple_23-2150796868.jpg?w=826&t=st=1701978281~exp=1701978881~hmac=bab693116369e5c38ccfa5a34b367bdeba9b8b012bdd625cefc2907219a29040',
        'https://img.freepik.com/foto-gratis/coche-3d-fondo-simple_23-2150797048.jpg?w=826&t=st=1701978771~exp=1701979371~hmac=451041d653147f114f9ec7cc3e585d34d3a1b7b926bacd6a2252e7b5da27e80c',
        'https://img.freepik.com/foto-gratis/coche-3d-ciudad-vibrante-noche_23-2150796936.jpg?w=826&t=st=1701978803~exp=1701979403~hmac=50c2ee4afd60cc87bd3349852a4ecfe1aaabb814e74ab83cfd7d2c72548e82c2'
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <Carousel data-aos="fade-left" responsive={responsive}>
            {carImages.map((image, index) => (
                <img data-aos="fade-left" className='img-carrusel' style={{width: 635}} key={index} src={image} alt={`Car ${index + 1}`} />
            ))}
        </Carousel>
    );
};

export default CarCarousel;
