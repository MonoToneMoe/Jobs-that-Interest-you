import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponent from './Components/NavbarComponent';
import HomePageComponent from './Components/Pages/HomePageComponent';
import RumblePageComponent from './Components/Pages/RumblePageComponent';
import NavigoPageComponent from './Components/Pages/NavigoPageComponent';
import XPageComponent from './Components/Pages/XPageComponent';
import PacificAppsComponent from './Components/Pages/PacificAppsComponent';
import IBMPageComponent from './Components/Pages/IBMPageComponent';

function App() {
  return (
    <BrowserRouter>
    
    <NavbarComponent/>
    <Routes>

    <Route path='/' element={ <HomePageComponent/> } />
    <Route path='/rumble' element={ <RumblePageComponent/> } />
    <Route path='/navigo' element={ <NavigoPageComponent/> } />
    <Route path='/x' element={ <XPageComponent/> } />
    <Route path='/pacificapps' element={ <PacificAppsComponent/> } />
    <Route path='/ibm' element={ <IBMPageComponent/> } />

    </Routes>

    </BrowserRouter>
  );
}

export default App;
