import { Card } from "react-bootstrap";

interface Props {
    name: string,
    calories: string
    description: string
}

function Food({ name, calories, description } : Props) {
    return (
        <Card style={{ width: '18rem' }} className="my-3 bg-dark bg-gradient text-light">
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Calories: {calories}</Card.Subtitle>
            <Card.Text>
                {description}
            </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Food;