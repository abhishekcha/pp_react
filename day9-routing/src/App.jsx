import {HomePage} from "./pages/HomePage";
import {SearchPage} from "./pages/SearchPage";
import {AboutPage} from "./pages/AboutPage";
import { BrowserRouter, Route, Routes } from "react-router";
import { useState } from "react";
const App = () => { 
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      </BrowserRouter>
  );
};
export default App;
