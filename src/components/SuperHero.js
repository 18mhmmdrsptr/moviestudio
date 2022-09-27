import { Card, Container, Row, Col, Image} from "react-bootstrap";
import blackwidow from "../assets/images/superhero/blackwidow.jpg";
import captainmarvel from "../assets/images/superhero/captainmarvel.jpg";
import catwoman from "../assets/images/superhero/catwoman.jpg";
import darkphoenix from "../assets/images/superhero/darkphoenix.jpg";
import harleyquinn from "../assets/images/superhero/harleyquinn.jpg";
import wonderwoman from "../assets/images/superhero/wonderwoman.jpg";

const SuperHero = () => {
  return (
    <div>
      <Container>
        <br/>
        <h1 className="text-white mt-4">HERO MOVIES</h1>
        <br/>
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={blackwidow} alt="MOVIES" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Black Widow</Card.Title>
                <Card.Text className="text-left">Superhero Marvel Comics</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={captainmarvel} alt="MOVIES" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Captain Marvel</Card.Title>
                <Card.Text className= "text-left">Superhero Marvel Comics </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={catwoman} alt="MOVIES" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Catwoman</Card.Title>
                <Card.Text className="text-left">Superhero DC Comics</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={darkphoenix} alt="MOVIES" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">X-Men: Dark Phoenix</Card.Title>
                <Card.Text className="text-left">Superhero Marvel Comics</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={harleyquinn} alt="MOVIES" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Harley Quinn: Birds of Prey</Card.Title>
                <Card.Text className="text-left">Superhero DC Comics</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={wonderwoman} alt="MOVIES" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Wonder Woman 1984</Card.Title>
                <Card.Text className="text-left">Superhero DC Comics</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default SuperHero;
