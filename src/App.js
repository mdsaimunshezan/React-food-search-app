
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './components/Home/Home';
import About from './components/About/About';
import Conteck from './components/Conteck/Conteck';
import PageNotFound from './components/PageNoteFound/PageNotFound';
import Header from './components/Header/Header';
import './App.css';
import Detalse from './components/Detalse/Detalse';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/conteck" component={Conteck} />
          <Route exact path="/detalse/:userId" component={Detalse} />
          <Route exact component={PageNotFound} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
