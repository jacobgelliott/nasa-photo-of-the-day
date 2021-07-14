import React from "react";
import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom';
import NasaPhoto from './NasaPhoto';

function App() {
  return (
   <BrowserRouter>
    <div>
      <Route component={NasaPhoto} path='' />
    </div>
   </BrowserRouter>
 );
}

export default App;