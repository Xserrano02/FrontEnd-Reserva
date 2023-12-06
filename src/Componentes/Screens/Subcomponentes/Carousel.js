import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarCarousel = () => {
    const carImages = [
        'https://cdn.buttercms.com/7H9HebOOQ2CxYT0OKw5p',
        'https://loscoches.com/wp-content/uploads/2021/07/carros-de-lujo-mustang-gt.jpg',
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

    return (
        <Carousel responsive={responsive}>
            {carImages.map((image, index) => (
                <img className='img-carrusel' style={{width: 635}} key={index} src={image} alt={`Car ${index + 1}`} />
            ))}
        </Carousel>
    );
};

export default CarCarousel;