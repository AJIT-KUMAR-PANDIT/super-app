import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register/Register';
import Category from './Pages/Category/Category';
import { useState } from 'react';

function App() {

  
    const storedData = JSON.parse(localStorage.getItem("data")) || {
      name: "",
      userName: "",
      email: "",
      mobile: "",
      reg:""
    };
    const [data, setData] = useState(storedData);

  return (
    <>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Register />}  />
              {/* {data.reg &&  */}
              {/* <Route path="/category" element={<Category />} /> */}
              {/* } */}
           <Route path="/category" element={<Category />} />
              </Routes>
          </div>
        </Router>      
    </>
  );
}

export default App;
