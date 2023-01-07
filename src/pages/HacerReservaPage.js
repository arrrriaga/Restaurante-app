import React from "react";
import { Container } from "react-bootstrap";
import FormularioComponent from "../components/Formulario";

const HacerReservaPage = () => {
  return (
    <>
      <header className="text-center my-5">
        <h1>Crear nueva reservación</h1>
      </header>
      <section>
        <article style={{ margin: "auto" }}>
          <Container>
            <FormularioComponent
              tipo={{
                tipo: "cliente",
              }}
            />
          </Container>
        </article>
      </section>
    </>
  );
};

export default HacerReservaPage;
