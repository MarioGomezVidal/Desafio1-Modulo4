import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
// import LoginPage from "./components/Form/LoginPage";
// import RegisterPage from "./components/Form/RegisterPage";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      { <Cart /> }
      <Footer />
    </div>
  );
}

export default App;



