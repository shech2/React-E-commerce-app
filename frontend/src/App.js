import React from "react";

import { Badge, Container } from 'react-bootstrap';

const App = () => {
    return (
        <div>
            <Container>
                <h1>
                    Example heading{'Shop'}
                    <Badge bg="secondary" as="button">
                        New
                    </Badge>
                </h1>
            </Container>
        </div>
    )
};

export default App;