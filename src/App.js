
import './App.css';
import HomePage from "./pages/HomePage"
import Header from "./component/Header"
import {Outlet } from "react-router-dom"
import {Container} from "@mui/material"

function App() {
  return (
    <main>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </main>
  );
}

export default App;
