import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Shop from './Pages/Shop/inde';
import Computadores from './Pages/Shop/computadores';
import NotFund from './Pages/NotFound';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/computadores" element={<Computadores />} />
      <Route path="/*" element={<NotFund/>} />
    </Routes>
  </Router>
  );
}

export default App;
