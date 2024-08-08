import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Stories from './components/Stories';
import Category from './components/Category'; // Ensure you import Category
import Write from './components/Write';
import Login from './components/Login';
import Children from './components/Children';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/category" element={<Category />} />
        <Route path="/write" element={<Write />} />
        <Route path="/login" element={<Login />} />
        <Route path ="/children"element={<Children/>}/>
      </Routes>
    </Router>
  );
};

export default App;
