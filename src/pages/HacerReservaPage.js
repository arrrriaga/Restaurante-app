import React from "react";
import { Button, ButtonGroup, Form, Table } from "react-bootstrap";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

const HacerReservaPage = () => {
  const obtenerReservas = async () => {
    const resp = await getDocs(collection(db, "reservas"));
    const data = resp.docs.map((reserva) => ({
      id: reserva.id,
      ...reserva.data(),
    }));
    console.log("Reservas obtenidas: ", data);
  };

  return (
    <>
      <header>
        <h1>Crear nueva reservación</h1>
      </header>
      <section>
        <article>
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

            <ButtonGroup aria-label="Basic example">
              <Button variant="primary" onClick={obtenerReservas}>
                Obtener reservas
              </Button>
              <Button variant="success">Crear reservación</Button>
            </ButtonGroup>
          </Form>
        </article>
      </section>
      <section>
        <article>
          <h1>A continuación se observan las reservaciones creadas</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </article>
      </section>
    </>
  );
};

export default HacerReservaPage;
