import { ToastContainer } from "react-toastify";
import OrderPizza from "./components/OrderPizza";
import Home from "./components/Home.jsx";
import Success from "./components/Success.jsx";
import { useState } from "react";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      {currentPage === "home" && (
        <Home goToOrder={() => setCurrentPage("order")} />
      )}
      {currentPage === "order" && (
        <OrderPizza onSuccess={() => setCurrentPage("success")} />
      )}
      {currentPage === "success" && <Success />}
      <ToastContainer />
    </>
  );
}

export default App;
