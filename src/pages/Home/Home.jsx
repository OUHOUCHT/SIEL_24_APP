/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Home.css';
import { useEffect } from 'react';

const Home = () => {
  

  const PublicationCard = ({ title, subtitle, id }) => {

   return ( <Col className="animate__animated animate__zoomIn mb-3">
      <Link  to={`/container/${encodeURIComponent(title)}`} className="text-decoration-none  text-center text-light w-100">
        <Card className="h-100">
          <Card.Body id={id} className="d-flex flex-column">
            <div className="pub-size-device text-light">
              <Card.Title  > {title}</Card.Title>
              <Card.Title   > {subtitle}</Card.Title>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );

}

  return (
    <div className="container-content" id="home"  >
      <div className="title-size-device pub-title text-center animate__animated animate__fadeIn pb-5 py-4" >
        <h1 > إصدارات البرلمان</h1>
        <h3>ⵜⵉⵥⵕⵉⴳⵉⵏ ⵏ ⵓⴱⵕⵍⴰⵎⴰⵏ</h3>
      </div>

      <Container >
        <Row xs={1} md={2}  >
          <PublicationCard
            id="chambre_rep"
            title="إصدارات مجلس النواب" 
            subtitle="ⵜⵉⵥⵕⵉⴳⵉⵏ ⵏ ⵓⵙⵇⵇⵉⵎ ⵏ ⵉⵎⵓⵔⴰ"
          />

          <PublicationCard
            id="chambre_cons"
            title="إصدارات مجلس المستشارين"
            subtitle="ⵜⵉⵥⵕⵉⴳⵉⵏ ⵏ ⵓⵙⵇⵇⵉⵎ ⵏ ⵉⵎⵛⵛⵉⵡⴰⵕ"
          />
        </Row>
      </Container>


    </div>
  );
};

export default Home;
