import './App.css';

import React from 'react'
import  Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Weather from './Components/Weather/Weather';

export default function App (){
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<News key="top" country="in" category="top" />}/>
            <Route exact path="/business" element={<News key="business" country="in" category="business" />}/>
            <Route exact path="/entertainment" element={<News key="entertainment" country="in" category="entertainment" />}/>
            <Route exact path="/environment" element={<News key="environment" country="in" category="environment"/>}/>
            <Route exact path="/food" element={<News key="food" country="in" category="food" />}/>
            <Route exact path="/health" element={<News key="health" country="in" category="health" />}/>
            <Route exact path="/politics" element={<News key="politics" country="in" category="politics" />}/>
            <Route exact path="/science" element={<News key="science" country="in" category="science" />}/>
            <Route exact path="/technology" element={<News key="technology" country="in" category="technology" />}/>
            <Route exact path="/sports" element={<News key="sports" country="in" category="sports" />}/>
            <Route exact path="/weather" element={<Weather />}/>
          </Routes>
        </Router>
      </div>
    );
}

