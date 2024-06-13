import React from 'react';
import { Carousel } from 'react-bootstrap';
import Products from '../Modules/Products';

const Home = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        src="https://picsum.photos/seed/picsum1/800/400"
                        width="100%"
                        height="400px"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="https://picsum.photos/seed/picsum2/800/400"
                        width="100%"
                        height="400px"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="https://picsum.photos/seed/picsum3/800/400"
                        width="100%"
                        height="400px"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Products />
        </>
    );
}

export default Home;
