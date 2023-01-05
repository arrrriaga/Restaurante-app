import React from "react";
import { Button, Form } from "react-bootstrap";

const HacerReservaPage = () => {
  return (
    <>
      <header>
        <h1>Crear nueva reservación</h1>
      </header>
      <Form>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="apellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu apellido" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="personas">
          <Form.Label>Número de personas</Form.Label>
          <Form.Control type="number" placeholder="Número de personas" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="fecha">
          <Form.Label>Fecha a reservar</Form.Label>
          <Form.Control type="date" placeholder="Fecha" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="hora">
          <Form.Label>Hora a reservar</Form.Label>
          <Form.Control type="time" placeholder="Hora de reservación" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default HacerReservaPage;
