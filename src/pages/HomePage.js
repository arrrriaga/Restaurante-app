import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import mainHamburger from "../Images/mainHamburger.jpg";
import "../App.css";

const HomePage = () => {
  return (
    <Container fluid>
      <Row
        className="text-center "
        style={{
          color: "white",
          height: "90vh",
          backgroundImage: `url(${mainHamburger})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
        }}
      >
        <Col className="text-center d-flex justify-content-center">
          <Row style={{ margin: "auto" }}>
            <h1>¿Antojo de una hamburguesa?</h1>
            <h5>
              Reserva a través del siguiente botón o al whatsapp 777 123 4567
            </h5>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
