import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Characters from '../containers/Characters';
import GifExperts from '../containers/GifExperts';
import Layout from '../components/Layout';


const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Characters} />
        <Route exact path="/Gifs" component={GifExperts} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App;
