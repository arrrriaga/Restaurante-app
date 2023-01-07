import "../App.css";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
  Table,
} from "react-bootstrap";
import Swal from "sweetalert2";
import { db } from "../firebase/firebase";

const VerReservasPage = () => {
  const [reservas, setReserva] = useState([]);
  const [form, setForm] = useState({
    fecha: "",
    nombre: "",
    apellido: "",
    cel: "",
    personas: 0,
    hora: "",
  });
  const [password, setPassword] = useState("");
  const [showTable, setShowTable] = useState(false);

  const handleSubmit = (event) => {
    const apiKey = `${process.env.REACT_APP_API_KEY}`;
    event.preventDefault();
    if (password === apiKey) {
      setShowTable(true);
    } else {
      alert("Contraseña incorrecta");
    }
  };

  const crearReserva = async () => {
    const coleccionReservas = collection(db, "reservas");
    addDoc(coleccionReservas, form);
    Swal.fire(
      "¡Reservación creada para el cliente!",
      "Favor de contactar al cliente para confirmar su reservación",
      "success"
    );
    obtenerReservas();
  };

  const obtenerReservas = async () => {
    const resp = await getDocs(collection(db, "reservas"));
    const data = resp.docs.map((reserva) => ({
      id: reserva.id,
      ...reserva.data(),
    }));

    setReserva(data);
  };

  const eliminarReserva = async (idReserva) => {
    const documento = doc(db, "reservas", idReserva);
    await deleteDoc(documento);
    obtenerReservas();
  };

  const actualizarReserva = async (idReserva) => {
    const documento = doc(db, "reservas", idReserva);
    await updateDoc(documento, form);
    obtenerReservas();
  };

  const preguntaActualizar = (idReserva) => {
    Swal.fire({
      title:
        "Se actualizará con los datos ingresados en el formulario ¿deseas continuar?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Actualizar",
      denyButtonText: `NO actualizar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        actualizarReserva(idReserva);
        Swal.fire("Reservación actualizada!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Cambios no actualizados", "", "info");
      }
    });
  };

  useEffect(() => {
    obtenerReservas();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="text-center mt-5 mb-3">
        <h1>Esta página es sólo para administradores</h1>
        <h6 style={{ color: "red" }}>
          Para poder probar esta función utilizar la contraseña: papasconqueso
        </h6>
      </header>
      <Container>
        <Row>
          <Col className=" d-flex align-items-center justify-content-center">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col sm={12}>
                  <FormControl
                    className="text-center"
                    type="password"
                    placeholder="Ingrese contraseña"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col
                  sm={12}
                  className="mt-1 d-flex align-items-center justify-content-center"
                >
                  <Button variant="primary" type="submit" size="lg">
                    Acceder
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      {showTable && (
        <>
          <section>
            <article>
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
                          type="number"
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
                    <Col xs={6} md={4}>
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
                    <Col xs={6} md={4}>
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
                    <Col xs={12} md={4}>
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
          <section>
            <article className="text-center mt-3">
              <h1>A continuación se observan las reservaciones creadas</h1>
              <Container>
                <Table striped bordered hover>
                  <thead className="text-center">
                    <tr>
                      <th>Reservación</th>
                      <th>Contacto</th>

                      <th>Acción</th>
                    </tr>
                    {reservas.map((reserva) => (
                      <tr key={reserva.id}>
                        <td>
                          {reserva.fecha}
                          <br /> {reserva.hora}
                          <br /> personas: {reserva.personas}
                        </td>
                        <td>
                          {reserva.nombre} {reserva.apellido}
                          <br />
                          Celular: {reserva.cel}
                        </td>
                        <td>
                          <Button
                            variant="warning"
                            onClick={() => preguntaActualizar(reserva.id)}
                          >
                            Actualizar
                          </Button>{" "}
                          <Button
                            variant="danger"
                            onClick={() => eliminarReserva(reserva.id)}
                          >
                            Borrar
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </thead>
                  <tbody></tbody>
                </Table>
              </Container>
            </article>
          </section>
        </>
      )}
    </>
  );
};

export default VerReservasPage;
