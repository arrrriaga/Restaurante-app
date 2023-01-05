import { Container } from "react-bootstrap";
import "./App.css";
import FooterComponent from "./components/Footer";
import NavbarComponent from "./components/Navbar";
import AppRoutes from "./routers/AppRoutes";

function App() {
  return (
    <>
      <NavbarComponent />
      <Container>
        <main>
          <AppRoutes />
        </main>
      </Container>
      <FooterComponent />
    </>
  );
}

export default App;
