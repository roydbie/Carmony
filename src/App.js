import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { Contact } from './Contact';
import { Uitleg } from './Uitleg';
import { NoMatch } from './NoMatch';
import { SpelPagina} from './SpelPagina';
import { Login } from './Login';
import { Layout } from './components/Layout';
import { SingleMulti } from './SingleMulti';
import { Moeilijkheid } from './Moeilijkheid';
import { NavigationBar } from './components/NavigationBar';
import history from './history';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/uiterlijk" component={Contact} />
          <Route path="/spelpagina" component={SpelPagina} />
          <Route path="/uitleg" component={Uitleg} />
          <Route path="/login" component={Login} />
          <Route path="/singlemulti" component={SingleMulti} />
          <Route path="/moeilijkheid" component={Moeilijkheid} />
          <Route component={NoMatch} />

        </Switch>
      </Router>
      </Layout>

    </React.Fragment>
  );
}

export default App;
