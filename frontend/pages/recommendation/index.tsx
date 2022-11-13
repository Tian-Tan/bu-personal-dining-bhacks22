import { Row, Col, Container } from "react-bootstrap";
import PreferredFood from "../../components/PreferredFood";

function Recommendation() {
    return (
            <Container style={{ marginLeft: '23rem' }}>
                <Row>
                    <Col lg="7">
                        <h2>1.</h2>
                    </Col>
                    <Col lg="8">
                        <PreferredFood name="Chicken & Asiago Sub" calories="240" location="Warren"/>
                    </Col>
                </Row>
                <Row>
                    <Col lg="7">
                        <h2 className="ml-10">2.</h2>
                    </Col>
                    <Col xs lg="10">
                        <PreferredFood name="Brown Rice" calories="110" location="Marciano"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs lg="7">
                        <h2>3.</h2>
                    </Col>
                    <Col xs lg="10">
                        <PreferredFood name="Hash Brown Potatoes" calories="150" location="Marciano"/>
                    </Col>
                    </Row>
                <Row>
                    <Col xs lg="7">
                        <h2>4.</h2>
                    </Col>
                    <Col xs lg="10">
                        <PreferredFood name="Cosmic Brownie" calories="320" location="Marciano"/>
                    </Col>
                </Row>
            <Row>
                <Col xs lg="7">
                    <h2>5.</h2>
                </Col>
                <Col xs lg="10">
                    <PreferredFood name="BBQ Chicken and Carmelized Onion Pizza" calories="280" location="Marciano"/>
                </Col>
            </Row>
                <Row>
                    <Col xs lg="7">
                        <h2>6.</h2>
                    </Col>
                    <Col xs lg="10">
                        <PreferredFood name="Grilled Chicken Breast" calories="195" location="Marciano, West"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs lg="7">
                        <h2>7.</h2>
                    </Col>
                    <Col xs lg="10">
                        <PreferredFood name="Crunchy Onion Rings" calories="275" location="Warren"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs lg="7">
                        <h2>8.</h2>
                    </Col>
                    <Col xs lg="10">
                        <PreferredFood name="Sesame Honey Salmon" calories="120" location="Marciano"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs lg="7">
                        <h2>9.</h2>
                    </Col>
                    <Col xs lg="10">
                        <PreferredFood name="Chicken & Veggie Stir Fry" calories="85" location="Warren"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs lg="7">
                        <h2>10.</h2>
                    </Col>
                    <Col xs lg="10">
                        <PreferredFood name="Local Homestyle French Fries" calories="315" location="Marciano, Warren, West"/>
                    </Col>
                </Row>
            </Container>
    )
}

export default Recommendation;