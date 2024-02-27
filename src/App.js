import "./App.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Home from "./pages/Delete";
import AddEdit from "./pages/AddEdit";
import View from "./pages/View";
import About from "./pages/About";

import Hearder from "./components/Header";
import Delete from "./pages/Delete";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Hearder />

        <Routes>
          <Route path="/delete" Component={Delete} />
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
