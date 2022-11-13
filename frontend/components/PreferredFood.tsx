import { Card, Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
interface Props {
    name: string,
    calories: string
    location: string
}

function PreferredFood({ name, calories, location } : Props) {

    return (
        <Card style={{ width: '40rem' }} className="my-3 bg-secondary bg-gradient text-light">
            <Container>
                <Row className="align-items-center">
                <Col xs lg="10">
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-light">Calories: {calories}</Card.Subtitle>
                    <Card.Text>
                        Location: {location}
                    </Card.Text>
                    </Card.Body>
                </Col>
                <Col xs lg="2">
                </Col>
                </Row>
            </Container>
        </Card>
    );
}

export default PreferredFood;