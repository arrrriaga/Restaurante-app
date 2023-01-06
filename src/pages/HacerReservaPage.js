import React, { useState } from "react";
import { Button, ButtonGroup, Form, Table } from "react-bootstrap";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

const HacerReservaPage = () => {
  const [reservas, setReserva] = useState([]);
  const [form, setForm] = useState({
    fecha: "",
    nombre: "",
    apellido: "",
    personas: 0,
    hora: "",
  });

  const obtenerReservas = async () => {
    const resp = await getDocs(collection(db, "reservas"));
    const data = resp.docs.map((reserva) => ({
      id: reserva.id,
      ...reserva.data(),
    }));

    setReserva(data);
  };

  const crearReserva = () => {
    const coleccionReservas = collection(db, "reservas");
    addDoc(coleccionReservas, form);
    obtenerReservas();
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
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="apellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu apellido"
                value={form.apellido}
                onChange={(e) => setForm({ ...form, apellido: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="personas">
              <Form.Label>Número de personas</Form.Label>
              <Form.Control
                type="number"
                placeholder="Número de personas"
                value={form.personas}
                onChange={(e) => setForm({ ...form, personas: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fecha">
              <Form.Label>Fecha a reservar</Form.Label>
              <Form.Control
                type="date"
                placeholder="Fecha"
                value={form.fecha}
                onChange={(e) => setForm({ ...form, fecha: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="hora">
              <Form.Label>Hora a reservar</Form.Label>
              <Form.Control
                type="time"
                placeholder="Hora de reservación"
                value={form.hora}
                onChange={(e) => setForm({ ...form, hora: e.target.value })}
              />
            </Form.Group>

            <ButtonGroup aria-label="Basic example">
              <Button variant="primary" onClick={obtenerReservas}>
                Obtener reservas
              </Button>
              <Button variant="success" onClick={crearReserva}>
                Crear reservación
              </Button>
            </ButtonGroup>
          </Form>
        </article>
      </section>
      <section>
        <article>
          <h1>A continuación se observan las reservaciones creadas</h1>
          <Table striped bordered hover>
            <thead className="text-center">
              <tr>
                <th>Fecha</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Personas</th>
                <th>Hora</th>
                <th>Acción</th>
              </tr>
              {reservas.map((reserva) => (
                <tr key={reserva.id}>
                  <td>{reserva.fecha}</td>
                  <td>{reserva.nombre}</td>
                  <td>{reserva.apellido}</td>
                  <td>{reserva.personas}</td>
                  <td>{reserva.hora}</td>
                  <td>
                    <Button variant="warning">Actualizar</Button>{" "}
                    <Button variant="danger">Borrar</Button>
                  </td>
                </tr>
              ))}
            </thead>
            <tbody></tbody>
          </Table>
        </article>
      </section>
    </>
  );
};

export default HacerReservaPage;
