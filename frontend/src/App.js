import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/homePage.js"

import Navbar from "./components/navbar.js";
import CreatePage from "./pages/createPage.js";

const App =() => (
  
      <Router>
      <Navbar />
     <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/create" element={<CreatePage />} />
     </Routes>
      </Router>
    
  
);

export default App;
