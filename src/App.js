import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Contact } from './Contact';
import { Uitleg } from './Uitleg';
import { NoMatch } from './NoMatch';
import { SpelPagina} from './SpelPagina';
import { Login } from './Login';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import {Audio} from './components/Audio'

function App() {
  return (
    <React.Fragment>
      <Router>
      <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
        <Audio/>
      </div>
      <NavigationBar />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/uiterlijk" component={Contact} />
          <Route path="/spelpagina" component={SpelPagina} />
          <Route path="/uitleg" component={Uitleg} />
          <Route path="/login" component={Login} />
          <Route component={NoMatch} />

        </Switch>
      </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
