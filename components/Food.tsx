import { Card } from "react-bootstrap";

interface Props {
    name: string,
    calories: number
}

function Food({ name, calories } : Props) {
    return (
        <Card style={{ width: '18rem' }} className="my-3 bg-dark text-light">
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Calories: {calories}</Card.Subtitle>
            <Card.Text>
                Eat {name} to get {calories} calories
            </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Food;