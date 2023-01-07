import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Swal from "sweetalert2";

const HacerReservaPage = () => {
  const [form, setForm] = useState({
    fecha: "",
    nombre: "",
    apellido: "",
    cel: "",
    personas: 0,
    hora: "",
  });

  const crearReserva = async (event) => {
    const coleccionReservas = collection(db, "reservas");
    addDoc(coleccionReservas, form);
    Swal.fire(
      "¡Estamos muy emocioados por recibirte!",
      "¡Reservación creada con éxito a reserva de disponibilidad! Te contactaremos a tu teléfono en caso no haya espacios disponibles.",
      "success"
    );
    event.target.reset();
  };

  return (
    <>
      <header className="text-center my-5">
        <h1>Crear nueva reservación</h1>
      </header>
      <section>
        <article style={{ margin: "auto" }}>
          <Container>
            <Form>
              <Row>
                <Col sm={4}>
                  <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresa tu nombre"
                      value={form.nombre}
                      onChange={(e) =>
                        setForm({ ...form, nombre: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col sm={4}>
                  <Form.Group className="mb-3" controlId="apellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresa tu apellido"
                      value={form.apellido}
                      onChange={(e) =>
                        setForm({ ...form, apellido: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col sm={4}>
                  <Form.Group className="mb-3" controlId="cel">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresa tu celular"
                      value={form.cel}
                      onChange={(e) =>
                        setForm({ ...form, cel: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="fecha">
                    <Form.Label>Fecha a reservar</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Fecha"
                      value={form.fecha}
                      onChange={(e) =>
                        setForm({ ...form, fecha: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="hora">
                    <Form.Label>Hora a reservar</Form.Label>
                    <Form.Control
                      type="time"
                      placeholder="Hora de reservación"
                      value={form.hora}
                      onChange={(e) =>
                        setForm({ ...form, hora: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="personas">
                    <Form.Label># de personas</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Número de personas"
                      value={form.personas}
                      onChange={(e) =>
                        setForm({ ...form, personas: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col className=" d-flex align-items-center justify-content-center">
                  <Button variant="success" onClick={crearReserva}>
                    Crear reservación
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </article>
      </section>
    </>
  );
};

export default HacerReservaPage;
