import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ClassPage from './pages/ClassPage';
import ClassPage1 from './pages/ClassPage1';
import ClassPage2 from './pages/ClassPage2';
import ClassPage3 from './pages/ClassPage3';
import ClassPage4 from './pages/ClassPage4';
import ClassPage5 from './pages/ClassPage5';
import ClassPage6 from './pages/ClassPage6';
import ClassPage7 from './pages/ClassPage7';
import ClassPage8 from './pages/ClassPage8';
import ClassPage9 from './pages/ClassPage9';
import ClassPage10 from './pages/ClassPage10';
import ClassPage11 from './pages/ClassPage11';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/class" element={<ClassPage />} />
        <Route path="/1class" element={<ClassPage1 />} />
        <Route path="/2class" element={<ClassPage2 />} />
        <Route path="/3class" element={<ClassPage3 />} />
        <Route path="/4class" element={<ClassPage4 />} />
        <Route path="/5class" element={<ClassPage5 />} />
        <Route path="/6class" element={<ClassPage6 />} />
        <Route path="/7class" element={<ClassPage7 />} />
        <Route path="/8class" element={<ClassPage8 />} />
        <Route path="/9class" element={<ClassPage9 />} />
        <Route path="/10class" element={<ClassPage10 />} />
        <Route path="/11class" element={<ClassPage11 />} />
      </Routes>
    </div>
  );
}

export default App;
