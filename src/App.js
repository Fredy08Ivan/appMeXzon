import logo from './logo.svg';
import './App.css';
import './componentes/Formularios/styleH.css';
import './componentes/inicio/StyleH.css';
//import './pages/Productos/style.css';
import Header from './componentes/inicio/Header'; import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Formulario from './componentes/Formularios/Registrate';
import Login from './componentes/Formularios/Iniciar Sesion';
import Nosotros from './pages/About Us';
import Help from './componentes/Formularios/Ayuda';
import shipp from './componentes/inicio/shipp';
import Menu from './componentes/Productos_Pagina/Menu-Pro';
import Servicios from './componentes/inicio/Servicios';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/Iniciar Sesion' exact component={Login} />
        <Route path='/Registrate' exact component={Formulario} />
        <Route path='/Menu-Pro' exact component={Menu} />
        <Route path='/Servicios' exact component={Servicios} />
        <Route path='/About Us' exact component={Nosotros} />
        <Route path='/Ayuda' exact component={Help} />
        <Route path='/shipp' exact component={shipp} />
      </div>
    </Router>

  );
}

export default App;
