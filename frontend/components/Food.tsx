import { Card, Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";

interface Props {
    name: string,
    calories: string
    description: string
}

function Food({ name, calories, description } : Props) {
    const [checked, setChecked] = useState(false);

    function toggle(event : any) {
        setChecked(!checked)
        event.currentTarget.checked = checked
        console.log('checked')
    }

    return (
        <Card style={{ width: '40rem' }} className="my-3 bg-secondary bg-gradient text-light">
            <Container>
                <Row className="align-items-center">
                <Col xs lg="10">
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-light">Calories: {calories}</Card.Subtitle>
                    <Card.Text>
                        Description: {description}
                    </Card.Text>
                    </Card.Body>
                </Col>
                <Col xs lg="2">
                <Button
                    variant={checked ? 'danger' : 'secondary'}
                    onClick={toggle} value={"Like"}>
                    Like
                </Button>
                </Col>
                </Row>
            </Container>
        </Card>
    );
}

export default Food;