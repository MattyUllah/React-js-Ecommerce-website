import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './Component/Cart';
import Buy from './Component/Buy';
import Enav from './Component/Enav';
import Contact from './Component/Contact';
import Signin from './Component/Signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Enav />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Signin" element={<Signin />} />

      </Routes>
    </Router>
  );
}

export default App;
