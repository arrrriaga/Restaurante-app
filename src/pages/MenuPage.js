import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import suprema from "../Images/suprema.png";

const MenuPage = () => {
  return (
    <Container>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src={suprema}
            style={{ height: "15vh", width: "10vw" }}
          />
          <Card.Body>
            <Card.Title>Pizza Margherita</Card.Title>
            <Card.Text>Tomato sauce, mozzarella, and fresh basil.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={suprema}
            style={{ height: "15vh", width: "10vw" }}
          />
          <Card.Body>
            <Card.Title>Spaghetti Bolognese</Card.Title>
            <Card.Text>Ground beef, tomatoes, and spaghetti.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={suprema}
            style={{ height: "15vh", width: "10vw" }}
          />
          <Card.Body>
            <Card.Title>Fried Rice</Card.Title>
            <Card.Text>
              Classic Chinese dish with rice, vegetables, and your choice of
              protein.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src={suprema}
            style={{ height: "15vh", width: "10vw" }}
          />
          <Card.Body>
            <Card.Title>Taco Platter</Card.Title>
            <Card.Text>
              Your choice of protein, served with tortillas, lettuce, and
              toppings.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={suprema}
            style={{ height: "15vh", width: "10vw" }}
          />
          <Card.Body>
            <Card.Title>BLT Sandwich</Card.Title>
            <Card.Text>Bacon, lettuce, and tomato on toasted bread.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={suprema}
            style={{ height: "15vh", width: "10vw" }}
          />
          <Card.Body>
            <Card.Title>Grilled Cheese Sandwich</Card.Title>
            <Card.Text>
              Melted cheese between two slices of toasted bread.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default MenuPage;
