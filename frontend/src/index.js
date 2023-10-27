import React from "react";
import Modal from "react-modal";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./style.css";
import Footer from "./components/footer/footer";
import ClienteRoute from "./routes/cliente-route";
import PublicRoutes from "./routes/public-routes";
import Header from "./components/header/header";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <ClienteRoute />
        <PublicRoutes />
        <Footer />
      </div>
    </Router>
  );
};

Modal.setAppElement("#app");
ReactDOM.render(<App />, document.getElementById("app"));
