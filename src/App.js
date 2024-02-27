import "./App.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import View from "./pages/View";
import About from "./pages/About";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hearder from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Hearder />
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/add" Component={AddEdit} />
          <Route path="/update/:id" Component={AddEdit} />
          <Route path="/view/:id" Component={View} />
          <Route path="/about" Component={About} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
