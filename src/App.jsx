// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Anecdotas from './components/Anecdotas.jsx';
import Inicio from './components/Inicio.jsx';
import AcercaDe from './components/AcercaDe.jsx';
import Abandono from './components/Abandono.jsx';
import Abnegacion from './components/Abnegacion.jsx';
import Aborto from './components/Aborto.jsx';
import Abuso from './components/Abuso.jsx';
import Accidente from './components/Accidente.jsx'
import Aceptacion from './components/Aceptacion.jsx';
import Actitud from './components/Actitud.jsx';
import Actividad from './components/Actividad.jsx';
import Acusacion from './components/Acusacion.jsx';
import Admiracion from './components/Admiracion.jsx';
import Adopcion from './components/Adopcion.jsx';
import Adulacion from './components/Adulacion.jsx';
import Adversario from './components/Adversario.jsx';
import Adversidad from './components/Adversidad.jsx';
import Advertencia from './components/Advertencia.jsx';
import Agradecimiento from './components/Agradecimiento.jsx';
import AguaInagotable from './components/AguaInagotable.jsx';
import Aguila from './components/Aguila.jsx';
import Ajustamiento from './components/Ajustamiento.jsx';
import Alabanza from './components/Alabanza.jsx';
import Alcohol from './components/Alcohol.jsx';











const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Anecdotas} />
        <Route path="/inicio" component={Inicio} />
        <Route path="/acerca-de" component={AcercaDe} />
        <Route path="/tema/abandono" component={Abandono} />
        <Route path="/tema/abnegacion" component={Abnegacion} />
        <Route path="/tema/aborto" component={Aborto} />
        <Route path="/tema/abuso" component={Abuso} />
        <Route path="/tema/accidente" component={Accidente} />
        <Route path="/tema/aceptacion" component={Aceptacion} />
        <Route path="/tema/actitud" component={Actitud} />
        <Route path="/tema/actividad" component={Actividad} />
        <Route path="/tema/acusacion" component={Acusacion} />
        <Route path="/tema/admiracion" component={Admiracion} />
        <Route path="/tema/adopcion" component={Adopcion} />
        <Route path="/tema/adulacion" component={Adulacion} />
        <Route path="/tema/adversario" component={Adversario} />
        <Route path="/tema/adversidad" component={Adversidad} />
        <Route path="/tema/advertencia" component={Advertencia} />
        <Route path="/tema/agradecimiento" component={Agradecimiento} />
        <Route path="/tema/agua-inagotable" component={AguaInagotable} />
        <Route path="/tema/aguila" component={Aguila} />
        <Route path="/tema/ajustamiento" component={Ajustamiento} />
        <Route path="/tema/alabanza" component={Alabanza} />
        <Route path="/tema/alcohol" component={Alcohol} />
        
      </Switch>
    </Router>
  );
};

export default App;
