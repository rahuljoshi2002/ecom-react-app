import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

const Products = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            product_name: "Product 1",
            price: 999,
            image: "/logo192.png",
        },
        {
            id: 2,
            product_name: "Product 2",
            price: 1999,
            image: "/logo192.png",
        },
        {
            id: 3,
            product_name: "Product 3",
            price: 2999,
            image: "/logo192.png",
        }
    ]);

    return (
        <Container>
            <Row>
                {items.map((item) => (
                    <Col key={item.id} md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + item.image} />
                            <Card.Body>
                                <Card.Title>{item.product_name}</Card.Title>
                                <Card.Text>${item.price}</Card.Text>
                                <Button>Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Products;
