import "./App.css";
import FooterComponent from "./components/Footer";
import NavbarComponent from "./components/Navbar";
import AppRoutes from "./routers/AppRoutes";

function App() {
  return (
    <>
      <NavbarComponent />
      <main>
        <AppRoutes />
      </main>
      <FooterComponent />
    </>
  );
}

export default App;
