import { ToastContainer } from "react-toastify";
import OrderPizza from "./components/OrderPizza";
import Home from "./components/Home.jsx";
import Success from "./components/Success.jsx";
import "./App.css";

function App() {
  return (
    <>
      {/** <OrderPizza /> */}
      {/** <Home /> */}
      <Success />
      <ToastContainer />
    </>
  );
}

export default App;
