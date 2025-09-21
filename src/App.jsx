import { ToastContainer } from "react-toastify";
import OrderPizza from "./components/OrderPizza";
import Home from "./components/Home.jsx";
import "./App.css";

function App() {
  return (
    <>
      {/** <OrderPizza /> */}
      <Home />
      <ToastContainer />
    </>
  );
}

export default App;
