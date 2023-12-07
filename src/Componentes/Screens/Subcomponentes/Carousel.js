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
        'https://scontent.fsal10-1.fna.fbcdn.net/v/t39.30808-6/269996455_6897252920345469_8448645946301659581_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=173fa1&_nc_ohc=PqCByIoLOfEAX90USUq&_nc_ht=scontent.fsal10-1.fna&oh=00_AfCjDLslXVWfJ-gYvweHbRV85ggM247M7A_rXimZv1FLQA&oe=65767F80',
        'https://scontent.fsal10-1.fna.fbcdn.net/v/t39.30808-6/269996455_6897252920345469_8448645946301659581_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=173fa1&_nc_ohc=PqCByIoLOfEAX90USUq&_nc_ht=scontent.fsal10-1.fna&oh=00_AfCjDLslXVWfJ-gYvweHbRV85ggM247M7A_rXimZv1FLQA&oe=65767F80'
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
