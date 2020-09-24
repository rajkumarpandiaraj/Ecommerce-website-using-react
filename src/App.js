import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Productlist from './components/Productlist';
import Details from './components/Details';
import Cart from './components/Cart';
import Error from './components/Error'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './components/all.min.css';
import Globalcontext from './context/Globalcontext'
import Productmodel from './components/Productmodel';

function App() {
  return (
    <Globalcontext>
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Productlist}/>
          <Route path='/details' exact component={Details}/>
          <Route path='/cart' exact component={Cart}/>
          <Route component={Error}/>
        </Switch>
        <Productmodel/>
      </div>
    </Router>
    </Globalcontext>
  );
}

export default App;
