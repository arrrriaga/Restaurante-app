import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import mainHamburger from "../Images/mainHamburger.jpg";
import suprema from "../Images/suprema.png";
import "../App.css";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <Container fluid>
      <Row
        className="text-center "
        style={{
          color: "white",
          height: "45vh",
          backgroundImage: `url(${mainHamburger})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
        }}
      >
        <Col className="text-center ">
          <Row style={{ height: "100%" }}>
            <Col style={{ margin: "auto" }}>
              <Row>
                <h1>¿Antojo de una hamburguesa?</h1>
                <h5>
                  Reserva a través del siguiente botón o al whatsapp 777 123
                  4567
                </h5>
              </Row>
              <Row>
                <Col>
                  <NavLink className="btn btn-light" size="lg" to={`/reservar`}>
                    Reservar
                  </NavLink>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row
        className=" d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: "white",
          paddingLeft: "2vw",
          paddingRight: "2vw",
        }}
      >
        <Col
          sm={4}
          style={{
            color: "white",
            height: "30vh",
            backgroundImage: `url(${suprema})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Col>
        <Col sm={8}>
          <Row className="text-center">
            <h2 style={{ color: "red" }}>
              5 años de brindar hamburguesas deliciosas y un servicio
              excepcional.
            </h2>
          </Row>
          <Row>
            <p style={{ fontSize: "20px", color: "green" }}>
              ¿Te gustan las hamburguesas deliciosas y hechas con ingredientes
              frescos y de alta calidad? ¡Te esperamos en Las hamburguesas del
              Don! No somos un restaurante de comida rápida, damos buena comida
              rápido.
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
