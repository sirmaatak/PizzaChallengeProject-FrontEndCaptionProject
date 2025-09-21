import { ToastContainer } from "react-toastify";
import OrderPizza from "./components/OrderPizza";
import Home from "./components/Home.jsx";
import Success from "./components/Success.jsx";
import { useState } from "react";
import "./App.css";

function App() {
  //sayfayi tutatn setter
  const [currentPage, setCurrentPage] = useState("home");
  //success sayfasina order bilgisini gondermek icin setter
  const [orderSummary, setOrderSummary] = useState(null);

  return (
    <>
      {currentPage === "home" && (
        <Home goToOrder={() => setCurrentPage("order")} />
      )}
      {currentPage === "order" && (
        <OrderPizza
          onSuccess={(orderData) => {
            // orderi success sayfasına taşıyoruz
            setOrderSummary(orderData);
            setCurrentPage("success");
          }}
        />
      )}
      {currentPage === "success" && <Success summary={orderSummary} />}
      <ToastContainer />
    </>
  );
}

export default App;
