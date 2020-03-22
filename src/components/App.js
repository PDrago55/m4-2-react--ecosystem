import React from 'react';
import {
BrowserRouter as Router,
Switch,
Route} from 'react-router-dom'
import Header from './header';
import About from './about'
import Home from './Home'
import Items from './ItemDetails'

function App(props) {
  return (
    <Router>
      <Header>Fruit Bruhporium</Header>
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/about">
        <About />
        </Route>
        <Route exact path="/items/:itemId">
          <Items />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
