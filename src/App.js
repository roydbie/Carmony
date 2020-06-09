import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Contact } from './Contact';
import { Uitleg } from './Uitleg';
import { NoMatch } from './NoMatch';
import { SpelPagina} from './SpelPagina';
import { Layout } from './components/Layout';

function App() {
  return (
    <React.Fragment>
      <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/spelpagina" component={SpelPagina} />
          <Route path="/uitleg" component={Uitleg} />
          <Route component={NoMatch} />

        </Switch>
      </Router>
      </Layout>

    </React.Fragment>
  );
}

export default App;
