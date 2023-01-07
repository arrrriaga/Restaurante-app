import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import suprema from "../Images/suprema.png";
import papas from "../Images/papas.png";

const MenuPage = () => {
  return (
    <Container>
      <CardGroup>
        <Card className="d-flex align-items-center justify-content-center">
          <Card.Img
            variant="top"
            src={suprema}
            style={{ height: "15vh", width: "30%" }}
          />
          <Card.Body>
            <Card.Title>Pizza Margherita</Card.Title>
            <Card.Text>Tomato sauce, mozzarella, and fresh basil.</Card.Text>
          </Card.Body>
        </Card>
        <Card className="d-flex align-items-center justify-content-center">
          <Card.Img
            variant="top"
            src={suprema}
            style={{ height: "15vh", width: "30%" }}
          />
          <Card.Body>
            <Card.Title>Spaghetti Bolognese</Card.Title>
            <Card.Text>Ground beef, tomatoes, and spaghetti.</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card className="d-flex align-items-center justify-content-center">
          <Card.Img
            variant="top"
            src={suprema}
            style={{ height: "15vh", width: "30%" }}
          />
          <Card.Body>
            <Card.Title>Fried Rice</Card.Title>
            <Card.Text>
              Classic Chinese dish with rice, vegetables, and your choice of
              protein.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="d-flex align-items-center justify-content-center">
          <Card.Img
            variant="top"
            src={suprema}
            style={{ height: "15vh", width: "30%" }}
          />
          <Card.Body>
            <Card.Title>Taco Platter</Card.Title>
            <Card.Text>
              Your choice of protein, served with tortillas, lettuce, and
              toppings.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card className="d-flex align-items-center justify-content-center">
          <Card.Img
            variant="top"
            src={suprema}
            style={{ height: "15vh", width: "30%" }}
          />
          <Card.Body>
            <Card.Title>BLT Sandwich</Card.Title>
            <Card.Text>Bacon, lettuce, and tomato on toasted bread.</Card.Text>
          </Card.Body>
        </Card>
        <Card className="d-flex align-items-center justify-content-center">
          <Card.Img
            variant="top"
            src={suprema}
            style={{ height: "15vh", width: "30%" }}
          />
          <Card.Body>
            <Card.Title>Grilled Cheese Sandwich</Card.Title>
            <Card.Text>
              Melted cheese between two slices of toasted bread.
            </Card.Text>
          </Card.Body>
        </Card>
        <CardGroup>
          <Card className="d-flex align-items-center justify-content-center">
            <Card.Img
              variant="top"
              src={papas}
              style={{ height: "15vh", width: "30%" }}
            />
            <Card.Body>
              <Card.Title>Papas fritas cortadas gruesas</Card.Title>
              <Card.Text>
                Estas papas fritas tienen una corte gruesa y son perfectas para
                acompañar una hamburguesa o un perro caliente.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="d-flex align-items-center justify-content-center">
            <Card.Img
              variant="top"
              src={papas}
              style={{ height: "15vh", width: "30%" }}
            />
            <Card.Body>
              <Card.Title>Papas fritas de raíz</Card.Title>
              <Card.Text>
                Estas papas fritas son hechas con raíces como zanahorias,
                remolachas y batatas. Son una opción saludable y deliciosa.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="d-flex align-items-center justify-content-center">
            <Card.Img
              variant="top"
              src={papas}
              style={{ height: "15vh", width: "30%" }}
            />
            <Card.Body>
              <Card.Title>Papas fritas de piel crujiente</Card.Title>
              <Card.Text>
                Estas papas fritas tienen una piel crujiente y crocante por
                fuera y son suaves y cremosas por dentro. Perfectas para
                chuparse los dedos.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </CardGroup>
    </Container>
  );
};

export default MenuPage;
