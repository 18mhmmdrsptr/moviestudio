import { Col, Container, Row, Button } from 'react-bootstrap';

const Intro = () => {
    return(
        <div className="intro">
        <Container className="text-white text-center d-flex justify-content-center align-item-cente border">
            <Row>
            <Col>
            <div className="title">AYO NONTON KESINI</div>
            <div className="title">MUMPUNG PROMO! CUMAN DIBULAN INI</div>
            <div className="introButton mt-4 text-center">
                <Button variant="dark">LIHAT SEMUA</Button>
            </div>
            </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Intro