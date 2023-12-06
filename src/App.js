import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Componentes/Screens/Login';
import Inicio from './Componentes/Screens/Inicio';
import Menu from './Componentes/Screens/Subcomponentes/Menu';  
import Footer from './Componentes/Screens/Subcomponentes/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
