import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Category from "./Pages/Category/Category";
import Home from "./Pages/Home/Home";
import MoviesPage from "./Pages/Movies/MoviesPage";
import { useState } from "react";

function App() {
  // const storedData = JSON.parse(localStorage.getItem("data")) || {
  //   name: "",
  //   userName: "",
  //   email: "",
  //   mobile: "",
  //   reg:""
  // };
  // const [data, setData] = useState(storedData);

  const RegisterTrueOrFalse = localStorage.getItem("regestrationTrueOrFalse");

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Register />} />

            <Route path="/category" element={<Category />} />

            <Route path="/home" element={<Home />} />

            <Route path="/movies" element={<MoviesPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
