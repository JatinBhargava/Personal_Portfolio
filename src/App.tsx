import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './component/Nvabar';
import { Home } from './component/Home';
import Experience from './component/Experience';
import Projects from './component/Project';
import Contact from './component/Conatact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home></Home>
      <Experience></Experience>
      <Projects></Projects>
      <Contact/>
    </div>
  );
}

export default App;
