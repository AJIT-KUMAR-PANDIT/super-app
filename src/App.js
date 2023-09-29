import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register/Register';


function App() {
  return (
    <>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Register />}  />
            </Routes>
          </div>
        </Router>
    </>
  );
}

export default App;
