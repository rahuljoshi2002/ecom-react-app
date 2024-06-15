import React, { useState, useEffect } from 'react';
import { Container, Table, Spinner, Alert } from 'react-bootstrap';

const Products = ({ title }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:4001/api/category")
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <Container>
                <h1>{title}</h1>
                <Spinner animation="border" />
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <h1>{title}</h1>
                <Alert variant="danger">
                    Failed to load products: {error.message}
                </Alert>
            </Container>
        );
    }

    return (
        <Container>
            <h1>{title}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Thumbnail</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item._id}>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td><img alt={item.title} src={item.thumbnail} height="100" /></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Products;
