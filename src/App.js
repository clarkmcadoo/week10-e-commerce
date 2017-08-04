import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import BaseLayout from './Components/BaseLayout';
import Home from './Components/Home';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Location from './Components/Location';
import Contact from './Components/Contact';
import CupGallery from './Components/CupGallery';
import ShirtGallery from './Components/ShirtGallery';
import GuitarGallery from './Components/GuitarGallery';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <BaseLayout>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/gallery/cups' component={CupGallery}/>
        <Route exact path='/gallery/shirts' component={ShirtGallery}/>
        <Route exact path='/gallery/guitars' component={GuitarGallery}/>
        <Route exact path='/gallery' component={Gallery}/>
        <Route exact path='/location' component={Location}/>
        <Route exact path='/contact' component={Contact}/>


      </Switch>
      </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
