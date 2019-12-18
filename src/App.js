import React from 'react';
import './App.css';
import MainLayout from './components/layout/MainLayout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/views/Home'
import CardContainer from './components/views/CardContainer';
import Footer from './components/layout/Footer'

function App() {



  return (

  	<BrowserRouter>
      <MainLayout />
	
  	<Switch>

      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />     
      <Route exact path={`${process.env.PUBLIC_URL}/cart`} component={CardContainer} />

     </Switch>
     <Footer/>
     </BrowserRouter>
  );
}

export default App;
