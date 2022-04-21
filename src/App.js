import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from './pages/Home'
import Crypto from './pages/Crypto'
import Bitcoin from './pages/Bitcoin'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="Crypto" element={<Crypto />} />
        <Route path="Bitcoin" element={<Bitcoin />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App