import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container.js';
import {Router, Route, hashHistory} from 'react-router';
import PokemonDetailContainer from './pokemon/pokemon_detail_container.js';

const Root = ({store}) => (
  <Provider store = {store}>
    <Router history={hashHistory}>
      <Route path='/' component={PokemonIndexContainer}>
        <Route path='pokemon/:Id' component={PokemonDetailContainer}/>
      </Route>
    </Router>
  </Provider>
);

export default Root;
