import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/list/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/hotels" element={<List></List>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
