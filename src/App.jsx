import { ToastContainer } from "react-toastify";
import OrderPizza from "./components/OrderPizza";
import "./App.css";

function App() {
  return (
    <>
      <OrderPizza />
      <ToastContainer />
    </>
  );
}

export default App;
