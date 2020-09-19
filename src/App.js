import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Componentes
import Pacientes from './components/Pacientes';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact path="/" component={Pacientes}
        />
      </Switch>

    </Router>
  );
}

export default App;
