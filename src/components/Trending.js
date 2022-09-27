import { Card, Container, Row, Col, Image} from "react-bootstrap";
import endgame from "../assets/images/trending/endgame.jpg";
import infinitywar from "../assets/images/trending/infinitywar.jpg";
import ageofultron from "../assets/images/trending/ageofultron.jpg";
import theavengers from "../assets/images/trending/theavengers.jpg";
import justiceleague from "../assets/images/trending/justiceleague.jpg";
import suicidesquad from "../assets/images/trending/suicidesquad.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br/>
        <h1 className="text-white mt-4">TRENDING MOVIES</h1>
        <br/>
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={endgame} alt="MOVIES" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Avengers: Endgame</Card.Title>
                <Card.Text className="text-left">Superhero Marvel Comics </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={infinitywar} alt="MOVIES" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Avengers: Infinity War</Card.Title>
                <Card.Text className="text-left">Superhero Marvel Comics</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={ageofultron} alt="MOVIES" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">The Avengers: Age of Ultron</Card.Title>
                <Card.Text className="text-left">Superhero Marvel Comics</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={theavengers} alt="MOVIES" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">The Avengers</Card.Title>
                <Card.Text className="text-left">Superhero Marvel Comics</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={justiceleague} alt="MOVIES" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Justice League</Card.Title>
                <Card.Text className="text-left">Superhero DC Comics</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={suicidesquad} alt="MOVIES" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Suicide Squad</Card.Title>
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

export default Trending;
