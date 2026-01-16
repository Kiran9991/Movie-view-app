import Allroutes from "./routes/Allroutes.jsx";
import MainNavBar from "./components/MainNavbar.jsx";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header.jsx";

function App() {

  return (
    <>
    <Header/>
      {/* <MainNavBar /> */}
      <Allroutes />
    </>
  );
}

export default App;
