import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Componentes/Screens/Login';
import Inicio from './Componentes/Screens/Inicio';
import Menu from './Componentes/Screens/Subcomponentes/Menu';
import Footer from './Componentes/Screens/Subcomponentes/Footer';
import Reservas from './Componentes/Screens/Reservas';
import Usuarios from './Componentes/Screens/Usuarios';

function App() {
  return (
    <div className="App">
      <Router>

          <Menu />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/usuarios" element={<Usuarios />} />
          </Routes>
          <Footer />

      </Router>
    </div>
  );
}

export default App;